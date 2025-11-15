import { useState } from "react";
import { Hero } from "./components/sections/hero";
import { Community } from "./components/sections/community";
import { OriginStory } from "./components/sections/origin-story";
import { Characters } from "./components/sections/characters";
import { Roadmap } from "./components/sections/roadmap";
import { About } from "./components/sections/about";
import { Slogans } from "./components/sections/slogans";
import { HowToBuy } from "./components/sections/how-to-buy";
import { PhotoCard } from "./components/sections/photo-card";
import { Footer } from "./components/sections/footer";
import { Toaster } from "./components/ui/toaster";
import { SplashScreen } from "./components/sections/splash-screen";
import { SidebarMenu } from "./components/sidebar-menu";
import { ThemeToggle } from "./components/theme-toggle";
import { ContractBanner } from "./components/contract-banner";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onEnter={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <ContractBanner />
      <ThemeToggle />
      <SidebarMenu />
      
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Hero Section */}
        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <Hero />
          <PhotoCard />
        </div>

        {/* Community Spotlight - Full Width */}
        <div className="mb-6">
          <Community />
        </div>

        {/* Origin Story - Full Width */}
        <div className="mb-6">
          <OriginStory />
        </div>

        {/* Characters & Roadmap */}
        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <Characters />
          <Roadmap />
        </div>

        {/* Why KNEAD & How to Buy */}
        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <About />
          <HowToBuy />
        </div>

        {/* Slogans - Full Width */}
        <div className="mb-6">
          <Slogans />
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}