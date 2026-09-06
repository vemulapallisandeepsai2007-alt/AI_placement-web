# AI Campus Placement Operations & Interview Coordination Agent

A full-stack MERN application for AI-assisted campus placement operations. The system supports recruitment workflows from JD analysis to candidate matching, scheduling, reminders, analytics, and human-in-the-loop approvals.

## Problem Statement

Campus placement workflows are fragmented across manual student, company, and recruiter operations. Universities and placement cells need a coordinated system that understands job requirements, evaluates student eligibility, matches candidates with jobs, schedules interviews, and escalates exceptions to humans without replacing human decision-making.

## Solution

This platform combines:

- AI-powered JD extraction and candidate matching
- Human approval gates at critical decision points
- Automated scheduling and room/panel conflict detection
- Notification delivery and analytics dashboards
- Role-based access for students, recruiters, and placement officers

## Features

- AI job description analysis
- Student eligibility engine
- Transparent weighted candidate matching
- Human approval workflow
- Interview scheduling and conflict management
- Panel and room management
- Notifications and reminders
- Skill gap analysis
- Placement readiness insights
- Exception dashboard
- Full analytics dashboard

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router, Recharts, Framer Motion
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Auth: JWT, bcrypt
- File handling: Multer
- Email: Nodemailer
- AI: OpenAI-compatible API with mock fallback

## Architecture

The application uses a monorepo structure with a separate frontend and backend. The backend exposes REST endpoints for auth, student/company/job management, AI analysis, scheduling, notifications, and analytics.

## Database Schema

Key models include:

- User
- Student
- Company
- Job
- Application
- Interview
- Panel
- Room
- Notification
- AIActivity
- Exception

## Installation

1. Clone the repo.
2. Install root dependencies.
3. Install server dependencies.
4. Install client dependencies.
5. Configure environment variables.
6. Start MongoDB.
7. Run backend and frontend.

## Environment Variables

See .env.example.

## How to run frontend

```bash
npm install --prefix client
npm run dev --prefix client
```

## How to run backend

```bash
npm install --prefix server
npm run dev --prefix server
```

## Demo Accounts

- Placement Officer: admin@placement.ai / Demo@123
- Recruiter: recruiter@techcorp.com / Demo@123
- Student: student@college.edu / Demo@123

## API Documentation

The backend exposes endpoints such as:

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- GET /api/students
- GET /api/companies
- GET /api/jobs
- POST /api/ai/analyze-jd
- POST /api/ai/check-eligibility
- POST /api/ai/match-candidates
- POST /api/scheduling/generate
- GET /api/notifications

## Future Enhancements

- Multi-campus support
- Real LLM orchestration with prompting workflows
- PDF resume parsing with OCR
- AI scheduling optimization and fairness scoring
- Integration with calendar systems and SMS notifications

## License

MIT
