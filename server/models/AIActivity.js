import mongoose from 'mongoose';

const aiActivitySchema = new mongoose.Schema({
  action: String,
  entityType: String,
  entityId: String,
  result: String,
  confidence: Number,
  requiresHumanReview: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const AIActivity = mongoose.model('AIActivity', aiActivitySchema);
export default AIActivity;
