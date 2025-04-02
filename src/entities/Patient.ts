import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import "reflect-metadata";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    phone!: string;

    @Column()
    birthdate!: string;

    @Column()
    age!: number;

    @Column()
    height!: number;

    @Column()
    weight!: number;

    @Column({ nullable: true })
    cpf!: string;

    @Column()
    documentId!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @CreateDateColumn()
    publishedAt!: Date;
}
