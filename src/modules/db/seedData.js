import pool from './pool.js';

async function seedData() {
  try {

    await pool.query(`
    CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    item TEXT NOT NULL
  )
`);
    await pool.query(`
      INSERT INTO items (item) VALUES
      ('Coca-Cola'),
      ('Pepsi'),
      ('Pop-corn')
    `);

    console.log('Data seeded successfully!');
  } catch (err) {
    console.error('Error seeding data:', err);
  }
}

export { seedData }
