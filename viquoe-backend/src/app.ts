import express, { Express } from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './config/database';
import { setupSecurityMiddleware } from './middleware/security';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/error';
import authRoutes from './routes/auth';
import { specs } from './config/swagger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Security middleware
setupSecurityMiddleware(app);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Viquoe API is running');
});

// Error handling middleware (should be last)
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;