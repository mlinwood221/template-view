const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js REST API',
      version: '1.0.0',
      description: 'API documentation for the Node.js REST API',
    },
    servers: [
      {
        url: 'http://localhost:4000', // Replace with the actual server URL
        description: 'Local development server',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Replace with the path to your API route files
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};