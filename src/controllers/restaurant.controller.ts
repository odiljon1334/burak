import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

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
    try{
        console.log('Login Page');
        res.send('Login Page');
    } catch (err) {
        console.log("ERROR , getLogin:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        console.log('SignUp page');
        res.send('Signup Page');
    } catch (err) {
        console.log("ERROR , getSignup:", err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try{
        console.log('ProcessLogin');
        res.send("DONE!");
    } catch (err) {
        console.log("ERROR , processLogin:", err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try{
        console.log('ProcessSignup');
        res.send("DONE!");
    } catch (err) {
        console.log("ERROR , processSignup:", err);
    }
};

export default restaurantController;