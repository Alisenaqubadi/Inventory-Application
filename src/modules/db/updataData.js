import pool from "./pool.js"

async function insertItem(item) {
        await pool.query("INSERT INTO items (item) VALUES ($1)", [item]);
}

export {
    insertItem
}