import Benefits from "@/components/layout/benefits";
import Features from "@/components/layout/features";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero"
import SocialProof from "@/components/layout/social-proof";


export default function Home() {
  return <div>
    <Header/>
    <main className="flex-1">
      <Hero />
      <SocialProof />
      <Features />
      <Benefits />
    </main>
  </div>;
}
