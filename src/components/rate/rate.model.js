import mongoose from 'mongoose';

const RATE = mongoose.model('Rate', new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  ratedBy: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,
  rate: mongoose.Schema.Types.Number,
}, {
  timestamps: true,
}));

export default RATE;
