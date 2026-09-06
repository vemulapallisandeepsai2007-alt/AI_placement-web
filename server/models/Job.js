import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  title: { type: String, required: true },
  description: String,
  requirements: [String],
  skills: [String],
  eligibility: {
    minimumCGPA: Number,
    eligibleDepartments: [String],
    requiredDegree: String,
    backlogsAllowed: Number,
    experience: String,
  },
  salary: String,
  location: String,
  deadline: Date,
  status: { type: String, default: 'active' },
  driveDate: Date,
  employmentType: String,
  createdAt: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
