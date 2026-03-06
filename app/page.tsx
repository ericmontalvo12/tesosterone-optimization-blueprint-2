"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Dumbbell, Moon, Utensils, Sparkles, Lock, CheckCircle } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = "https://services.leadconnectorhq.com/hooks/EakYnXEQy1hvVFmdShYB/webhook-trigger/07d0315b-289e-461d-9b8a-5d84fdcb0404";
    const data = JSON.stringify({ email, firstName });

    // Use sendBeacon to ensure data is sent before navigation
    const sent = navigator.sendBeacon(webhookUrl, data);

    if (sent) {
      router.push("/success");
    } else {
      // Fallback: use fetch with a delay
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
        mode: "no-cors",
      });
      setTimeout(() => router.push("/success"), 500);
    }
  };

  const benefits = [
    "A condition-first framework for testosterone + performance",
    "Sleep, stress, training, and nutrition levers that actually matter",
    'Free T, SHBG, and why "total T" doesn\'t tell the whole story',
    "Simple templates you can follow (training + nutrition)",
    "Supplements: when they help, when they're a waste",
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-[#1e3a5f]/60 text-[#3b82f6] text-xs font-semibold px-4 py-2 rounded-full border border-[#3b82f6]/30">
            <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
            ROCK MOUNTAIN PERFORMANCE - THE ANTI-UNDERDOSING STANDARD
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
            The Free Testosterone
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f59e0b]">
            Optimization Blueprint
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-300 text-lg mb-8">
          Fix the conditions that determine{" "}
          <span className="text-[#f59e0b] font-semibold">hormonal output</span>
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1f2937] text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            <Dumbbell className="w-4 h-4" />
            TRAINING
          </span>
          <span className="inline-flex items-center gap-2 bg-[#1f2937] text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            <Moon className="w-4 h-4" />
            SLEEP
          </span>
          <span className="inline-flex items-center gap-2 bg-[#1f2937] text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            <Utensils className="w-4 h-4" />
            NUTRITION
          </span>
          <span className="inline-flex items-center gap-2 bg-[#1f2937] text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            LIFESTYLE
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Book Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[380px] lg:w-[420px]">
              <Image
                src="/book-mockup.png"
                alt="The Free Testosterone Optimization Blueprint"
                width={420}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
            {/* Free Badge */}
            <span className="inline-block bg-[#3b82f6] text-white text-xs font-bold px-3 py-1 rounded mb-4">
              FREE
            </span>

            <h2 className="text-2xl font-bold text-white mb-2">
              What You&apos;ll Get
            </h2>
            <p className="text-gray-400 mb-6">
              Fix the conditions. Get the blueprint.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Enter your name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f59e0b] hover:bg-[#d97706] disabled:bg-[#f59e0b]/70 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "SENDING..."
                ) : (
                  <>
                    GET THE FREE BLUEPRINT
                    <span className="text-lg">→</span>
                  </>
                )}
              </button>
            </form>

            {/* No Spam Notice */}
            <p className="text-gray-500 text-sm text-center mb-6 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              No spam. Unsubscribe anytime.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p className="mb-1">Educational information only. Not medical advice.</p>
          <p>&copy; 2026 Rock Mountain Performance - The Anti-Underdosing Standard</p>
        </footer>
      </main>
    </div>
  );
}
