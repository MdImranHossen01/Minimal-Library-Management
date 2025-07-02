import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 min-h-screen container mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}