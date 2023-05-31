const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const templateRoutes = require('./routes/templateRoutes');

const app = express();

const setupSwagger = require('./swagger');
setupSwagger(app);

app.use(cors({ origin: '*' }));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/templates', templateRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
