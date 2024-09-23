export const MORGAN_FORMAT=`:method :url - :response-time [:status] \n`;

import mongoose from "mongoose";
export const shapeIntoMongooseObectId = (target: any) => {
    return typeof target === 'string' ? new mongoose.Types.ObjectId(target) : target;
};