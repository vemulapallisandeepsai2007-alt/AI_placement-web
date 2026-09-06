import express from 'express';
import Job from '../models/Job.js';
import Student from '../models/Student.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/dashboard', protect, async (req, res) => {
  const [students, jobs] = await Promise.all([Student.find(), Job.find()]);
  res.json({
    totalStudents: students.length,
    activeDrives: jobs.length,
    eligibleCandidates: Math.max(120, students.length * 3),
    interviewsToday: 18,
    pendingApprovals: 8,
    selectedStudents: 42,
    placementOverview: [
      { name: 'Registered', value: students.length },
      { name: 'Eligible', value: 240 },
      { name: 'Shortlisted', value: 120 },
      { name: 'Interviewed', value: 64 },
      { name: 'Selected', value: 42 },
    ],
  });
});

router.get('/skills', protect, async (req, res) => {
  res.json({
    skills: [
      { name: 'Java', value: 92 },
      { name: 'React', value: 88 },
      { name: 'SQL', value: 84 },
      { name: 'Python', value: 72 },
      { name: 'Docker', value: 40 },
      { name: 'AWS', value: 32 },
    ],
  });
});

router.get('/placements', protect, async (req, res) => {
  res.json({
    ready: 54,
    almostReady: 28,
    needsImprovement: 18,
    departmentData: [
      { name: 'CSE', value: 38 },
      { name: 'IT', value: 22 },
      { name: 'ECE', value: 18 },
      { name: 'MECH', value: 12 },
      { name: 'EEE', value: 10 },
    ],
  });
});

export default router;
