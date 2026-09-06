const items = [
  { title: 'Interview tomorrow at 10:30 AM', message: 'Your interview with TechCorp Solutions is scheduled.', type: 'alert' },
  { title: 'Application shortlisted', message: 'Your application for ABC Corp was shortlisted.', type: 'success' },
  { title: 'Interview room changed', message: 'Room has been changed to Room 305.', type: 'warning' },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Notifications</p>
        <h1 className="text-3xl font-bold">Notification Center</h1>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="card flex items-start justify-between gap-4">
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{item.message}</p>
            </div>
            <span className="status-badge bg-brand-100 text-brand-700">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
