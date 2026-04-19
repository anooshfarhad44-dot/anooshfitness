"use client";

import { useState } from "react";
import { CalculatorIcon, FlameIcon, PercentIcon } from "../components/Icons";

function CalorieCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<{ tdee: number; target: number; deficit: number; bmr: number } | null>(null);

  const calculateCalories = () => {
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === "male" ? 5 : -161;
    
    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryActive: 1.9
    };
    
    const tdee = Math.round(bmr * (activityMultipliers[activity] || 1.55));
    let target = tdee;
    let deficit = 0;
    
    if (goal === "lose") { target = tdee - 500; deficit = 500; }
    else if (goal === "loseFast") { target = tdee - 1000; deficit = 1000; }
    else if (goal === "gain") { target = tdee + 300; deficit = -300; }
    
    setResult({ tdee, target, deficit, bmr: Math.round(bmr) });
  };

  return (
    <div className="card-dark rounded-3xl p-6 md:p-8 gradient-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96d] flex items-center justify-center text-black">
          <CalculatorIcon />
        </div>
        <h3 className="text-2xl font-bold gold-gradient">Maintenance Calorie Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Age (years)</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Activity Level</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors">
            <option value="sedentary">Sedentary (Office job)</option>
            <option value="light">Light Exercise (1-2 days/week)</option>
            <option value="moderate">Moderate Exercise (3-5 days/week)</option>
            <option value="active">Active Exercise (6-7 days/week)</option>
            <option value="veryActive">Very Active (Physical job)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Goal</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors">
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Lose Weight (0.5kg/week)</option>
            <option value="loseFast">Lose Weight Fast (1kg/week)</option>
            <option value="gain">Build Muscle</option>
          </select>
        </div>
      </div>

      <button onClick={calculateCalories} className="w-full gold-btn py-4 rounded-xl text-lg font-bold">Calculate My Calories</button>

      {result && (
        <div className="mt-6 p-6 rounded-2xl bg-[#111] border border-[#c9a84c]/30 fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a]">
              <div className="text-xs text-gray-400 mb-1">BMR</div>
              <div className="text-lg sm:text-2xl font-bold text-white">{result.bmr}</div>
              <div className="text-xs text-gray-500">calories/day</div>
            </div>
            <div className="p-3 rounded-xl bg-[#1a1a1a]">
              <div className="text-xs text-gray-400 mb-1">TDEE</div>
              <div className="text-lg sm:text-2xl font-bold text-[#c9a84c]">{result.tdee}</div>
              <div className="text-xs text-gray-500">calories/day</div>
            </div>
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#c9a84c]/30">
              <div className="text-xs text-gray-400 mb-1">Target</div>
              <div className="text-lg sm:text-2xl font-bold text-[#e8c96d]">{result.target}</div>
              <div className="text-xs text-gray-500">calories/day</div>
            </div>
            <div className="p-3 rounded-xl bg-[#1a1a1a]">
              <div className="text-xs text-gray-400 mb-1">Difference</div>
              <div className="text-lg sm:text-2xl font-bold text-white">{result.deficit > 0 ? `-${result.deficit}` : result.deficit < 0 ? `+${Math.abs(result.deficit)}` : "0"}</div>
              <div className="text-xs text-gray-500">calories/day</div>
            </div>
          </div>
          
          {/* Macronutrient Breakdown */}
          <div className="border-t border-[#333] pt-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 text-center">Recommended Macronutrients</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="text-xs text-blue-400 mb-1">Protein</div>
                <div className="text-xl font-bold text-blue-400">{Math.round(weight * 2)}g</div>
                <div className="text-xs text-gray-500">{Math.round(weight * 2 * 4)} cal</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                <div className="text-xs text-green-400 mb-1">Carbs</div>
                <div className="text-xl font-bold text-green-400">{Math.round(result.target * 0.4 / 4)}g</div>
                <div className="text-xs text-gray-500">{Math.round(result.target * 0.4)} cal</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                <div className="text-xs text-yellow-400 mb-1">Fats</div>
                <div className="text-xl font-bold text-yellow-400">{Math.round(result.target * 0.3 / 9)}g</div>
                <div className="text-xs text-gray-500">{Math.round(result.target * 0.3)} cal</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BMICalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [bmi, setBmi] = useState<{ value: number; category: string; color: string } | null>(null);

  const calculateBMI = () => {
    const heightInM = height / 100;
    const bmiValue = weight / (heightInM * heightInM);
    const rounded = Math.round(bmiValue * 10) / 10;
    let category = "", color = "";
    if (rounded < 18.5) { category = "Underweight"; color = "#60a5fa"; }
    else if (rounded < 25) { category = "Normal Weight"; color = "#4ade80"; }
    else if (rounded < 30) { category = "Overweight"; color = "#fbbf24"; }
    else { category = "Obese"; color = "#f87171"; }
    setBmi({ value: rounded, category, color });
  };

  return (
    <div className="card-dark rounded-3xl p-6 md:p-8 gradient-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96d] flex items-center justify-center text-black">
          <FlameIcon />
        </div>
        <h3 className="text-2xl font-bold gold-gradient">BMI Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
      </div>

      <button onClick={calculateBMI} className="w-full gold-btn py-4 rounded-xl text-lg font-bold">Calculate BMI</button>

      {bmi && (
        <div className="mt-6 p-6 rounded-2xl bg-[#111] border fade-in-up" style={{ borderColor: bmi.color }}>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: bmi.color }}>{bmi.value}</div>
            <div className="text-xl font-semibold mb-4" style={{ color: bmi.color }}>{bmi.category}</div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-400"></div><span className="text-sm text-gray-400">Underweight: &lt;18.5</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-400"></div><span className="text-sm text-gray-400">Normal: 18.5-24.9</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400"></div><span className="text-sm text-gray-400">Overweight: 25-29.9</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><span className="text-sm text-gray-400">Obese: &ge;30</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(175);
  const [neck, setNeck] = useState(38);
  const [waist, setWaist] = useState(82);
  const [hip, setHip] = useState(95);
  const [result, setResult] = useState<{
    bodyFat: number;
    category: string;
    colorClass: string;
    leanMass: number;
    fatMass: number;
  } | null>(null);

  const calculateBodyFat = () => {
    if (!height || !neck || !waist || (gender === "female" && !hip)) {
      return;
    }

    const maleBodyFat =
      495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    const femaleBodyFat =
      495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;

    const bodyFat = Math.max(3, Number((gender === "male" ? maleBodyFat : femaleBodyFat).toFixed(1)));

    let category = "";
    let colorClass = "";

    if (gender === "male") {
      if (bodyFat < 6) {
        category = "Essential Fat";
        colorClass = "text-blue-400";
      } else if (bodyFat < 14) {
        category = "Athletic";
        colorClass = "text-green-400";
      } else if (bodyFat < 18) {
        category = "Fit";
        colorClass = "text-emerald-400";
      } else if (bodyFat < 25) {
        category = "Average";
        colorClass = "text-yellow-400";
      } else {
        category = "Higher Body Fat";
        colorClass = "text-red-400";
      }
    } else {
      if (bodyFat < 14) {
        category = "Essential Fat";
        colorClass = "text-blue-400";
      } else if (bodyFat < 21) {
        category = "Athletic";
        colorClass = "text-green-400";
      } else if (bodyFat < 25) {
        category = "Fit";
        colorClass = "text-emerald-400";
      } else if (bodyFat < 32) {
        category = "Average";
        colorClass = "text-yellow-400";
      } else {
        category = "Higher Body Fat";
        colorClass = "text-red-400";
      }
    }

    const assumedWeight = gender === "male" ? 75 : 62;
    const fatMass = Number(((assumedWeight * bodyFat) / 100).toFixed(1));
    const leanMass = Number((assumedWeight - fatMass).toFixed(1));

    setResult({ bodyFat, category, colorClass, leanMass, fatMass });
  };

  return (
    <div className="card-dark rounded-3xl p-6 md:p-8 gradient-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96d] flex items-center justify-center text-black">
          <PercentIcon />
        </div>
        <h3 className="text-2xl font-bold gold-gradient">Body Fat Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Neck (cm)</label>
          <input type="number" value={neck} onChange={(e) => setNeck(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Waist (cm)</label>
          <input type="number" value={waist} onChange={(e) => setWaist(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
        </div>
        {gender === "female" && (
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400 mb-2">Hip (cm)</label>
            <input type="number" value={hip} onChange={(e) => setHip(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-[#c9a84c] outline-none transition-colors" />
          </div>
        )}
      </div>

      <button onClick={calculateBodyFat} className="w-full gold-btn py-4 rounded-xl text-lg font-bold">Calculate Body Fat</button>

      {result && (
        <div className="mt-6 p-6 rounded-2xl bg-[#111] border border-[#c9a84c]/30 fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#c9a84c]/20">
              <div className="text-xs text-gray-400 mb-1">Estimated Body Fat</div>
              <div className={`text-3xl font-bold ${result.colorClass}`}>{result.bodyFat}%</div>
            </div>
            <div className="p-3 rounded-xl bg-[#1a1a1a]">
              <div className="text-xs text-gray-400 mb-1">Category</div>
              <div className={`text-xl font-bold ${result.colorClass}`}>{result.category}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#1a1a1a]">
              <div className="text-xs text-gray-400 mb-1">Method</div>
              <div className="text-xl font-bold text-white">US Navy</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400 leading-6">
            Use this as a quick estimate, not a medical-grade reading. For the most accurate progress tracking, compare this with weekly photos,
            measurements, and body weight trends.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Calculators() {
  return (
    <section id="calculators" className="py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a84c]/5 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Fitness <span className="gold-gradient">Calculators</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Calculate your maintenance calories, BMI, and estimated body fat instantly. Know exactly how much to eat and where your body stands.</p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <CalorieCalculator />
          <BMICalculator />
          <BodyFatCalculator />
        </div>
      </div>
    </section>
  );
}
