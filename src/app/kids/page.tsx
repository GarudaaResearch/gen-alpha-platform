"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Smile, Frown, Meh, Sun, CloudRain, Zap, Heart, Star, Sparkles } from "lucide-react";

const MOODS = [
  { id: 1, icon: <Smile size={48} />, label: "Great!", color: "bg-green-100 text-green-600", border: "border-green-200" },
  { id: 2, icon: <Sun size={48} />, label: "Good", color: "bg-yellow-100 text-yellow-600", border: "border-yellow-200" },
  { id: 3, icon: <Meh size={48} />, label: "Okay", color: "bg-blue-100 text-blue-600", border: "border-blue-200" },
  { id: 4, icon: <CloudRain size={48} />, label: "Not Good", color: "bg-indigo-100 text-indigo-600", border: "border-indigo-200" },
  { id: 5, icon: <Frown size={48} />, label: "Tired/Sad", color: "bg-purple-100 text-purple-600", border: "border-purple-200" },
];

export default function ChildSafeZone() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalText, setJournalText] = useState("");

  return (
    <main className="min-h-screen bg-[#FDFBF7] p-8 font-nunito">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-soft-lavender rounded-3xl flex items-center justify-center text-white shadow-lg">
              <Star size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#4A4A4A]">Hi there, Alex!</h1>
              <p className="text-gray-500 font-medium">Welcome to your safe space.</p>
            </div>
          </div>
          <button className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 font-bold text-calm-teal hover:shadow-md transition-all">
            My Strengths
          </button>
        </header>

        {/* Mood Section */}
        <section className="bg-white rounded-[40px] p-12 shadow-xl shadow-calm-teal/5 border border-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles size={120} className="text-calm-teal" />
          </div>
          
          <h2 className="text-2xl font-bold mb-8 text-center text-[#4A4A4A]">How are you feeling today?</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {MOODS.map((mood) => (
              <motion.button
                key={mood.id}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMood(mood.id)}
                className={`flex flex-col items-center gap-3 p-6 rounded-[32px] border-4 transition-all ${
                  selectedMood === mood.id 
                    ? `${mood.border} ${mood.color} shadow-lg ring-4 ring-white`
                    : "border-transparent bg-gray-50 text-gray-400 grayscale hover:grayscale-0"
                }`}
              >
                {mood.icon}
                <span className="font-bold text-lg">{mood.label}</span>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Journal Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-[#E8F5E9] rounded-[40px] p-8 border border-white/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#2E7D32]">
              <Heart size={24} /> My Feelings Journal
            </h3>
            <textarea
              placeholder="What's on your mind? You can write anything here..."
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              className="w-full h-48 bg-white/60 backdrop-blur-sm rounded-3xl p-6 border-none focus:ring-4 focus:ring-[#2E7D32]/10 transition-all resize-none text-lg"
            />
            <button className="mt-4 bg-[#2E7D32] text-white font-bold py-3 px-8 rounded-2xl hover:opacity-90 transition-opacity">
              Save My Entry
            </button>
          </section>

          <section className="bg-[#FFF3E0] rounded-[40px] p-8 border border-white/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#EF6C00]">
              <Zap size={24} /> Take a Breather
            </h3>
            <p className="text-[#A0522D] mb-8 font-medium">Need a quick break? Try this 1-minute calming exercise.</p>
            <div className="aspect-video bg-white/60 rounded-3xl flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-[#EF6C00]/20 rounded-full flex items-center justify-center text-[#EF6C00]"
              >
                <div className="w-16 h-16 bg-[#EF6C00]/40 rounded-full" />
              </motion.div>
            </div>
            <p className="mt-4 text-center text-sm font-bold text-[#EF6C00]">Breathe in... and out...</p>
          </section>
        </div>
      </div>
    </main>
  );
}
