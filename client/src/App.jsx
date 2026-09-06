import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AIPage from './pages/AIPage';
import PlacementDrivesPage from './pages/PlacementDrivesPage';
import CompaniesPage from './pages/CompaniesPage';
import StudentsPage from './pages/StudentsPage';
import MatchPage from './pages/MatchPage';
import SchedulingPage from './pages/SchedulingPage';
import NotificationsPage from './pages/NotificationsPage';
import ExceptionsPage from './pages/ExceptionsPage';
import AnalyticsPage from './pages/AnalyticsPage';

const token = () => localStorage.getItem('token');

const ProtectedRoute = ({ children }) => {
  return token() ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/ai-agent" element={<ProtectedRoute><AIPage /></ProtectedRoute>} />
      <Route path="/placements" element={<ProtectedRoute><PlacementDrivesPage /></ProtectedRoute>} />
      <Route path="/companies" element={<ProtectedRoute><CompaniesPage /></ProtectedRoute>} />
      <Route path="/students" element={<ProtectedRoute><StudentsPage /></ProtectedRoute>} />
      <Route path="/matching" element={<ProtectedRoute><MatchPage /></ProtectedRoute>} />
      <Route path="/scheduling" element={<ProtectedRoute><SchedulingPage /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
      <Route path="/exceptions" element={<ProtectedRoute><ExceptionsPage /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
    </Routes>
  );
}
