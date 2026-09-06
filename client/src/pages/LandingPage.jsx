import { ArrowRight, BrainCircuit, BriefcaseBusiness, CalendarCheck2, ChartColumn, Gauge, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const workflow = ['Job Description', 'AI Eligibility Extraction', 'Candidate Matching', 'Human Approval', 'Interview Scheduling', 'Panel Coordination', 'Placement'];
const features = [
  { icon: BrainCircuit, title: 'AI Job Analysis', desc: 'Extract skills, eligibility, and role requirements automatically.' },
  { icon: Users, title: 'Smart Candidate Matching', desc: 'Weighted scoring with explainable reasons.' },
  { icon: Gauge, title: 'Automated Eligibility Checking', desc: 'Compare resumes, departments, CGPA, and degree rules.' },
  { icon: CalendarCheck2, title: 'Interview Scheduling', desc: 'Balance candidates, panels, and room availability.' },
  { icon: BriefcaseBusiness, title: 'Panel Coordination', desc: 'Assign conflict-free panels and venue slots.' },
  { icon: Sparkles, title: 'Student Notifications', desc: 'Keep candidates informed with timely reminders.' },
  { icon: ChartColumn, title: 'Skill Gap Analysis', desc: 'Identify missing skills and learning priorities.' },
  { icon: ArrowRight, title: 'Placement Analytics', desc: 'Monitor readiness, conversion, and placement outcomes.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3 font-semibold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">AI</div>
            <span>Campus Placement Agent</span>
          </div>
          <div className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#workflow">Workflow</a>
            <a href="#features">Features</a>
            <a href="#demo">Demo</a>
          </div>
          <Link to="/login" className="btn-primary">Get Started</Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
              <Sparkles className="h-4 w-4" /> AI operations for campus hiring
            </div>
            <h1 className="max-w-xl text-5xl font-bold tracking-tight text-slate-900">
              Smarter Campus Placements. <span className="text-brand-600">Coordinated by AI.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              An intelligent placement operations agent that connects companies, students and placement teams — from job requirements to interview coordination and placement insights.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/login" className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#demo" className="btn-secondary">View Demo</a>
            </div>
          </div>

          <div className="card relative overflow-hidden p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-100 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="text-sm text-slate-500">Active drives</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
                <div className="rounded-xl bg-brand-100 p-3 text-brand-700"><BriefcaseBusiness className="h-6 w-6" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Eligible</p>
                  <p className="mt-2 text-2xl font-bold">486</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Matches</p>
                  <p className="mt-2 text-2xl font-bold">132</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium">AI status</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">Online</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Job descriptions analyzed</li>
                  <li>✓ Eligibility checked</li>
                  <li>✓ Candidate matches generated</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">AI-powered workflow</p>
            <h2 className="mt-3 text-3xl font-bold">From requirement to offer — with human oversight</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-7">
            {workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-slate-700">{step}</span>
                {index < workflow.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-slate-400" />}
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Features</p>
            <h2 className="mt-3 text-3xl font-bold">Operational intelligence for placement teams</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="mx-auto max-w-5xl px-6 pb-20 pt-8">
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-soft">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Hackathon demo</p>
                <h3 className="mt-3 text-3xl font-bold">Launch the placement operations dashboard</h3>
              </div>
              <Link to="/login" className="btn-primary bg-white text-brand-700 hover:bg-slate-100">Try the demo</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
