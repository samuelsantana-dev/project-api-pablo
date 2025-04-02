import "reflect-metadata";
import { DataSource } from "typeorm";
import { Patient } from "../entities/Patient";
import dotenv from "dotenv";

dotenv.config(); // Carregar variáveis do .env

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, // Usa a URL do Supabase
    entities: [Patient],
    synchronize: false, // ⚠️ Use migrações, não synchronize em produção!
    logging: false,
    ssl: {
        rejectUnauthorized: false, // Necessário para conexão segura com Supabase
    }
});
