import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/oder.enum";

const orderSchema = new Schema(
{
    orderTotal: {
        type: Number,
        required: true,
    },

    orderDeleveri: {
        type: Number,
        required: true,
    },

    orderStatus: {
        type: String,
        enum: OrderStatus,
        default: OrderStatus.PAUSE,
    },

    memberId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Member',
    },
}, {timestamps: true});

export default mongoose.model("Order", orderSchema);