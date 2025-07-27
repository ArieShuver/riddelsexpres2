import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export function verify(req, res) {
    const token = req.headers.token;
    if (!token) {
        res.status(400).json({ message: "not token" });
        return;
    }
    return token;
}

export function veryfyToken(req, res, next) {
    const token = verify(req, res)
    if (!token) {
        res.status(400).json({ message: "not token" });
        return;
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, token) => {
        if (err) {
            return res.status(403).json({ message: "Token is not valid" });
        }
        req.headers.role = token.role;
        next();
    });
}

export function chacAdmin(req, res, next) {
    return (req, res, next) => {
        if (req.headers.role !== "admin") {
            return res.status(403).json({ message: "You are not admin" });
        }
        next();
    }
}

