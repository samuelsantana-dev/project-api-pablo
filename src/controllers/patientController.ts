import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { Patient } from '../entities/Patient';

const patientRepository = AppDataSource.getRepository(Patient);

export const createPatient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const patientData = patientRepository.create(req.body);
        const savedPatient = await patientRepository.save(patientData);
        return res.status(201).json({ ...savedPatient, message: 'Paciente criado com sucesso!' });
        } catch (error) {
        return res.status(500).json({ message: 'Erro ao cadastrar paciente', error });
    }
};

export const getAllPatients = async (req: Request, res: Response): Promise<Response> => {
    try {
        const patients = await patientRepository.find();
        return res.json(patients);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar pacientes', error });
    }
};

export const getPatientById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const patient = await patientRepository.findOneBy({ id: Number(req.params.id) });
        if (!patient) return res.status(404).json({ message: 'Paciente não encontrado' });
        return res.json(patient);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar paciente', error });
    }
};

export const updatePatient = async (req: Request, res: Response): Promise<Response> => {
    try {
        await patientRepository.update(req.params.id, req.body);
        const updatedPatient = await patientRepository.findOneBy({ id: Number(req.params.id) });
        if (!updatedPatient) return res.status(404).json({ message: 'Paciente não encontrado' });
        return res.json(updatedPatient);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar paciente', error });
    }
};

export const deletePatient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const deleteResult = await patientRepository.delete(req.params.id);
        if (!deleteResult.affected) return res.status(404).json({ message: 'Paciente não encontrado' });
        return res.json({ message: 'Paciente deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar paciente', error });
    }
};
