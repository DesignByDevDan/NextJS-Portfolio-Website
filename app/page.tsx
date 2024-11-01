'use client';

import Hero from "@/components/Hero";
// import { ModeToggle } from "@/components/ModeToggle"; 
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid"; 
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* Dark Mode Toggle Button */}
        <header className="flex justify-end p-10">
          <div suppressHydrationWarning>
            {/* <ModeToggle /> */}
          </div>
        </header>
         <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
