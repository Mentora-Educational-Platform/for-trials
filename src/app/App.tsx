import { Suspense, lazy, memo, useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loader2 } from 'lucide-react';
import { HomePage } from './pages/HomePage';

// Lazy load pages
const CareerPage = lazy(() => import('./pages/CareerPage').then(module => ({ default: module.CareerPage })));
const MentorsPage = lazy(() => import('./pages/MentorsPage').then(module => ({ default: module.MentorsPage })));
const TracksPage = lazy(() => import('./pages/TracksPage').then(module => ({ default: module.TracksPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(module => ({ default: module.LoginPage })));
const SignupPage = lazy(() => import('./pages/SignupPage').then(module => ({ default: module.SignupPage })));
const StudentAuthPage = lazy(() => import('./pages/StudentAuthPage').then(module => ({ default: module.StudentAuthPage })));
const StudentOnboardingPage = lazy(() => import('./pages/StudentOnboardingPage').then(module => ({ default: module.StudentOnboardingPage })));
const StudentDashboardPage = lazy(() => import('./pages/StudentDashboardPage').then(module => ({ default: module.StudentDashboardPage })));

export type Page = 'home' | 'careers' | 'mentors' | 'tracks' | 'about' | 'contact' | 'login' | 'signup' | 'student-auth' | 'student-onboarding' | 'student-dashboard';

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
  </div>
);

// Memoized Header & Footer
const MemoizedHeader = memo(Header);
const MemoizedFooter = memo(Footer);

// Layout Component
const Layout = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <MemoizedHeader />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <MemoizedFooter />
    </div>
  );
};

function App() {
  const location = useLocation();

  // Scroll to top or hash on location change
  // This allows Link to="/#section" to work
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Routes>
      {/* Public Pages with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Auth Pages without Layout (or custom layout manually) */}
      <Route path="/login" element={
        <Suspense fallback={<PageLoader />}>
          <LoginPage />
        </Suspense>
      } />
      <Route path="/signup" element={
        <Suspense fallback={<PageLoader />}>
          <SignupPage />
        </Suspense>
      } />
      <Route path="/student-auth" element={
        <Suspense fallback={<PageLoader />}>
          <StudentAuthPage />
        </Suspense>
      } />
      <Route path="/student-onboarding" element={
        <Suspense fallback={<PageLoader />}>
          <StudentOnboardingPage />
        </Suspense>
      } />
      <Route path="/student-dashboard" element={
        <Suspense fallback={<PageLoader />}>
          <StudentDashboardPage />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;