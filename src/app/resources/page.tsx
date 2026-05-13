"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, Video, FileText, CheckCircle2 } from "lucide-react";

const RESOURCES = [
  {
    id: 1,
    title: "Understanding Digital Learning Pressure: A Clinical Overview",
    category: "Article",
    tags: ["LD", "Stress", "Clinical"],
    readTime: "8 min",
    icon: <FileText size={20} />,
    color: "text-calm-teal bg-calm-teal/10"
  },
  {
    id: 2,
    title: "Dyslexia in the Zoom Classroom: Why Remote Learning Failed",
    category: "Article",
    tags: ["Dyslexia", "Education"],
    readTime: "12 min",
    icon: <FileText size={20} />,
    color: "text-soft-lavender bg-soft-lavender/10"
  },
  {
    id: 3,
    title: "Coping with ADHD in Notification Culture",
    category: "Video",
    tags: ["ADHD", "Attention"],
    readTime: "15 min",
    icon: <Video size={20} />,
    color: "text-warm-amber bg-warm-amber/10"
  },
  {
    id: 4,
    title: "Grounding Techniques for Classroom Anxiety",
    category: "Toolkit",
    tags: ["Anxiety", "Coping"],
    readTime: "5 min",
    icon: <BookOpen size={20} />,
    color: "text-healing-sage bg-healing-sage/10"
  },
];

export default function ResourceLibrary() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="mb-12">
        <h1 className="text-3xl mb-2">Resource Library</h1>
        <p className="text-text-secondary font-medium">Clinically reviewed materials for families and educators.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex-grow relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="Search by topic, LD type, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-calm-teal/20 transition-all"
          />
        </div>
        <button className="btn btn-secondary px-6 flex gap-2">
          <Filter size={20} /> Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESOURCES.map((resource) => (
          <motion.div 
            key={resource.id}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${resource.color}`}>
                {resource.icon}
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-healing-sage bg-healing-sage/10 px-3 py-1 rounded-full uppercase tracking-wider">
                <CheckCircle2 size={12} /> Clinically Reviewed
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 group-hover:text-calm-teal transition-colors">
              {resource.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {resource.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-text-secondary bg-gray-50 px-3 py-1 rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-6 border-t border-gray-50">
              <span className="text-sm font-medium text-text-secondary">{resource.category} • {resource.readTime}</span>
              <button className="text-calm-teal font-bold flex items-center gap-1 hover:underline">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}

import { ArrowRight } from "lucide-react";
