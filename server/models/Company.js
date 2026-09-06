import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: String,
  website: String,
  location: String,
  recruiter: String,
  recruiterEmail: String,
  contact: String,
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

const Company = mongoose.model('Company', companySchema);
export default Company;
