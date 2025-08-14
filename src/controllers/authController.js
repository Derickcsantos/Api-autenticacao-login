const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const userExists = await User.findOne({ email });
        if (userExists){
            return res.status(400).json({ message: 'Usuário já cadastrado'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name, 
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser});
    } catch (error) {
        console.error('Erro ao registrar usuário', error);
        res.status(500).json({message: 'Erro no servidor', error: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email});
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado'});
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Senha incorreta'});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});

        res.status(200).json({message: 'Login realizado com sucesso', token});
    } catch (error) {
        console.error('Erro ao fazer login', error);
        res.status(500).json({message: 'Erro no servidor', error: error.message});
    }
}