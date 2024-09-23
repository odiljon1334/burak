import { Request, Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log('getAllProducts');
        console.log('body:', req.body);
        res.render('products');
    } catch (err) {
        console.log('Error, getAllProducts:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log('createNewProduct');
        res.send('DONE!');
    } catch (err) {
        console.log('Error, createNewProduct:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.updateChosenProducrt = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenProducrt');
        res.send('DONE!');
    } catch (err) {
        console.log('Error, updateChosenProducrt:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default productController;