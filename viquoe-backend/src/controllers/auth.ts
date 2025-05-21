import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import ms, { StringValue } from 'ms';
import { User } from '../models/User';
import { logger } from '../utils/logger';

const generateToken = (id: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const validExpirationValues: StringValue[] = ['1h', '24h', '7d', '30d'];
  const defaultExpiration: StringValue = '24h';
  
  const expiresIn = (process.env.JWT_EXPIRE as StringValue) || defaultExpiration;
  
  const options: SignOptions = {
    expiresIn: validExpirationValues.includes(expiresIn) 
      ? expiresIn 
      : defaultExpiration
  };

  return jwt.sign({ id }, process.env.JWT_SECRET, options);
};

export const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password, name } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      email,
      password,
      name
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    logger.error('Register error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    logger.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};