'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Zap,
  Shield,
  Star,
  ArrowRight,
  Menu,
} from 'lucide-react';
import Navbar from './navbar';

const Header = () => {
  return (
    //   {/* Header */}
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Taskify Pro</span>
        </div>
        <Navbar />

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            Start Free Trial
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
