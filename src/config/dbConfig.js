import mongoose from 'mongoose';

import 'dotenv/config';
import './colorLogConfig';

const MONGO_URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const database = async () => {
  try {
    await mongoose.connect(MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    console.log('[success]'.success, `Connected ${process.env.DB_NAME} database`);
  } catch (error) {
    console.log('[ error ]'.error, `Not Connected ${process.env.DB_NAME} database`);
  }
};

export default database;
