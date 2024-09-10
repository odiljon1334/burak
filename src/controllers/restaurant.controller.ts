import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send('Home Page');
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

export default restaurantController;