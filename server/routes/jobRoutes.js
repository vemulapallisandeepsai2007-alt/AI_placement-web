import express from 'express';
import Job from '../models/Job.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const jobs = await Job.find().populate('companyId');
  res.json(jobs);
});

router.post('/', protect, authorize('placement_officer', 'recruiter'), async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', protect, async (req, res) => {
  const job = await Job.findById(req.params.id).populate('companyId');
  if (!job) return res.status(404).json({ message: 'Job not found' });
  res.json(job);
});

router.put('/:id', protect, authorize('placement_officer', 'recruiter'), async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
});

router.delete('/:id', protect, authorize('placement_officer'), async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job removed' });
});

export default router;
