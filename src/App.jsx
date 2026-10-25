import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/user/Signup'
import Login from './pages/user/Login'
import ForgtPswd from './pages/user/ForgtPswd'
import Dashboard from './pages/user/Dashboard'
import Profile from './pages/user/Profile'
import EditProfile from './pages/user/EditProfile'
import HealthGoals from './pages/user/HealthGoals'
import CategorySelection from './pages/user/CategorySelection'
import Settings from './pages/user/Settings'
import HealthTracking from './pages/tracking/HealthTracking'
import MaternalCare from './pages/tracking/MaternalCare'
import WomensHealth from './pages/tracking/WomensHealth'
import ElderlyCare from './pages/tracking/ElderlyCare'
import FitnessWellness from './pages/tracking/FitnessWellness'
import HealthJourney from './pages/tracking/HealthJourney'
import AppointmentsDashboard from './pages/appointments/AppointmentsDashboard'
import ManageAppointments from './pages/appointments/ManageAppointments'
import MedicationReminders from './pages/appointments/MedicationReminders'
import ActivityReminders from './pages/appointments/ActivityReminders'
import DoctorDetails from './pages/appointments/DoctorDetails'
import CaregiverManagement from './pages/caregiver/CaregiverManagement'
import SharedHealthInfo from './pages/caregiver/SharedHealthInfo'
import HealthChat from './pages/assistant/HealthChat'
import Recommendations from './pages/assistant/Recommendations'
import MedicalExplanation from './pages/assistant/MedicalExplanation'
import HealthEducation from './pages/assistant/HealthEducation'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'
import CategoryManagement from './pages/admin/CategoryManagement'
import ContentManagement from './pages/admin/ContentManagement'
import Reports from './pages/admin/Reports'
import NotificationsManagement from './pages/admin/NotificationsManagement'
import PublicHealthCategory from './pages/PublicHealthCategory';
import RelatedPageLinks from './components/RelatedPageLinks';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgtPswd />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/health-goals" element={<HealthGoals />} />
        <Route path="/category-selection" element={<CategorySelection />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/health-tracking" element={<HealthTracking />} />
        <Route path="/maternal-care" element={<MaternalCare />} />
        <Route path="/womens-health" element={<WomensHealth />} />
        <Route path="/elderly-care" element={<ElderlyCare />} />
        <Route path="/fitness-wellness" element={<FitnessWellness />} />
        <Route path="/health-journey" element={<HealthJourney />} />
        <Route path="/appointments" element={<AppointmentsDashboard />} />
        <Route path="/manage-appointments" element={<ManageAppointments />} />
        <Route path="/medication-reminders" element={<MedicationReminders />} />
        <Route path="/activity-reminders" element={<ActivityReminders />} />
        <Route path="/doctor-details" element={<DoctorDetails />} />
        <Route path="/caregiver-management" element={<CaregiverManagement />} />
        <Route path="/shared-health-info" element={<SharedHealthInfo />} />
        <Route path="/health-assistant" element={<HealthChat />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/medical-explanation" element={<MedicalExplanation />} />
        <Route path="/health-education" element={<HealthEducation />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/categories" element={<CategoryManagement />} />   
        <Route path="/admin/content" element={<ContentManagement />} />    
        <Route path="/admin/reports" element={<Reports />} /> 
        <Route path="/admin/notifications" element={<NotificationsManagement />} />
        <Route path="/explore/:category" element={<PublicHealthCategory />} />
      </Routes>
      <RelatedPageLinks />
    </BrowserRouter>
  )
}

export default App
