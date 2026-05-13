"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, AlertCircle, X, ExternalLink, Shield } from "lucide-react";

export default function CrisisWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-96 bg-white rounded-3xl shadow-2xl border border-crisis-alert/20 overflow-hidden"
          >
            <div className="bg-crisis-alert p-6 text-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Shield size={24} /> Need Help Now?
                </h3>
                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/80 text-sm">You are not alone. Professional support is available 24/7.</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between group hover:bg-crisis-alert/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-crisis-alert shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">iCall India</p>
                    <p className="text-xs text-text-secondary">9152987821</p>
                  </div>
                </div>
                <Link href="tel:+919152987821" className="text-crisis-alert opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} />
                </Link>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between group hover:bg-calm-teal/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-calm-teal shadow-sm">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Crisis AI Triage</p>
                    <p className="text-xs text-text-secondary">Immediate chat support</p>
                  </div>
                </div>
                <button className="text-calm-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="p-4 border border-dashed border-gray-200 rounded-2xl">
                <p className="text-xs text-text-secondary text-center">
                  All crisis communications are confidential and prioritized for human escalation.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-white text-crisis-alert border-crisis-alert" : "bg-crisis-alert text-white"
        } w-16 h-16 rounded-full shadow-lg border-4 flex items-center justify-center transition-colors`}
      >
        {isOpen ? <X size={24} /> : <AlertCircle size={28} />}
      </motion.button>
    </div>
  );
}

// Add Link and ArrowRight imports for the component
import Link from "next/link";
import { ArrowRight } from "lucide-react";
