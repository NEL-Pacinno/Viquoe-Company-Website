// src/utils/index.ts

// This file exports utility functions that can be used across the application for common tasks.

// Example utility function
export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

// Another example utility function
export const generateRandomString = (length: number): string => {
    return Math.random().toString(36).substring(2, 2 + length);
};