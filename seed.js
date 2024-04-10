const mysql = require('mysql2/promise');
const fs = require('fs');

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'atlasluna',
  database: 'employer_tracker_db'
};

const seedSQL = fs.readFileSync('./db/seed.sql', 'utf8');

async function seedDatabase() {
  try {
    // Create a connection to the database
    const connection = await mysql.createConnection(dbConfig);

    // Execute the seed SQL queries
    await connection.query(seedSQL);

    // Close the connection
    await connection.end();

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Call the seedDatabase function to seed the database
seedDatabase();
