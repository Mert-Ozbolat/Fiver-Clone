import { NextFunction, Request, Response } from "express";
import c from "../utils/catchAsync.ts";
import Gig from "../models/gig.model.ts";
import error from "../utils/error.ts";
import upload from "../utils/cloudinary.ts";
import { ExtendedFiles, Filters, Query } from "../types/index.ts";

export const getAllGigs = c(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const gigs = await Gig.find();
        res
            .status(200)
            .json({ results: gigs.length, gigs, message: "İşlem başarili" });
    }
);

export const getGig = c(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).json({ message: "İşlem başarili" });
    }
);

export const createGig = c(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (!req.isSeller)
            return next(error(403, "Sadece seller hesabı hizmet oluşturabilir"));

        const files = req.files as unknown as ExtendedFiles;

        const coverImage = await upload(
            files.coverImage[0].path,
            next,
            "gig-images"
        );

        const promises = files.images.map((image) =>
            upload(image.path, next, "gig-images")
        );

        const images = await Promise.all(promises);

        req.body.coverImage = coverImage.secure_url;
        req.body.images = images.map((image) => image.secure_url);

        req.body.package_features = req.body.package_features?.split(",");

        const savedGig = await Gig.create({ ...req.body, user: req.userId });

        res
            .status(201)
            .json({ message: "Hizmet başarıyla oluşturuldu", gig: savedGig });
    }
);

export const deleteGig = c(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).json({ message: "İşlem başarili" });
    }
);