import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  building: String,
  capacity: Number,
  floor: Number,
  facilities: [String],
  availability: [String],
  createdAt: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
