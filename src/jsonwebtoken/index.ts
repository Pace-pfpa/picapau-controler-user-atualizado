import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

export function JsonWebToken(user: User){
        const token = sign({id: user.id}, "secret", {expiresIn: "30d"});
        return token;
    }
