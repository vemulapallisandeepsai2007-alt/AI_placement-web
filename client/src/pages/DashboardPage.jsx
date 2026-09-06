import { useEffect, useState } from 'react';
import { BarChart3, BriefcaseBusiness, CheckCircle2, FileText, Users, BellRing, Clock3 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, CartesianGrid } from 'recharts';
import api from '../services/api';

const palette = ['#2563eb', '#14b8a6', '#a78bfa', '#f59e0b', '#ef4444'];

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeDrives: 0,
    eligibleCandidates: 0,
    interviewsToday: 0,
    pendingApprovals: 0,
    selectedStudents: 0,
    placementOverview: [],
  });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/analytics/dashboard');
        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    load();
  }, []);

  const cards = [
    { label: 'Total Students', value: stats.totalStudents, icon: Users },
    { label: 'Active Drives', value: stats.activeDrives, icon: BriefcaseBusiness },
    { label: 'Eligible Candidates', value: stats.eligibleCandidates, icon: FileText },
    { label: 'Interviews Today', value: stats.interviewsToday, icon: Clock3 },
    { label: 'Pending Approvals', value: stats.pendingApprovals, icon: BellRing },
    { label: 'Selected Students', value: stats.selectedStudents, icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Overview</p>
          <h1 className="text-3xl font-bold">Placement Officer Dashboard</h1>
        </div>
        <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">Agent Online</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-3 text-3xl font-bold">{value}</p>
              </div>
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="card">
          <div className="mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-brand-600" />
            <h2 className="text-lg font-semibold">Placement Overview</h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.placementOverview}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[8,8,0,0]} fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Department-wise Placement</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie dataKey="value" data={[{ name: 'CSE', value: 38 }, { name: 'IT', value: 22 }, { name: 'ECE', value: 18 }, { name: 'MECH', value: 12 }, { name: 'EEE', value: 10 }]} innerRadius={55} outerRadius={90} fill="#8884d8" paddingAngle={2}>
                  {palette.map((color, index) => <Cell key={index} fill={color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 card">
        <h2 className="mb-4 text-lg font-semibold">AI Agent Activity</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <p>✓ Analyzed 12 job descriptions</p>
          <p>✓ Verified 486 student eligibility records</p>
          <p>✓ Generated 132 candidate matches</p>
          <p>⚠ 8 cases require human review</p>
          <p>✓ Sent 240 interview reminders</p>
        </div>
      </div>
    </div>
  );
}
