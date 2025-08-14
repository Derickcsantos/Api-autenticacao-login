const express = require('express');
const cors = require('cors');
const connectdb = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { swaggerUi, swaggerSpec } = require('./config/swagger');
const path = require('path');

const app = express();

connectdb();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
})

app.use('/api/auth', authRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})

module.exports = app;