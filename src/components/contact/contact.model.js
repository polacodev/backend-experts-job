import mongoose from 'mongoose';

const CONTACT = mongoose.model('Contact', new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  createdBy: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  cellphone: mongoose.Schema.Types.String,
  workarea: mongoose.Schema.Types.String,
  status: mongoose.Schema.Types.Boolean,
  description: mongoose.Schema.Types.String,
  knowledge: mongoose.Schema.Types.String,
}, {
  timestamps: true,
}));

export default CONTACT;
