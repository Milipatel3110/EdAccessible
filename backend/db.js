const { Pool } = require('pg');

// Configure your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',     // Your PostgreSQL username
  host: '127.0.0.1',            // Database host (e.g., localhost if running locally)
  database: 'edaccessible',     // Name of your database
  password: 'postgres', // Your database password
  port: 5433,                   // Default PostgreSQL port
});

// Export the pool to use in other parts of the application
module.exports = pool;
