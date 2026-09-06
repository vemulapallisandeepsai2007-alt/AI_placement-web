export default function AIPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Agent control</p>
          <h1 className="text-3xl font-bold">AI Placement Operations Agent</h1>
        </div>
        <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">🟢 Agent Online</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Agent tasks</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {['Analyze Job Descriptions','Verify Eligibility','Match Candidates','Detect Skill Gaps','Recommend Interview Slots','Detect Scheduling Conflicts','Send Notifications','Generate Reports'].map((task) => (
              <div key={task} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">{task}</div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Status</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>AI Recommendation — Human approval required.</li>
            <li>Confidence: 96%</li>
            <li>Requires human review: 5 candidates</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 card">
        <h2 className="mb-4 text-lg font-semibold">Activity timeline</h2>
        <div className="space-y-4">
          {[
            ['10:42 AM', 'AI analyzed Software Engineer JD'],
            ['10:43 AM', '87 eligible students identified'],
            ['10:44 AM', '32 candidates matched'],
            ['10:45 AM', '5 candidates require human review'],
            ['10:46 AM', 'Interview schedule optimized'],
          ].map(([time, text]) => (
            <div key={time} className="flex gap-4 border-l-2 border-brand-200 pl-4">
              <span className="min-w-20 text-sm text-slate-500">{time}</span>
              <p className="text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
