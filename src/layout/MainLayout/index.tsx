import { Outlet } from "react-router-dom";
import type { JSX } from "react";
import Header from '../Header';
import Footer from '../Footer';

export default function MainLayout(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="min-h-screen pt-[60px] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
