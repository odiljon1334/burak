import { ExtendedRequest } from "../libs/types/member";
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HttpCode } from "../libs/Errors";
import OrderService from "../models/Order.service";




const orderService = new OrderService();

const orderController: T = {};

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
    try {
        console.log("createOrder");
        const result = await orderService.createOrder(req.member, req.body);

        res.status(HttpCode.CREATED).json(result)
    } catch (err) {
        console.log('Error, createOrder:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default orderController;