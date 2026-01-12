import { db } from "./db";

export async function migrate() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255),
      dob DATE,
      gender VARCHAR(20),
      age INT,
      class VARCHAR(50),
      school_name VARCHAR(255),
      parent_name VARCHAR(255),
      phone VARCHAR(20),
      email VARCHAR(255),
      address TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS parents (
      id INT AUTO_INCREMENT PRIMARY KEY,
       full_name VARCHAR(255),
       occupation VARCHAR(255),
       annual_income DECIMAL(15,2),
       no_of_children INT,
       phone_number INT,
       email VARCHAR(255),
       address TEXT,
       city VARCHAR(100),
       state VARCHAR(100)
    )
  `);
}