import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './data/users.js';
import User from './models/userModel.js';

import connectDb from './config/db.js';

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.error(`import data error: ${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log('Data Destroyed');
    process.exit();
  } catch (err) {
    console.error(`import data error: ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
