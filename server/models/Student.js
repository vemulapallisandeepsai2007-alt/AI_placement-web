import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rollNumber: String,
  department: String,
  degree: String,
  cgpa: Number,
  backlogs: Number,
  skills: [String],
  projects: [String],
  certifications: [String],
  experience: String,
  resume: String,
  readinessScore: Number,
  createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
