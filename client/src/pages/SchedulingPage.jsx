const interviews = [
  { candidate: 'Priya Sharma', time: '10:30 AM – 11:00 AM', panel: 'Rahul Kumar, Anita Rao', room: 'Room 204', status: 'Suggested' },
  { candidate: 'Amit Verma', time: '11:15 AM – 11:45 AM', panel: 'Neha Singh, Sameer Jain', room: 'Room 305', status: 'Conflict-Free' },
];

export default function SchedulingPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Scheduling</p>
          <h1 className="text-3xl font-bold">Interview Scheduling Agent</h1>
        </div>
        <button className="btn-primary">Generate Schedule</button>
      </div>

      <div className="space-y-6">
        {interviews.map((item) => (
          <div key={item.candidate} className="card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-slate-500">Candidate</p>
                <h2 className="text-xl font-bold">{item.candidate}</h2>
              </div>
              <span className="status-badge bg-emerald-100 text-emerald-700">{item.status}</span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div><p className="text-xs uppercase text-slate-400">Interview</p><p className="mt-1 font-semibold">{item.time}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Panel</p><p className="mt-1 font-semibold">{item.panel}</p></div>
              <div><p className="text-xs uppercase text-slate-400">Room</p><p className="mt-1 font-semibold">{item.room}</p></div>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="btn-primary">Accept</button>
              <button className="btn-secondary">Modify</button>
              <button className="btn-secondary">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
