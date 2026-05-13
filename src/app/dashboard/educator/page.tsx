"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { 
  Users, 
  AlertTriangle, 
  TrendingDown, 
  ClipboardList,
  MessageSquare,
  Calendar,
  ExternalLink
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const MOCK_STATS = [
  { label: "Total Students", value: "28", icon: <Users />, color: "bg-calm-teal/10 text-calm-teal" },
  { label: "Active Flags", value: "4", icon: <AlertTriangle />, color: "bg-crisis-alert/10 text-crisis-alert" },
  { label: "Avg. Stress Score", value: "6.2", icon: <TrendingDown />, color: "bg-warm-amber/10 text-warm-amber" },
  { label: "Assessments Pending", value: "12", icon: <ClipboardList />, color: "bg-healing-sage/10 text-healing-sage" },
];

const STRESS_DATA = [
  { day: "Mon", score: 4 },
  { day: "Tue", score: 5 },
  { day: "Wed", score: 8 },
  { day: "Thu", score: 6 },
  { day: "Fri", score: 7 },
];

const LD_DISTRIBUTION = [
  { name: "Dyslexia", count: 8 },
  { name: "ADHD", count: 12 },
  { name: "Dysgraphia", count: 4 },
  { name: "Dyscalculia", count: 3 },
  { name: "Other", count: 5 },
];

export default function EducatorDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-3xl mb-2">Classroom Overview</h1>
          <p className="text-text-secondary font-medium">St. Jude’s Primary — Grade 5-B</p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-secondary py-2 flex gap-2">
            <Calendar size={18} /> Past 30 Days
          </button>
          <button className="btn btn-primary py-2 flex gap-2">
            Export Report <ExternalLink size={18} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {MOCK_STATS.map((stat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-sm font-medium text-text-secondary mb-1">{stat.label}</p>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-8">Weekly Emotional Load Trend</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={STRESS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#2D9CDB" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#2D9CDB', strokeWidth: 3, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-8">LD Profile Mix</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={LD_DISTRIBUTION} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <Tooltip cursor={{fill: '#F8F7F4'}} />
                <Bar dataKey="count" fill="#9B51E0" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Flag Alerts */}
      <div className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold">Recent Priority Alerts</h3>
          <span className="bg-crisis-alert/10 text-crisis-alert px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">High Priority</span>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { student: "Student #41A2", issue: "High Screen Time Fatigue", risk: "Moderate", action: "Review homework load" },
            { student: "Student #99B7", issue: "Crisis Indicator: PHQ-A Item 9", risk: "Critical", action: "Immediate Counselor Alert sent" },
            { student: "Student #22C1", issue: "Sudden Mood Drop (3 days)", risk: "High", action: "Schedule parent-teacher sync" },
          ].map((alert, idx) => (
            <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-500">
                  {alert.student.slice(-2)}
                </div>
                <div>
                  <p className="font-bold mb-1">{alert.student} — {alert.issue}</p>
                  <p className="text-sm text-text-secondary font-medium">Recommended Action: {alert.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  alert.risk === "Critical" ? "bg-crisis-alert text-white" : "bg-warm-amber/10 text-warm-amber"
                }`}>
                  {alert.risk}
                </span>
                <button className="p-2 text-gray-400 hover:text-calm-teal transition-colors">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
