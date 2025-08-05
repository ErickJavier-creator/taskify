import React from 'react'
import { Badge } from '../ui/badge'
import { BarChart3, Clock, Shield, Star, Users, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Everything you need to stay productive
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From simple to-dos to complex project management, Taskify Pro adapts to your needs with powerful
                features and intuitive design.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Zap className="h-8 w-8 text-emerald-600" />,
                  title: "Lightning Fast",
                  description: "Instant sync across all devices. Create, edit, and complete tasks in milliseconds.",
                },
                {
                  icon: <Users className="h-8 w-8 text-emerald-600" />,
                  title: "Team Collaboration",
                  description: "Share projects, assign tasks, and track progress with your team in real-time.",
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
                  title: "Advanced Analytics",
                  description: "Gain insights into your productivity patterns with detailed reports and analytics.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-emerald-600" />,
                  title: "Time Tracking",
                  description: "Built-in time tracking to monitor how long tasks take and optimize your workflow.",
                },
                {
                  icon: <Shield className="h-8 w-8 text-emerald-600" />,
                  title: "Enterprise Security",
                  description: "Bank-level encryption and security measures to keep your data safe and private.",
                },
                {
                  icon: <Star className="h-8 w-8 text-emerald-600" />,
                  title: "AI-Powered",
                  description: "Smart task suggestions and automated prioritization powered by machine learning.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-emerald-50 rounded-lg">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Features