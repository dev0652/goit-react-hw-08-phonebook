import Login from 'pages/Login';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));

const SharedLayout = lazy(() => import('components/SharedLayout'));

// ################################################

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
