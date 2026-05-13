"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  BookOpen, 
  Users, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Heart
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/dashboard" },
  { icon: <ClipboardCheck size={20} />, label: "Screening", href: "/screen" },
  { icon: <BookOpen size={20} />, label: "Resources", href: "/resources" },
  { icon: <Heart size={20} />, label: "Child Safe Zone", href: "/kids" },
  { icon: <Users size={20} />, label: "Community", href: "/community" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
        <div className="h-20 flex items-center gap-2 px-6 border-b border-gray-100">
          <div className="w-8 h-8 bg-calm-teal rounded-lg flex items-center justify-center text-white font-bold">α</div>
          <span className="font-lora font-bold text-lg text-calm-teal">Gen Alpha Care</span>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname.startsWith(item.href)
                  ? "bg-calm-teal text-white shadow-md shadow-calm-teal/20"
                  : "text-text-secondary hover:bg-gray-50 hover:text-calm-teal"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-text-secondary hover:text-crisis-alert transition-colors rounded-xl hover:bg-crisis-alert/5">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search resources, assessments..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-calm-teal/20 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-text-secondary hover:text-calm-teal transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-crisis-alert rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
              <div className="text-right">
                <p className="text-sm font-bold">Dr. Sarah Wilson</p>
                <p className="text-xs text-text-secondary">Clinical Psychologist</p>
              </div>
              <div className="w-10 h-10 bg-soft-lavender rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white font-bold">
                SW
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
