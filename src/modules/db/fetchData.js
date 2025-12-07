import pool from "./pool.js";
import { seedData } from "./seedData.js";

async function getAllItems() {
    try {
        const existsRes = await pool.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_name = 'items'
          )
        `);

        const exists = existsRes.rows[0].exists;
        console.log('items table exists:', exists);

        if (exists) {
            const { rows } = await pool.query("SELECT * FROM items");
            return rows;
        } else {
            await seedData();  // make sure seeding finishes
            const { rows } = await pool.query("SELECT * FROM items");
            return rows;
        }
    } catch (err) {
        console.error('Error in getAllItems:', err);
        throw err;
    }
}

export {
    getAllItems
}