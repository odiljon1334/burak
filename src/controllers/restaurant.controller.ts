import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member. enum";



const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send('Home Page');
        // send | json | redirect | end | render
    } catch (err) {
        console.log("ERROR , goHome:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('Login Page');
        res.send('Login Page');
    } catch (err) {
        console.log("ERROR , getLogin:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('SignUp page');
        res.send('Signup Page');
    } catch (err) {
        console.log("ERROR , getSignup:", err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('ProcessLogin');
        console.log('body:', req.body);
        const input: LoginInput = req.body;

        const memberService = new MemberService();
        const result = await memberService.processLogin(input)

        res.send(result);
    } catch (err) {
        console.log("ERROR , processLogin:", err);
        res.send(err);
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('ProcessSignup');
        console.log('body:', req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch (err) {
        console.log("ERROR , processSignup:", err);
        res.send(err);
    }
};

export default restaurantController;