//folayiwolaphilip/Viquoe-Company-Website/viquoe-backend/src/middleware/security.ts
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { Express } from 'express';

export const setupSecurityMiddleware = (app: Express): void => {
  // CORS
  app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
      ? 'https://your-production-domain.com' 
      : 'http://localhost:3000',
    credentials: true
  }));

  // Security headers
  app.use(helmet());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);
};