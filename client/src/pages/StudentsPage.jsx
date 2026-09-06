const students = [
  { name: 'Rahul Verma', department: 'CSE', cgpa: 8.2, skills: ['Java', 'React', 'SQL'], status: 'Eligible' },
  { name: 'Priya Sharma', department: 'IT', cgpa: 8.8, skills: ['React', 'Node', 'MongoDB'], status: 'Shortlisted' },
  { name: 'Amit Singh', department: 'ECE', cgpa: 7.1, skills: ['Python', 'SQL'], status: 'Pending Review' },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Student records</p>
        <h1 className="text-3xl font-bold">Students</h1>
      </div>

      <div className="card overflow-hidden">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">CGPA</th>
              <th className="px-4 py-3 font-medium">Skills</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.name} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium">{student.name}</td>
                <td className="px-4 py-3">{student.department}</td>
                <td className="px-4 py-3">{student.cgpa}</td>
                <td className="px-4 py-3">{student.skills.join(', ')}</td>
                <td className="px-4 py-3"><span className="status-badge bg-brand-100 text-brand-700">{student.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
