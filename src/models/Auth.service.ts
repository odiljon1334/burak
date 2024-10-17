import Errors, { HttpCode, Message } from "../libs/Errors";
import { AUTH_TIMER } from "../libs/config";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

class AuthService {
    private readonly secretToken;

    constructor() {
        this.secretToken = process.env.SECRET_TOKEN as string;
    }

    public async createToken(payload: Member) {
        return new Promise((resolve, reject) => {
            const duration = `${AUTH_TIMER}h`;

            const newPayload = {
                ...payload,
                _id: (payload._id instanceof Object) ? payload._id.toString() : payload._id
            };

            jwt.sign(
                newPayload, 
                this.secretToken,
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

    public async checkAuth(token: string): Promise<Member> {
        const result: Member = (await jwt.verify(
            token, 
            this.secretToken
        )) as Member;
        console.log(`--- [AUTH] memberNick: ${result.memberNick} ---`);
        return result;
        
    }
}

export default AuthService;