import { Request, Response } from "express";

export const getAllPosts =  (req: Request, res: Response) => {
    throw new Error("Dev error");
    res.status(200).json("Hello Get All!");
};

export const putPost = (req: Request, res: Response) => {
    res.status(200).json("Hello put");
}

export const createPost =  (req: Request, res: Response) => {
    // Create post
    res.status(201).json({});
};

export const deletePost =  (req: Request, res: Response) => {
    // deletepost post
    res.status(204).json(null);
};