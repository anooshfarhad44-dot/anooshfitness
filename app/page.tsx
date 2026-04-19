"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Calculators from "./sections/Calculators";
import CompetitionPrep from "./sections/CompetitionPrep";
import PosingPractice from "./sections/PosingPractice";
import Transformations from "./sections/Transformations";
import MyMoments from "./sections/MyMoments";
import Championship from "./sections/Championship";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import PersonalTrainingForm from "./sections/PersonalTrainingForm";
import CTA from "./sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <PersonalTrainingForm />
      <Calculators />
      <CompetitionPrep />
      <PosingPractice />
      <Transformations />
      <MyMoments />
      <Championship />
      <Achievements />
      <Certifications />
      <CTA />
      <Footer />
    </main>
  );
}
