const companies = [
  { name: 'TechCorp Solutions', industry: 'Software', location: 'Bengaluru', recruiter: 'Rahul Kumar', contact: '+91 9876543210', status: 'Active' },
  { name: 'CloudNova', industry: 'Cloud', location: 'Hyderabad', recruiter: 'Anita Rao', contact: '+91 9876543211', status: 'Active' },
];

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Company management</p>
          <h1 className="text-3xl font-bold">Companies</h1>
        </div>
        <button className="btn-primary">Add Company</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {companies.map((company) => (
          <div key={company.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{company.industry}</p>
                <h2 className="mt-1 text-xl font-bold">{company.name}</h2>
              </div>
              <span className="status-badge bg-emerald-100 text-emerald-700">{company.status}</span>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p>Location: {company.location}</p>
              <p>Recruiter: {company.recruiter}</p>
              <p>Contact: {company.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
