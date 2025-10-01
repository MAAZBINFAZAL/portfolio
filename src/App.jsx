import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills & Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Certificates from "./components/Certificates"; // ✅ Import Certificates

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Education /> {/* ✅ Education now included */}
        <WorkExperience />
        <Skills />
        <Projects />
        <Certificates /> {/* ✅ Certificates & Licenses section */}
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400">
          © {new Date().getFullYear()} Maaz Bin Fazal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
