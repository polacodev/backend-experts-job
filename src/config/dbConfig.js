import mongoose from 'mongoose';

import 'dotenv/config';

const MONGO_URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const database = async () => {
  try {
    await mongoose.connect(MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    console.log(`DB ${process.env.DB_NAME} Connected SUCCESSFULLY`);
  } catch (error) {
    console.log(`DB ${process.env.DB_NAME} Connected FAILED`);
  }
};

export default database;
