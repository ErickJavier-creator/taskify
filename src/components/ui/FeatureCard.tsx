import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-emerald-50 rounded-lg">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
);
