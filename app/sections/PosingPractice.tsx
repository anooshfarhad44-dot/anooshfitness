"use client";

import Image from "next/image";
import { ArrowRightIcon, TrophyIcon, DumbbellIcon, TargetIcon } from "../components/Icons";

const benefits = [
  {
    title: "Stage muscle control",
    description:
      "Learn posing that isolates each muscle, improves symmetry and highlights your best lines on stage.",
    icon: <DumbbellIcon />,
  },
  {
    title: "Maximize muscle detail",
    description:
      "Proper posing reveals separation, striations, and peak conditioning for judges to notice.",
    icon: <TargetIcon />,
  },
  {
    title: "Competition confidence",
    description:
      "Build stage presence, transitions and pacing so you stay calm, precise, and powerful during your routine.",
    icon: <TrophyIcon />,
  },
];

export default function PosingPractice() {
  return (
    <section id="posing-practice" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.08),transparent_55%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 mb-4">
              <span className="text-lg">🧭</span>
              <span className="text-[#c9a84c] uppercase text-xs font-semibold tracking-[0.2em]">Posing Practice</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Competition posing practice for <span className="gold-gradient">stage-winning muscle shape</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-sm md:text-base mb-8">
              I coach posing drills, physique transitions and muscle engagement techniques so you not only look better on stage, but also develop stronger muscle control and deeper conditioning through every training phase.
            </p>

            <div className="grid gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="card-dark rounded-3xl p-5 md:p-6 border border-[#ffffff10] hover:border-[#c9a84c]/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="min-w-[3rem] min-h-[3rem] rounded-2xl bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="gold-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold">
                Book a posing session <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-[#c9a84c]/20 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/15 via-transparent to-transparent"></div>
            <div className="relative aspect-[10/12] w-full bg-[#111]">
              <Image src="/posing.png" alt="Posing practice for competition" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
