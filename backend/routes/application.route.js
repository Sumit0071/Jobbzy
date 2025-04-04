import express, { Router } from "express"
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/application/apply/{id}:
 *   get:
 *     summary: Apply to a job
 *     tags: [Application]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Applied successfully
 */
router.route("/apply/:id").get(isAuthenticated, applyJob);

/**
 * @swagger
 * /api/v1/application/get:
 *   get:
 *     summary: Get all applied jobs for a user
 *     tags: [Application]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of applied jobs
 */
router.route("/get").get(isAuthenticated, getAppliedJobs);

/**
 * @swagger
 * /api/v1/application/{id}/applicants:
 *   get:
 *     summary: Get applicants for a job
 *     tags: [Application]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Job ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of applicants
 */
router.route("/:id/applicants").get(isAuthenticated, getApplicants);

/**
 * @swagger
 * /api/v1/application/status/{id}/update:
 *   post:
 *     summary: Update application status
 *     tags: [Application]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Application ID
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, accepted, rejected]
 *     responses:
 *       200:
 *         description: Status updated
 */
router.route("/status/:id/update").post(isAuthenticated, updateStatus);


export default router;