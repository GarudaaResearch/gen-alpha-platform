"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Shield, Users, Info, Activity } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-calm-teal rounded-xl flex items-center justify-center text-white font-bold text-xl">α</div>
            <span className="font-lora font-bold text-xl text-calm-teal">Gen Alpha Care</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-text-secondary">
            <Link href="#awareness" className="hover:text-calm-teal transition-colors">Awareness</Link>
            <Link href="#screen" className="hover:text-calm-teal transition-colors">Screening</Link>
            <Link href="#resources" className="hover:text-calm-teal transition-colors">Resources</Link>
            <Link href="/auth/login" className="btn btn-primary py-2 px-6">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-calm-teal/10 text-calm-teal px-4 py-2 rounded-full font-medium mb-8"
          >
            <Activity size={18} />
            <span>Real-time Awareness & Intervention</span>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl mb-8 leading-[1.1]"
          >
            Empowering <span className="text-gradient">Generation Alpha</span> Beyond Learning Barriers
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
          >
            1 in 5 children has a learning disability. We provide the tools, research, and support 
            to navigate the unique psychological burden of digital learning.
          </motion.p>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/screen" className="btn btn-primary gap-2 w-full sm:w-auto">
              Start Screening <ArrowRight size={20} />
            </Link>
            <Link href="#awareness" className="btn btn-secondary w-full sm:w-auto">
              Learn the Impact
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="card text-center group">
              <div className="w-16 h-16 bg-calm-teal/10 rounded-2xl flex items-center justify-center text-calm-teal mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-4xl mb-2">1 in 5</h3>
              <p className="text-text-secondary">Children diagnosed with specific learning disabilities globally.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="card text-center group">
              <div className="w-16 h-16 bg-crisis-alert/10 rounded-2xl flex items-center justify-center text-crisis-alert mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-4xl mb-2">70%</h3>
              <p className="text-text-secondary">Of LD children never receive a timely clinical diagnosis.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="card text-center group">
              <div className="w-16 h-16 bg-healing-sage/10 rounded-2xl flex items-center justify-center text-healing-sage mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <h3 className="text-4xl mb-2">3x</h3>
              <p className="text-text-secondary">More likely to experience severe emotional trauma in digital environments.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scrollytelling Section */}
      <section id="awareness" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm font-bold uppercase tracking-widest text-calm-teal mb-4 block"
              >
                The Digital Burden
              </motion.span>
              <h2 className="text-4xl md:text-5xl mb-8">Understanding Digital Learning Pressure</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-calm-teal">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 font-semibold">Cognitive Overload</h4>
                    <p className="text-text-secondary">Asynchronous digital learning creates disproportionate cognitive load for children with LD, leading to rapid dysregulation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-warm-amber">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 font-semibold">Attachment Disruption</h4>
                    <p className="text-text-secondary">Remote interfaces disrupt the secure attachment with educators, a critical protective factor against academic trauma.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-square relative glass-card flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-64 h-64 border-4 border-dashed border-calm-teal/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-48 h-48 border-4 border-dashed border-soft-lavender/30 rounded-full flex items-center justify-center">
                    <Brain size={80} className="text-calm-teal" />
                  </div>
                </motion.div>
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <span className="text-xs font-bold text-crisis-alert">STRESS PEAK</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-10 left-10 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <span className="text-xs font-bold text-healing-sage">RECOVERY FLOW</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Pathways */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl mb-16">Select Your Entry Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Parent/Guardian", icon: <Heart />, color: "bg-healing-sage" },
              { role: "Classroom Teacher", icon: <Users />, color: "bg-warm-amber" },
              { role: "School Counselor", icon: <Shield />, color: "bg-calm-teal" },
              { role: "Clinical Professional", icon: <Brain />, color: "bg-soft-lavender" }
            ].map((item, idx) => (
              <motion.button 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-48 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="font-semibold text-lg">{item.role}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-calm-teal rounded-lg flex items-center justify-center text-white font-bold">α</div>
            <span className="font-lora font-bold text-lg">Gen Alpha Care</span>
          </div>
          <div className="flex gap-8 text-sm text-text-secondary">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Clinical Ethics</Link>
            <Link href="#">Contact Support</Link>
          </div>
          <p className="text-xs text-text-secondary">© 2026 Generation Alpha Care. All PHI is encrypted (AES-256).</p>
        </div>
      </footer>
    </main>
  );
}
