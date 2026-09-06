import express from 'express';
import Notification from '../models/Notification.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const notifications = await Notification.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(notifications);
});

router.post('/send', protect, async (req, res) => {
  const notification = await Notification.create({
    userId: req.user._id,
    title: req.body.title || 'Placement Update',
    message: req.body.message || 'A new update is available.',
    type: req.body.type || 'info',
  });

  res.status(201).json(notification);
});

router.put('/:id/read', protect, async (req, res) => {
  const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  res.json(notification);
});

export default router;
