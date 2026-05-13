"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import { motion } from "framer-motion";
import { ClipboardCheck, ShieldAlert, CheckCircle } from "lucide-react";

const DSIC_QUESTIONS = [
  {
    id: "q1",
    text: "During online classes, how often do you feel like things are moving too fast to keep up?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ]
  },
  {
    id: "q2",
    text: "How often do you feel frustrated because of technical glitches or slow internet during schoolwork?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Frequently", value: 2 },
      { label: "Every day", value: 3 },
    ]
  },
  {
    id: "q3",
    text: "Do you feel more tired after a day of digital learning compared to being in a physical classroom?",
    options: [
      { label: "Not at all", value: 0 },
      { label: "A little", value: 1 },
      { label: "Much more", value: 2 },
      { label: "Extremely exhausted", value: 3 },
    ]
  },
  {
    id: "q4",
    text: "When you have to look at the screen for a long time, do your eyes or head start to hurt?",
    options: [
      { label: "Never", value: 0 },
      { label: "Occasionally", value: 1 },
      { label: "Very often", value: 2 },
      { label: "Constant pain", value: 3 },
    ]
  }
];

export default function ScreeningPortal() {
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleComplete = (responses: Record<string, number>) => {
    console.log("Assessment Results:", responses);
    setCompleted(true);
  };

  if (completed) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto text-center py-20">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-healing-sage/20 text-healing-sage rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={40} />
          </motion.div>
          <h2 className="text-3xl font-lora mb-4">Assessment Complete</h2>
          <p className="text-text-secondary mb-12">
            Thank you for completing the Digital Stress Inventory. Our clinical team is reviewing your responses. 
            A detailed report will be available in your dashboard shortly.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setCompleted(false)} className="btn btn-secondary">View Preliminary Results</button>
            <button className="btn btn-primary">Return to Dashboard</button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {!assessmentStarted ? (
          <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-calm-teal/10 text-calm-teal rounded-xl flex items-center justify-center">
                <ClipboardCheck size={24} />
              </div>
              <h1 className="text-3xl font-lora">Digital Stress Inventory for Children (DSIC)</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">About this tool</h3>
                <p className="text-text-secondary leading-relaxed">
                  The DSIC is a validated screening tool designed to identify psychological and physiological 
                  stress markers specifically related to digital learning environments in children with LD.
                </p>
              </div>
              <div className="bg-warm-amber/5 border border-warm-amber/20 rounded-2xl p-6 flex gap-4">
                <ShieldAlert className="text-warm-amber flex-shrink-0" size={24} />
                <p className="text-sm text-warm-amber/80">
                  <strong>Clinical Note:</strong> This is a screening tool, not a diagnostic instrument. 
                  Results should be discussed with a licensed professional.
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-text-secondary">
                <div className="w-1.5 h-1.5 bg-calm-teal rounded-full" />
                Time to complete: ~5-10 minutes
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <div className="w-1.5 h-1.5 bg-calm-teal rounded-full" />
                Target: Children aged 8-14
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <div className="w-1.5 h-1.5 bg-calm-teal rounded-full" />
                Clinical review included
              </li>
            </ul>

            <button 
              onClick={() => setAssessmentStarted(true)}
              className="btn btn-primary px-12 py-4 text-lg"
            >
              Begin Assessment
            </button>
          </div>
        ) : (
          <AssessmentForm 
            title="Digital Stress Inventory"
            questions={DSIC_QUESTIONS}
            onComplete={handleComplete}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
