import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  eligibilityStatus: { type: String, default: 'Pending' },
  matchScore: Number,
  matchBreakdown: {
    skillsMatch: Number,
    educationMatch: Number,
    cgpaMatch: Number,
    projectRelevance: Number,
    certification: Number,
    experience: Number,
  },
  status: { type: String, default: 'AI Recommended' },
  createdAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
