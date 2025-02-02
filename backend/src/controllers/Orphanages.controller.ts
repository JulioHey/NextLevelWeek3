import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import Orphanage from "../models/Orphanage";
import OrphanageView from '../views/orphanage_views';

export default {
    async index(request: Request, response: Response) {
        const orphanageRepo = getRepository(Orphanage);

        const orphanages = await orphanageRepo.find({
            relations: ["images"]
        });

        return response.json(OrphanageView.renderMany(orphanages))
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

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === "true",
            images
        };

        const Schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            })
            ),
        })

    
        await Schema.validate(data, {
            abortEarly: false
        });

        const orphanage = orphanageRepo.create(data);
    
        await orphanageRepo.save(orphanage);
        
        return response.json({orphanage})
    
    }
}