import mongoose from 'mongoose';

const NOTIFICATION = mongoose.model('Notification', new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  createdBy: mongoose.Schema.Types.ObjectId,
  message: mongoose.Schema.Types.String,
  name: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  cellphone: mongoose.Schema.Types.String,
  workarea: mongoose.Schema.Types.String,
  knowledge: mongoose.Schema.Types.String,
}, {
  timestamps: true,
}));

export default NOTIFICATION;
