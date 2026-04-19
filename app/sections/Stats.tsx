"use client";

import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { CalendarIcon, UsersIcon, TrophyIcon, DumbbellIcon } from "../components/Icons";

const stats = [
  { icon: <CalendarIcon />, value: 7, suffix: "+", label: "Years Experience" },
  { icon: <UsersIcon />, value: 50, suffix: "+", label: "Clients Trained" },
  { icon: <TrophyIcon />, value: 5, suffix: "+", label: "Championships Won" },
  { icon: <DumbbellIcon />, value: 100, suffix: "%", label: "Results Guaranteed" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useAnimatedCounter(stat.value);
  return (
    <div 
      ref={ref}
      className="card-dark rounded-xl md:rounded-2xl p-3 md:p-6 text-center hover-lift group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-[#c9a84c] mb-2 md:mb-3 flex justify-center scale-125 md:scale-150 group-hover:scale-110 md:group-hover:scale-125 transition-transform">
        {stat.icon}
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gold-gradient mb-1 md:mb-2 counter">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
