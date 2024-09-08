import express from 'express';
import { feedBack } from '../controllers/feedback.controller.js';

const router = express.Router();

// POST route for saving feedback
router.post("/", feedBack); // Changed to match the endpoint

export default router;
