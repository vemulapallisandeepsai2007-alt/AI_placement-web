import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
  applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Application', required: true },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  panelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Panel' },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  date: Date,
  startTime: String,
  endTime: String,
  status: { type: String, default: 'Scheduled' },
  createdAt: { type: Date, default: Date.now },
});

const Interview = mongoose.model('Interview', interviewSchema);
export default Interview;
