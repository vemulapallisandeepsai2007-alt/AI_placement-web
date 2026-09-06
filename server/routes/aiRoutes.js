import express from 'express';
import mockAI from '../utils/mockAI.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/analyze-jd', protect, authorize('placement_officer', 'recruiter'), async (req, res) => {
  const payload = mockAI.analyzeJD(req.body.text || 'Software Engineer role requiring Java, Python, React, SQL, Git. Candidates from CSE, IT, ECE with minimum CGPA 7.0, B.Tech/B.E degree.');
  res.json({ success: true, data: payload, message: 'AI Recommendation — Human approval required.' });
});

router.post('/check-eligibility', protect, async (req, res) => {
  const { student, job } = req.body;
  res.json({ success: true, data: mockAI.checkEligibility(student, job) });
});

router.post('/match-candidates', protect, async (req, res) => {
  const { student, job } = req.body;
  res.json({ success: true, data: mockAI.matchCandidate(student, job) });
});

router.post('/skill-gap', protect, async (req, res) => {
  const { student, job } = req.body;
  res.json({ success: true, data: mockAI.skillGap(student, job) });
});

router.post('/readiness', protect, async (req, res) => {
  res.json({ success: true, data: mockAI.readiness(req.body.student || {}) });
});

router.post('/interview-questions', protect, async (req, res) => {
  const { student, job } = req.body;
  res.json({ success: true, data: mockAI.interviewQuestions(student || {}, job || {}) });
});

export default router;
