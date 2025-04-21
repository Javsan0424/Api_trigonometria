import { Request, Response, NextFunction } from "express";
import { GeoController } from "../controller/Geo";

const geoController = new GeoController();

export class GeoHttphHandler{
    getPerimeter = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const geo = await geoController.perimeter();
            response.json(geo);
        } catch (error) {
            next(error);
        } 
}