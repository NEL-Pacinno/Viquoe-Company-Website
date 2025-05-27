import { Router } from 'express';
import { YourController } from '../controllers/index';

const router = Router();

// Define your routes here
router.get('/your-route', YourController.yourMethod);
router.post('/your-route', YourController.yourMethod);

export default router;