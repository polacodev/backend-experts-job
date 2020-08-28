import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://localhost:27017/ExpertsJob';
const database = async () => {
  try {
    await mongoose.connect(MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    console.log('DB Connection SUCCESSFULLY');
  } catch (error) {
    console.log('DB Connection FAILED');
  }
};

export default database;
