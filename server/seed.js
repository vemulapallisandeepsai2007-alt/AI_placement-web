import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import Student from './models/Student.js';
import Company from './models/Company.js';
import Job from './models/Job.js';
import Application from './models/Application.js';
import Interview from './models/Interview.js';
import Panel from './models/Panel.js';
import Room from './models/Room.js';
import Notification from './models/Notification.js';
import AIActivity from './models/AIActivity.js';
import ExceptionModel from './models/Exception.js';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai-campus-placement');

    await Promise.all([
      User.deleteMany({}),
      Student.deleteMany({}),
      Company.deleteMany({}),
      Job.deleteMany({}),
      Application.deleteMany({}),
      Interview.deleteMany({}),
      Panel.deleteMany({}),
      Room.deleteMany({}),
      Notification.deleteMany({}),
      AIActivity.deleteMany({}),
      ExceptionModel.deleteMany({}),
    ]);

    const officerHash = await bcrypt.hash(process.env.DEMO_PASSWORD || 'Demo@123', 10);
    const officer = await User.create({
      name: 'Placement Officer',
      email: 'admin@placement.ai',
      password: officerHash,
      role: 'placement_officer',
    });

    const recruiter = await User.create({
      name: 'Tech Recruiter',
      email: 'recruiter@techcorp.com',
      password: officerHash,
      role: 'recruiter',
    });

    const studentUser = await User.create({
      name: 'Student Demo',
      email: 'student@college.edu',
      password: officerHash,
      role: 'student',
    });

    const student = await Student.create({
      userId: studentUser._id,
      rollNumber: 'CS-2024-221',
      department: 'CSE',
      degree: 'B.Tech',
      cgpa: 8.2,
      backlogs: 0,
      skills: ['React', 'Java', 'SQL', 'Python', 'Git'],
      projects: ['Campus Placement App', 'E-commerce Portal'],
      certifications: ['SQL Certification', 'React Basics'],
      experience: 'Fresher',
      resume: 'resume.pdf',
      readinessScore: 78,
    });

    const company = await Company.create({
      name: 'TechCorp Solutions',
      industry: 'Software',
      website: 'https://techcorp.ai',
      location: 'Bengaluru',
      recruiter: 'Rahul Kumar',
      recruiterEmail: 'recruiter@techcorp.com',
      contact: '9876543210',
    });

    const job = await Job.create({
      companyId: company._id,
      title: 'Software Engineer',
      description: 'Build scalable web products using Java, React and SQL.',
      requirements: ['Good problem solving', 'Full-stack development'],
      skills: ['Java', 'React', 'SQL', 'Git'],
      eligibility: {
        minimumCGPA: 7.0,
        eligibleDepartments: ['CSE', 'IT', 'ECE'],
        requiredDegree: 'B.Tech / B.E.',
        backlogsAllowed: 0,
        experience: 'Fresher',
      },
      salary: '12 LPA',
      location: 'Bengaluru',
      deadline: new Date('2026-10-01'),
      driveDate: new Date('2026-09-15'),
      employmentType: 'Full Time',
    });

    await Application.create({
      studentId: student._id,
      jobId: job._id,
      eligibilityStatus: 'Eligible',
      matchScore: 92,
      matchBreakdown: {
        skillsMatch: 95,
        educationMatch: 100,
        cgpaMatch: 90,
        projectRelevance: 88,
        certification: 80,
        experience: 90,
      },
    });

    await Panel.create({
      name: 'Core Engineering Panel',
      interviewers: ['Rahul Kumar', 'Anita Rao', 'Sanjay Nair'],
      specialization: 'Full Stack',
      availability: ['2026-09-15 10:30 AM', '2026-09-15 11:00 AM'],
    });

    await Room.create({
      roomNumber: 'Room 204',
      building: 'Innovation Block',
      capacity: 6,
      floor: 2,
      facilities: ['Projector', 'Computer', 'WiFi', 'AC'],
      availability: ['2026-09-15 10:30 AM'],
    });

    await Notification.create({
      userId: studentUser._id,
      title: 'Interview Tomorrow',
      message: 'Your interview is scheduled tomorrow at 10:30 AM.',
      type: 'interview',
    });

    await AIActivity.create({
      action: 'Analyzed Software Engineer JD',
      entityType: 'Job',
      entityId: job._id.toString(),
      result: '87 eligible students identified',
      confidence: 0.96,
      requiresHumanReview: false,
    });

    await ExceptionModel.create({
      type: 'Candidate skill data incomplete',
      severity: 'Medium',
      description: 'One candidate profile is missing AWS certification record.',
      suggestion: 'Request document upload and human review',
      status: 'Open',
      assignedTo: 'Placement Officer',
    });

    console.log('Seed data created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seed();
