#! /usr/bin/env node
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { joinPath } from '../../../utils/path.js';

dotenv.config({ path: joinPath("../.env") });

export default new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Neon requires SSL
  }
})

