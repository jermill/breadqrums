import { useState } from "react";
import { Hero } from "./components/sections/hero";
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

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onEnter={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <SidebarMenu />
      
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Hero Section */}
        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <Hero />
          <PhotoCard />
        </div>

        {/* Main Content Sections */}
        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <OriginStory />
          <About />
        </div>

        {/* Secondary Sections */}
        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <Characters />
          <Roadmap />
        </div>

        {/* Bottom Sections */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <Slogans />
          <HowToBuy />
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}