"use client";
import './globals.css';
import Home from '../components/LandingPage/MainComp/Home';
import Dashboard from './dashboard/page';
import Coin from './coin/[id]/page';

import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();

  // Check if the pathname matches the dynamic route pattern
  const isCoinPage = /^\/coin\/[^/]+$/.test(pathname);

  return (
    <>
      {pathname === "/" && <Home />}
      {pathname === "/dashboard" && <Dashboard />}
      {isCoinPage && <Coin />}
    </>
  );
}
