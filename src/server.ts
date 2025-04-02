import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './config/data-source';
import patientRoutes from './routes/routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', patientRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(() => {
    console.log('📦 Banco de dados conectado!');
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
}).catch(error => console.error('Erro ao conectar no banco de dados', error));
