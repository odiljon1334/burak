import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const memberService = new MemberService();
/** SSR */

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.render('home');
        // send | json | redirect | end | render
    } catch (err) {
        console.log("ERROR , goHome:", err);
        res.redirect('/admin');
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('SignUp page');
        res.render('signup');
    } catch (err) {
        console.log("ERROR , getSignup:", err);
        res.redirect('/admin');
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('Login Page');
        res.render('login');
    } catch (err) {
        console.log("ERROR , getLogin:", err);
        res.redirect('/admin');
    }
};

restaurantController.processSignup = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log('ProcessSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        // TODO: TOKENS AUTHENTICATION

        req.session.member = result;
        console.log(req.session)
        req.session.save(function () {
            res.send(result)

        });
    } catch (err) {
        console.log("ERROR , processSignup:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`
            <script>
              alert("${message}");
              window.location.replace('admin/signup')
            </script>`
        );
    }
};

restaurantController.processLogin = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log('ProcessLogin');

        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);
        // TODO: TOKENS AUTHENTICATION

        req.session.member = result; // resultda qaytgan qiymatni req.session.memberga tenglab olyapmiz. 
        req.session.save(function () {
            res.send(result)
        });
    } catch (err) {
        console.log("ERROR , processLogin:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`
            <script>
              alert("${message}");
              window.location.replace('admin/login')
            </script>`
        );
    }
};

restaurantController.logout = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log('logout');
        req.session.destroy(() => {
            res.redirect('/admin');
        })
    } catch (err) {
        console.log("ERROR , processLogin:", err);
        res.redirect('/admin');
    }
};

restaurantController.checkAuthSession = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log('checkAuthSession');
        if (req.session?.member)
            res.send(`<script> alert(" Hi, ${req.session.member.memberNick}")</script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`);
    } catch (err) {
        console.log("ERROR , processLogin:", err);
        res.send(err);
    }
};

restaurantController.verifyRestaurant = (
    req: AdminRequest, 
    res: Response, 
    next: NextFunction
) => {
    if(req.session?.member?.memberType === MemberType.RESTAURANT){
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login'); </script>`);
    }
};

export default restaurantController;