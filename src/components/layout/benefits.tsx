import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-emerald-50 text-emerald-700 border-emerald-200"
              >
                Productivity Boost
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Increase your productivity by 40% in the first month
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of professionals who have transformed their
                workflow with Taskify Pro's intelligent task management system.
              </p>
            </div>

            <div className="space-y-6">
              {[
                'Reduce time spent on task management by 60%',
                'Never miss a deadline with smart notifications',
                'Collaborate seamlessly with team members',
                'Get actionable insights into your productivity patterns',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/productivity-dashboard.png"
              alt="Productivity Analytics"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
