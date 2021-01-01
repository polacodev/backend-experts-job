import mongoose from 'mongoose';

const NOTIFICATION = mongoose.model('Notification', new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.String,
  message: mongoose.Schema.Types.String,
}));

export default NOTIFICATION;
