import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Image from './Images';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn({name: "orphanage_id"})
    id: number;

    @Column({name: "orphanage_name"})
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude:number;

    @Column()
    about: string;

    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(
        () => Image,
        image => image.orphanage,
        {cascade: ["insert", "update"]}
    )
    @JoinColumn({name: "orphanage_id"})
    images: Image[]
}