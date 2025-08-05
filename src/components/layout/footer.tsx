import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Taskify Pro</span>
            </div>
            <p className="text-gray-400">
              The intelligent task management platform that adapts to your
              workflow.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-gray-400">
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                API
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-gray-400">
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-gray-400">
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Community
              </Link>
              <Link
                href="#"
                className="block hover:text-white transition-colors"
              >
                Status
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Taskify Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
