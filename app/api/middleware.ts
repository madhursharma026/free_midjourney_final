import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

type ReturnType = {
    username: string;
    email: string;
    iat: number;
    exp: number;
}

export const protectedRoute = (request: NextRequest): ReturnType => {
    if (!request.cookies.has('jwt-token')) {
        throw { message: "unauthorized", status: 401 }
    }
    const token = request.cookies.get('jwt-token').value.replace('Bearer ', '')
    const payload = jwt.decode(token) as ReturnType;
    if(!payload) {
        throw { message: "unauthorized", status: 401 }
    }

    // Check token expiration
    if (payload.exp && Date.now() >= payload.exp * 1000) {
        throw { message: "token expired", status: 401 };
    }

    return payload;
}