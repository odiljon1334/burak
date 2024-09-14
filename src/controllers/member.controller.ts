import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

/** SPA */

const memberService = new MemberService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('signup');
        console.log('body:', req.body);
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        // TODO: TOKEN

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR , signup:", err);
        res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');
        console.log('body:', req.body);
        const input: LoginInput = req.body,
            result = await memberService.login(input);
        // TODO: TOKEN

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR , login:", err);
        res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default memberController;