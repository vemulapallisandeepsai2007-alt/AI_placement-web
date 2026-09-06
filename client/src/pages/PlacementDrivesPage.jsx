const drives = [
  {
    company: 'TechCorp Solutions',
    title: 'Software Engineer',
    package: '12 LPA',
    location: 'Bengaluru',
    type: 'Full Time',
    deadline: '2026-10-01',
    date: '2026-09-15',
  },
  {
    company: 'CloudNova',
    title: 'Frontend Engineer',
    package: '11 LPA',
    location: 'Hyderabad',
    type: 'Hybrid',
    deadline: '2026-10-05',
    date: '2026-09-18',
  },
];

export default function PlacementDrivesPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Placement drives</p>
          <h1 className="text-3xl font-bold">Placement Drives</h1>
        </div>
        <button className="btn-primary">Create Drive</button>
      </div>

      <div className="grid gap-6">
        {drives.map((drive) => (
          <div key={drive.title} className="card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-slate-500">{drive.company}</p>
                <h2 className="mt-1 text-2xl font-bold">{drive.title}</h2>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary">Upload JD</button>
                <button className="btn-primary">Analyze with AI</button>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              <div><p className="text-xs uppercase text-slate-400">Package</p><p className="mt-1 font-semibold">{drive.package}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Location</p><p className="mt-1 font-semibold">{drive.location}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Type</p><p className="mt-1 font-semibold">{drive.type}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Deadline</p><p className="mt-1 font-semibold">{drive.deadline}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Drive Date</p><p className="mt-1 font-semibold">{drive.date}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Status</p><p className="mt-1 font-semibold text-emerald-600">Active</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
