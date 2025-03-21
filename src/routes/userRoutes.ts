import { Router, Request, Response } from 'express';
const router = Router();

const users = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
];

router.get('/users-list', (req: Request, res: Response) => {
    res.json(users);
});

router.get('/lista-clientes', (req: Request, res: Response) => {
    res.json({ message: 'API funcionando!' });
});

// router.get('/users/:id', (req: Request, res: Response) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
//     res.json(user);
// });

export const userRoutes = router;
