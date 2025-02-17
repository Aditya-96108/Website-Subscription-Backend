// import { config } from 'dotenv';

// // Ensure NODE_ENV has a default value before constructing the path
// const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;

// // Load the environment variables
// config({ path: envFile });

// // Export safely
// export const PORT = process.env.PORT || 5500;
// export const NODE_ENV = process.env.NODE_ENV || 'development';
// export const DB_URI = process.env.DB_URI || 'DATABASE';
// export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
// export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
// export const ARCJET_ENV = process.env.ARCJET_ENV || 'development';
// export const ARCJET_KEY = process.env.ARCJET_KEY || 'ajkey_01jm45463xepns39aaevcayw8h';
// export const QSTASH_TOKEN = process.env.QSTASH_TOKEN;
// export const QSTASH_URL = process.env.QSTASH_URL;
// export const SERVER_URL = process.env.SERVER_URL;
// export const QSTASH_CURRENT_SIGNING_KEY = process.env.QSTASH_CURRENT_SIGNING_KEY;
// export const QSTASH_NEXT_SIGNING_KEY = process.env.QSTASH_NEXT_SIGNING_KEY;
// export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
  PORT, NODE_ENV, SERVER_URL,
  DB_URI,
  JWT_SECRET, JWT_EXPIRES_IN,
  ARCJET_ENV, ARCJET_KEY,
  QSTASH_TOKEN, QSTASH_URL,
  EMAIL_PASSWORD,
} = process.env;
