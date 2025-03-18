"use client";

import { Header } from "@/components/Header";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="container mx-auto py-12">
      <Header className="py-4 bg-gray-900 text-white text-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
    </Header>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer className="text-center py-4">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </Footer>
    </main>
  );
}
