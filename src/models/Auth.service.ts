import Errors, { HttpCode, Message } from "../libs/Errors";
import { AUTH_TIMER } from "../libs/config";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

class AuthService {
    constructor() {

    }

    public async createToken(payload: Member) {
        return new Promise((resolve, reject) => {
            const duration = `${AUTH_TIMER}h`;

            console.log('payload:', payload);
            const newPayload = {
                ...payload,
                _id: (payload._id instanceof Object) ? payload._id.toString() : payload._id
            };
            console.log('newPayload:', newPayload);

            jwt.sign(
                newPayload, 
                process.env.SECRET_TOKEN as string, 
                {
                expiresIn: duration,
            }, 
            (err, token) => {
                if (err) {
                    console.error('Token creation error:', err); // Xatolikni konsolga yozib oling
                    reject(
                        new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
                    );
                } else {
                    resolve(token);
                }
            });
        });
    }
}

export default AuthService;