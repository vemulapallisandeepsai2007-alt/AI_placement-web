const exceptions = [
  { type: 'Student has missing CGPA data', severity: 'High', assignedTo: 'Placement Officer', status: 'Open' },
  { type: 'Two interviews assigned to same panel', severity: 'Critical', assignedTo: 'Recruiter', status: 'Review' },
  { type: 'Candidate skill data incomplete', severity: 'Medium', assignedTo: 'Student', status: 'Open' },
];

export default function ExceptionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Human review</p>
        <h1 className="text-3xl font-bold">AI Exceptions & Human Review</h1>
      </div>

      <div className="space-y-4">
        {exceptions.map((item) => (
          <div key={item.type} className="card">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold">{item.type}</h2>
                <p className="mt-1 text-sm text-slate-600">Suggested solution: request missing information and validate scheduling conflicts.</p>
              </div>
              <div className="flex gap-2">
                <span className="status-badge bg-amber-100 text-amber-700">{item.severity}</span>
                <span className="status-badge bg-slate-100 text-slate-700">{item.status}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-slate-600">Assigned to: {item.assignedTo}</p>
              <button className="btn-primary">Resolve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
