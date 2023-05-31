const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Template:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Template ID
 *         title:
 *           type: string
 *           description: Template title
 *         cost:
 *           type: string
 *           description: Template cost
 *         description:
 *           type: string
 *           description: Template description
 *         thumbnail:
 *           type: string
 *           description: Template thumbnail
 *         image:
 *           type: string
 *           description: Template image
 *       required:
 *         - id
 *         - title
 *         - cost
 *         - description
 *         - thumbnail
 *         - image
 */

/**
 * @swagger
 * /templates:
 *   get:
 *     summary: Get all templates
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Template'
 */
router.get('/', templateController.getAll);

module.exports = router;