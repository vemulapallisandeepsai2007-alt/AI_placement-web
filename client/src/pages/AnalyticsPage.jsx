import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

const overview = [
  { name: 'Registered', value: 100 },
  { name: 'Eligible', value: 80 },
  { name: 'Shortlisted', value: 62 },
  { name: 'Interviewed', value: 40 },
  { name: 'Selected', value: 28 },
];

const departmentData = [
  { name: 'CSE', value: 35 },
  { name: 'IT', value: 25 },
  { name: 'ECE', value: 20 },
  { name: 'MECH', value: 10 },
  { name: 'EEE', value: 10 },
];

const lineData = [
  { month: 'Jan', placement: 18 },
  { month: 'Feb', placement: 25 },
  { month: 'Mar', placement: 32 },
  { month: 'Apr', placement: 38 },
  { month: 'May', placement: 44 },
  { month: 'Jun', placement: 51 },
];

const palette = ['#2563eb', '#14b8a6', '#a78bfa', '#f59e0b', '#ef4444'];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Analytics</p>
        <h1 className="text-3xl font-bold">Placement Analytics</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Total registered students', 100],
          ['Eligible students', 80],
          ['Students placed', 28],
          ['Placement percentage', '28%'],
        ].map(([label, value]) => (
          <div key={label} className="card">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Placement Overview</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={overview}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Department-wise Placement</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={departmentData} innerRadius={50} outerRadius={90} dataKey="value">
                  {departmentData.map((entry, index) => <Cell key={entry.name} fill={palette[index % palette.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Placement Trend</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="placement" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Skill Demand</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[{ name: 'Java', value: 92 }, { name: 'React', value: 88 }, { name: 'SQL', value: 84 }, { name: 'Python', value: 72 }, { name: 'Docker', value: 40 }]}> 
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
