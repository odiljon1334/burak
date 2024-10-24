import OrderItemModel from "../schema/OrderItem.model";
import OrderModel from "../schema/Order.model";
import { Member } from "../libs/types/member";
import { Order, OrderItemInput } from "../libs/types/order";
import { shapeIntoMongooseObectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { ObjectId } from "mongoose";

class OrderService {
    private readonly orderModel;
    private readonly orderItemModel;

    constructor() {
        this.orderModel = OrderModel;
        this.orderItemModel = OrderItemModel;
    }

    public async createOrder(member: Member, input: OrderItemInput[]): Promise<Order> {
        const memberId = shapeIntoMongooseObectId(member._id);
        const amount = input.reduce((accumlator: number, item: OrderItemInput ) => {
            return accumlator + item.itemPrice * item.itemQuantity;
        }, 0);
        const delivery = amount < 100 ? 5 : 0;

        try {
            const newOrder: Order = await this.orderModel.create({
                orderTotal: amount + delivery,
                orderDelivery: delivery,
                memberId: memberId,
            });
            // TODO create order items
            const orderId = newOrder._id;
            console.log("orderId:", orderId);
            await this.recordOrderItem(orderId, input);

            return newOrder
        } catch (err) {
            console.log("ERROR, model:createOrder:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
            
        }
        
    }
    private async recordOrderItem(orderId: ObjectId, input: OrderItemInput[]): Promise<void> {
        const promisedList = input.map( async (item: OrderItemInput) => {
            item.orderId = orderId;
            item.productId = shapeIntoMongooseObectId(item.productId);
            await this.orderItemModel.create(item);
            return "INSERTED";
        });
        const orderItemState = await Promise.all(promisedList);
        console.log("orderItemState:", orderItemState); 
    }
}

export default OrderService;