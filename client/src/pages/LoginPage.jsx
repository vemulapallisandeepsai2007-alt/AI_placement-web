import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const roleOptions = [
  { value: 'placement_officer', label: 'Placement Officer' },
  { value: 'recruiter', label: 'Recruiter' },
  { value: 'student', label: 'Student' },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: 'admin@placement.ai',
    password: 'Demo@123',
    role: 'placement_officer',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const payload = isRegister ? form : { email: form.email, password: form.password, role: form.role };
      const res = await api.post(endpoint, payload);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-2">
        <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm">AI Campus Placement Operations</div>
            <h1 className="text-4xl font-bold leading-tight">Smarter placements. Human-approved decisions.</h1>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Demo accounts</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>admin@placement.ai / Demo@123</li>
              <li>recruiter@techcorp.com / Demo@123</li>
              <li>student@college.edu / Demo@123</li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Welcome</p>
              <h2 className="mt-2 text-3xl font-bold">{isRegister ? 'Create account' : 'Sign in'}</h2>
            </div>
            <button onClick={() => setIsRegister((v) => !v)} className="text-sm font-medium text-brand-600">
              {isRegister ? 'Login instead' : 'Register'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500" placeholder="Jane Smith" />
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500" placeholder="name@example.com" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500" placeholder="••••••••" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
              <select name="role" value={form.role} onChange={handleChange} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500">
                {roleOptions.map((role) => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
            </div>

            {error && <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
              {loading ? 'Please wait...' : isRegister ? 'Create account' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
