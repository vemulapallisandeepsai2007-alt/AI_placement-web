import express from 'express';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/generate', protect, authorize('placement_officer', 'recruiter'), async (req, res) => {
  const schedules = [
    {
      candidate: 'Priya Sharma',
      interview: '10:30 AM – 11:00 AM',
      panel: 'Rahul Kumar, Anita Rao',
      room: 'Room 204',
      mode: 'Offline',
    },
    {
      candidate: 'Amit Verma',
      interview: '11:15 AM – 11:45 AM',
      panel: 'Neha Singh, Sameer Jain',
      room: 'Room 305',
      mode: 'Offline',
    },
  ];
  res.json({ success: true, data: schedules });
});

router.get('/interviews', protect, async (req, res) => {
  res.json({ success: true, data: [] });
});

router.put('/interviews/:id', protect, authorize('placement_officer'), async (req, res) => {
  res.json({ success: true, data: { id: req.params.id, status: 'updated' } });
});

export default router;
