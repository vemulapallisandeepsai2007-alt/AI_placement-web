import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai-campus-placement';
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn('External MongoDB unavailable; trying in-memory MongoDB fallback...');
    try {
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      const conn = await mongoose.connect(mongoUri);
      console.log(`MongoDB memory server connected: ${conn.connection.host}`);
    } catch (memoryError) {
      console.error('MongoDB connection failed:', memoryError.message);
      process.exit(1);
    }
  }
};

export default connectDB;
