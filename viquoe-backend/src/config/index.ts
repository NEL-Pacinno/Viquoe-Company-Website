// src/config/index.ts

import dotenv from 'dotenv';
import { logger } from '../utils/logger';

dotenv.config();

interface DatabaseConfig {
  uri: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    serverSelectionTimeoutMS: number;
    socketTimeoutMS: number;
  };
}

interface Config {
  env: string;
  port: number;
  db: DatabaseConfig;
  jwtSecret: string;
  jwtExpire: string;
  cors: {
    origin: string | string[];
    credentials: boolean;
  };
}

const validateConfig = () => {
  const requiredEnvVars = ['JWT_SECRET', 'MONGODB_URI'];
  const missing = requiredEnvVars.filter(env => !process.env[env]);
  
  if (missing.length > 0) {
    logger.error(`Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }
};

validateConfig();

const config: Config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/viquoe',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
  },
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  jwtExpire: process.env.JWT_EXPIRE || '24h',
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.ALLOWED_ORIGINS?.split(',') || [] 
      : 'http://localhost:3000',
    credentials: true
  }
};

export default config;
