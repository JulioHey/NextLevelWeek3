import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";
import OrphanageView from '../views/orphanage_views';

export default {
    async index(request: Request, response: Response) {
        const orphanageRepo = getRepository(Orphanage);

        const orphanages = await orphanageRepo.find({
            relations: ["images"]
        });

        return response.json(orphanages)
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;

        const orphanageRepo = getRepository(Orphanage);

        const orphanages = await orphanageRepo.findOneOrFail(id, {
            relations: ["images"]
        });



        return response.json(OrphanageView.render(orphanages))
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body
        
        const orphanageRepo = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image=> {
            return {path: image.filename}
        })
    
        const orphanage = orphanageRepo.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });
    
        await orphanageRepo.save(orphanage);
        
        return response.json({orphanage})
    
    }
}