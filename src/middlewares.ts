import express, { NextFunction, Request, Response} from "express";

export const securedLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    const securedLoggedIn = false;
    if (securedLoggedIn) {
        next();
    }
    res.status(401).json("Login is required to access this")
 };

 export const consolelogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
    return;
};