import { NextFunction, Request, Response } from "express";

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({ message: 'İşlem başarili' })
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({ message: 'İşlem başarili' })
}

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({ message: 'İşlem başarili' })
}