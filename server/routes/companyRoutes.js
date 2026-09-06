import express from 'express';
import Company from '../models/Company.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

router.post('/', protect, authorize('placement_officer', 'recruiter'), async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', protect, async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ message: 'Company not found' });
  res.json(company);
});

router.put('/:id', protect, authorize('placement_officer', 'recruiter'), async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(company);
});

router.delete('/:id', protect, authorize('placement_officer'), async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: 'Company removed' });
});

export default router;
