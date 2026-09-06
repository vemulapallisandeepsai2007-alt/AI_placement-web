import express from 'express';
import Student from '../models/Student.js';
import User from '../models/User.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, authorize('placement_officer'), async (req, res) => {
  const students = await Student.find().populate('userId', 'name email');
  res.json(students);
});

router.get('/:id', protect, async (req, res) => {
  const student = await Student.findById(req.params.id).populate('userId', 'name email');
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

router.post('/', protect, async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
});

export default router;
