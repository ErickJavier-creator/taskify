import React from 'react';
import { Badge } from '../ui/badge';
import { BarChart3, Clock, Shield, Star, Users, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FEATURES } from '@/lib/features';
import { FeatureCard } from '@/components/ui/FeatureCard';

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="bg-emerald-50 text-emerald-700 border-emerald-200"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Everything you need to stay productive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple to-dos to complex project management, Taskify Pro adapts
            to your needs with powerful features and intuitive design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
