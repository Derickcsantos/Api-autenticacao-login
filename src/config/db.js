const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexão com o banco de dados feita com sucesso');
    } catch (error) {
        console.error('Conexão com o banco de dados falhou', error.message);
        process.exit(1);
    }

};

module.exports = connectDB;