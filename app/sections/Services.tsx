"use client";

import { DumbbellIcon, UsersIcon, HeartIcon, TrophyIcon } from "../components/Icons";

const services = [
  { title: "Personal Training", description: "1-on-1 customized training programs tailored to your goals", icon: <DumbbellIcon /> },
  { title: "Online Coaching", description: "Remote training with weekly check-ins and program adjustments", icon: <UsersIcon /> },
  { title: "Nutrition Planning", description: "Custom meal plans and macro calculations for optimal results", icon: <HeartIcon /> },
  { title: "Contest Prep", description: "Competition preparation for physique and bodybuilding shows", icon: <TrophyIcon /> },
];

export default function Services() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">What I <span className="gold-gradient">Offer</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Personalized fitness solutions designed to help you achieve your specific goals, whether it&apos;s fat loss, muscle building, or competition prep.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-dark rounded-2xl p-4 md:p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-3 md:mb-4 group-hover:bg-[#c9a84c] group-hover:text-black transition-all">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
