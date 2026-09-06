const candidates = [
  {
    name: 'Priya Sharma',
    score: 92,
    skills: ['React', 'Java', 'SQL'],
    reasons: ['Strong React experience', 'Good Java knowledge', 'Relevant full-stack project'],
    gaps: ['Docker', 'AWS'],
  },
  {
    name: 'Rahul Verma',
    score: 88,
    skills: ['Java', 'Python', 'Git'],
    reasons: ['Strong backend skills', 'Good CGPA', 'Relevant projects'],
    gaps: ['React'],
  },
];

export default function MatchPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">AI candidate matching</p>
        <h1 className="text-3xl font-bold">AI Candidate Matching</h1>
      </div>

      <div className="space-y-6">
        {candidates.map((candidate) => (
          <div key={candidate.name} className="card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold">{candidate.name}</h2>
                <p className="text-sm text-slate-500">Skills: {candidate.skills.join(', ')}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">AI Match Score</p>
                <p className="text-3xl font-bold text-brand-600">{candidate.score}%</p>
              </div>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="font-semibold">Why this candidate matches</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {candidate.reasons.map((reason) => (<li key={reason}>✓ {reason}</li>))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Skill gaps</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {candidate.gaps.map((gap) => (<li key={gap}>⚠ {gap}</li>))}
                </ul>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="btn-primary">Recommend</button>
              <button className="btn-secondary">Reject</button>
              <button className="btn-secondary">View Profile</button>
            </div>
            <div className="mt-4 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-700">AI Recommendation — Human approval required.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
