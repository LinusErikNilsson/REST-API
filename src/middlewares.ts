import express, { NextFunction, request, Request, Response} from "express";
import { appendFile } from "fs";
import { send } from "process";

export const securedLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    const securedLoggedIn = true;
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

export const errorManager = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json(err.message);
};

export const notFoundManager = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json("The requested resource does not exist");
};