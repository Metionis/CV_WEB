import dotenv from 'dotenv';

dotenv.config();
// If have an error about "Unexpected token 'export'" add type line to package.json file "type": "module"
export const ENV_VARS = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  API_URL: process.env.VITE_API_URL
}