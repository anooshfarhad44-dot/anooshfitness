"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function PersonalTrainingForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Email service is not configured. Please check your .env values.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const formData = new FormData(formRef.current);
      const templateParams = Object.fromEntries(formData.entries());
      const fromName = String(templateParams.from_name ?? "");
      const replyTo = String(templateParams.reply_to ?? "");
      const subject = String(templateParams.subject ?? "Personal Training Request");
      const compiledMessage = [
        "New personal training request received.",
        "",
        `Name: ${String(templateParams.from_name ?? "")}`,
        `Email: ${String(templateParams.reply_to ?? "")}`,
        `Phone: ${String(templateParams.phone ?? "")}`,
        `Age: ${String(templateParams.age ?? "")}`,
        `Gender: ${String(templateParams.gender ?? "")}`,
        `Height: ${String(templateParams.height ?? "")}`,
        `Goal Type: ${String(templateParams.goal_type ?? "")}`,
        `Current Weight: ${String(templateParams.current_weight ?? "")}`,
        `Goal Weight: ${String(templateParams.goal_weight ?? "")}`,
        `Fitness Level: ${String(templateParams.fitness_level ?? "")}`,
        "",
        "Client Message:",
        String(templateParams.message ?? ""),
      ].join("\n");

      await emailjs.send(
        serviceId,
        templateId,
        {
          ...templateParams,
          from_name: fromName,
          reply_to: replyTo,
          subject,
          // Support common EmailJS dashboard field names too.
          name: fromName,
          email: replyTo,
          title: subject,
          message: compiledMessage,
        },
        publicKey
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      setStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message || "Something went wrong while sending your message.");
      } else {
        setErrorMessage("Something went wrong while sending your message.");
      }
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="card-dark rounded-3xl p-8 md:p-10 bg-[#101010] border border-[#333] shadow-[0_0_60px_rgba(0,0,0,0.2)]">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c9a84c] mb-3">Personal Training</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your custom training plan</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-xl">
                Fill out this quick form and I&apos;ll contact you with a tailored program for your goals — weight loss, fat loss, muscle building, contest prep, or transformation coaching.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="Personal Training Request" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  Name
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm text-gray-300">
                  Email
                  <input
                    type="email"
                    name="reply_to"
                    required
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  Age
                  <input
                    type="number"
                    min="10"
                    max="100"
                    name="age"
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. 28"
                  />
                </label>
                <label className="block text-sm text-gray-300">
                  Gender
                  <select
                    name="gender"
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    defaultValue="prefer_not_to_say"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non_binary">Non-binary</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="Optional"
                  />
                </label>
                <label className="block text-sm text-gray-300">
                  Height
                  <input
                    type="text"
                    name="height"
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. 170 cm / 5'7&quot;"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  Goal type
                  <select
                    name="goal_type"
                    required
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    defaultValue="weight_loss"
                  >
                    <option value="weight_loss">Weight loss</option>
                    <option value="fat_loss">Fat loss</option>
                    <option value="muscle_building">Muscle building</option>
                    <option value="strength">Strength gain</option>
                    <option value="competition_prep">Competition prep</option>
                    <option value="general_transformation">General transformation</option>
                  </select>
                </label>
                <label className="block text-sm text-gray-300">
                  Current weight
                  <input
                    type="text"
                    name="current_weight"
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. 75 kg / 165 lbs"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  Goal weight
                  <input
                    type="text"
                    name="goal_weight"
                    className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. 65 kg / 143 lbs"
                  />
                </label>
              </div>

              <label className="block text-sm text-gray-300">
                Current training level
                <select
                  name="fitness_level"
                  className="mt-2 w-full rounded-2xl border border-[#333] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                  defaultValue="intermediate"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </label>

              <label className="block text-sm text-gray-300">
                Tell me about your goal
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-3xl border border-[#333] bg-[#0a0a0a] px-4 py-4 text-white outline-none focus:border-[#c9a84c]"
                  placeholder="Describe your goal, challenges, timeline, injuries, nutrition preferences, or any special request."
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="gold-btn w-full sm:w-auto px-8 py-3 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "sending" ? "Sending..." : "Send Request"}
                </button>
                <p className="text-sm text-gray-400 max-w-xl">
                  I will receive your request directly and reply with a personalized training plan suggestion.
                </p>
              </div>

              {status === "success" && (
                <div className="rounded-2xl border border-[#274e13] bg-[#123112] p-4 text-sm text-[#b7f3a1]">
                  Message sent! I&apos;ll follow up soon.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl border border-[#7f1d1d] bg-[#2a1010] p-4 text-sm text-[#fca5a5]">
                  Failed to send. {errorMessage || "Please try again later."}
                </div>
              )}
            </form>
          </div>

          <div className="rounded-3xl border border-[#333] bg-[#0f0f0f]/80 p-8 md:p-10 text-gray-300 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-bold mb-4">What I need from you</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>• Your main goal — whether it is weight loss, fat loss, muscle building, strength gain, or competition prep.</li>
              <li>• Your current body stats (age, height, weight) and how often you currently train each week.</li>
              <li>• Any injuries, coaching preferences, food restrictions, or training limitations I should account for.</li>
              <li>• Your ideal timeline and how quickly you want to see results.</li>
              <li>• Your preferred coaching style or support level — for example accountability, weekly check-ins, or full program support.</li>
            </ul>
            <div className="mt-8 rounded-3xl border border-[#333] bg-[#101010] p-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                When you submit this form, I receive your details directly through EmailJS. I will review your goals and reply to your email with a clear plan for your personalized training program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
