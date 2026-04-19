"use client";

import { TrophyIcon, TargetIcon, TrendingUpIcon } from "../components/Icons";

const achievements = [
  { icon: <TrophyIcon />, title: "Regional Champion 2022", description: "Gold medalist in heavyweight category", stats: "1st Position" },
  { icon: <TargetIcon />, title: "Fitness Model", description: "Professional photoshoots and brand collaborations", stats: "10+ Shoots" },
  { icon: <TrendingUpIcon />, title: "Certified Trainer", description: "Porfessional trainer with 5+ years experience", stats: "Since 2020" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a84c]/5 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Championships & <span className="gold-gradient">Modeling</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Certified weightlifting champion and professional fitness model with multiple photoshoots and competition victories.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card-dark rounded-2xl overflow-hidden hover-lift group">
              <div className="relative">
                <div className="h-40 bg-gradient-to-br from-[#1a1a1a] to-[#111] flex items-center justify-center relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] text-4xl group-hover:scale-110 transition-transform">{achievement.icon}</div>
                    <span className="inline-block px-3 py-1 bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-bold rounded-full border border-[#c9a84c]/30">{achievement.stats}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#c9a84c] transition-colors">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
