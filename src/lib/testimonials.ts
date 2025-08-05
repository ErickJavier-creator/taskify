

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Taskify Pro completely transformed how our team manages projects. We're 40% more productive and never miss deadlines anymore.",
    author: "Sarah Chen",
    role: "Product Manager at TechCorp",
    avatar: "/professional-woman-avatar.png",
  },
  {
    quote:
      "The AI-powered task suggestions are incredible. It's like having a personal productivity assistant that knows exactly what I need to focus on.",
    author: "Marcus Rodriguez",
    role: "Freelance Designer",
    avatar: "/professional-man-avatar.png",
  },
  {
    quote:
      "Finally, a task management tool that doesn't get in the way. Clean, fast, and incredibly powerful. Our entire company switched to Taskify Pro.",
    author: "Emily Watson",
    role: "CEO at StartupXYZ",
    avatar: "/professional-ceo-avatar.png",
  },
];
