import express from "express"
import { getCompany, getCompanybyId, registerCompany, updateCompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {singleUpload} from '../middlewares/multer.js'

const router = express.Router();

/**
 * @swagger
 * /api/v1/company/registerCompany:
 *   post:
 *     summary: Register a new company
 *     tags: [Company]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               industry:
 *                 type: string
 *     responses:
 *       201:
 *         description: Company registered
 */
router.route("/registerCompany").post(isAuthenticated, registerCompany);

/**
 * @swagger
 * /api/v1/company/get:
 *   get:
 *     summary: Get all companies
 *     tags: [Company]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of companies
 */
router.route("/get").get(isAuthenticated, getCompany);

/**
 * @swagger
 * /api/v1/company/get/{id}:
 *   get:
 *     summary: Get company by ID
 *     tags: [Company]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Company data
 */
router.route("/get/:id").get(isAuthenticated, getCompanybyId);

/**
 * @swagger
 * /api/v1/company/update/{id}:
 *   put:
 *     summary: Update company details
 *     tags: [Company]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               logo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Company updated
 */
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

export default router;