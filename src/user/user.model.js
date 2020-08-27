import mongoose from 'mongoose';

const USER = mongoose.model('User', new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
}));

export default USER;
