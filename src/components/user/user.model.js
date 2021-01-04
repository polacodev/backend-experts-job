import mongoose from 'mongoose';

const USER = mongoose.model('User', new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  cellphone: mongoose.Schema.Types.String,
  workarea: mongoose.Schema.Types.String,
  status: mongoose.Schema.Types.Boolean,
  description: mongoose.Schema.Types.String,
  knowledge: mongoose.Schema.Types.String,
}, {
  timestamps: true,
}));

export default USER;
