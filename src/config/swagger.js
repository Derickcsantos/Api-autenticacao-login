const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Api de autenticação',
            version: '1.0.0',
            description: 'Api de autenticação com registro, utilizando node.js, express, jwt e mongoDB',
        },
        servers: [
            {
                url: 'http:localhost:3000',
                description: 'Servidor local para desenvolvimento',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec }; 