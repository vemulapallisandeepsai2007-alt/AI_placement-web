import mongoose from 'mongoose';

const exceptionSchema = new mongoose.Schema({
  type: String,
  severity: String,
  description: String,
  suggestion: String,
  status: { type: String, default: 'Open' },
  assignedTo: String,
  createdAt: { type: Date, default: Date.now },
});

const ExceptionModel = mongoose.model('Exception', exceptionSchema);
export default ExceptionModel;
