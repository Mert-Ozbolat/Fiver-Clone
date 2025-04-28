import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'
import User, { IUser } from "../models/user.model.ts";
import jwt from 'jsonwebtoken'


export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const hashedPass: string = bcrypt.hashSync(req.body.password, 12)

    const newUser: IUser = await User.create({
        ...req.body,
        password: hashedPass
    })

    const { password, ...userWithoutPass } = newUser

    res.status(200).json({ message: 'Hesabiniz oluşturuldu', data: userWithoutPass })
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const user: IUser | null = await User.findOne({ username: req.body.username })


    if (!user) {
        next(new Error('Kullanici bulunamadi'))
        return
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password)

    if (!isCorrect) {
        res.status(404).json({ message: 'Şifre yanliş' })
    }

    const token = jwt.sign(
        { id: user._id, isSeller: user.isSeller },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_DURATION as string,
        }
    );

    const { password, ...userWithoutPass } = user

    res
        .cookie("token", token, {
            httpOnly: false,
            sameSite: "lax",
            expires: new Date(Date.now() + 14 * 24 * 3600 * 1000),
        })
        .status(200)
        .json({ message: "Hesaba giriş yapıldı", token, user: user });
}

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.clearCookie('token').status(200).json({ message: 'Hesaptan çikiş yapildi' })
}    