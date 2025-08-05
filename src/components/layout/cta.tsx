import React from 'react';
import { Button } from '../ui/button';
import {Input} from '../ui/input'

const Cta = () => {
  return (
    <section className="py-20 md:py-32 bg-emerald-600">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to transform your productivity?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Join over 50,000 professionals who have already made the switch to
            smarter task management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white border-0 text-gray-900 placeholder:text-gray-500"
            />
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 whitespace-nowrap"
            >
              Start Free Trial
            </Button>
          </div>

          <p className="text-sm text-emerald-100">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
