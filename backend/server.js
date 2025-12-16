/**
 * PulseCal Backend Server
 * Production-ready server for AWS deployment
 * 
 * This file serves as the entry point for AWS EC2/Elastic Beanstalk deployment
 * It compiles TypeScript and starts the server
 */

require('dotenv').config();

// Check if we're in production (compiled) or development
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  // In production, run the compiled JavaScript
  require('./dist/server.js');
} else {
  // In development, use tsx to run TypeScript directly
  const { register } = require('tsx/esm/api');
  register({
    tsconfig: './tsconfig.json',
  });
  
  // Import and run the TypeScript server
  import('./src/server.ts');
}

