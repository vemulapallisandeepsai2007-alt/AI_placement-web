import mongoose from 'mongoose';

const panelSchema = new mongoose.Schema({
  name: String,
  interviewers: [String],
  specialization: String,
  availability: [String],
  createdAt: { type: Date, default: Date.now },
});

const Panel = mongoose.model('Panel', panelSchema);
export default Panel;
