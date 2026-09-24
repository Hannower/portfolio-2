import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
    const { senha } = req.body;

    if (!senha || senha !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ mensagem: 'Senha incorreta' });
    }

    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
});

export default router;