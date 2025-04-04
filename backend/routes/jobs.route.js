import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/job/post:
 *   post:
 *     summary: Post a new job (Admin only)
 *     tags: [Job]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       201:
 *         description: Job posted successfully
 */
router.route("/post").post(isAuthenticated, postJob);

/**
 * @swagger
 * /api/v1/job/get:
 *   get:
 *     summary: Get all jobs
 *     tags: [Job]
 *     responses:
 *       200:
 *         description: List of all jobs
 */
router.route("/get").get(getAllJobs);

/**
 * @swagger
 * /api/v1/job/getadminjobs:
 *   get:
 *     summary: Get jobs posted by admin
 *     tags: [Job]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of admin jobs
 */
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

/**
 * @swagger
 * /api/v1/job/get/{id}:
 *   get:
 *     summary: Get job by ID
 *     tags: [Job]
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
 *         description: Job data retrieved
 */
router.route("/get/:id").get(isAuthenticated, getJobById);


export default router;