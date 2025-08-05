import React from 'react';

import Image from 'next/image';
import { Button } from '../ui/button';
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-emerald-50 text-emerald-700 border-emerald-200"
              >
                ✨ New: AI-Powered Task Suggestions
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Master Your Tasks,{' '}
                <span className="text-emerald-600">Amplify</span> Your Success
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Transform chaos into clarity with Taskify Pro. The intelligent
                task management platform that adapts to your workflow and scales
                with your ambitions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-3xl opacity-20"></div>
            <Image
              src="/modern-task-dashboard.png"
              alt="Taskify Pro Dashboard"
              width={800}
              height={600}
              className="relative rounded-2xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
