"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: { label: string; value: number }[];
}

interface AssessmentFormProps {
  title: string;
  questions: Question[];
  onComplete: (responses: Record<string, number>) => void;
}

export default function AssessmentForm({ title, questions, onComplete }: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});

  const handleOptionSelect = (questionId: string, value: number) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(responses);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-lora font-bold text-calm-teal">{title}</h2>
          <span className="text-sm font-medium text-text-secondary">
            Question {currentStep + 1} of {questions.length}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-calm-teal"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm min-h-[400px] flex flex-col"
        >
          <p className="text-xl md:text-2xl mb-12 font-medium">
            {questions[currentStep].text}
          </p>

          <div className="space-y-4 flex-grow">
            {questions[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${
                  responses[questions[currentStep].id] === option.value
                    ? "border-calm-teal bg-calm-teal/5 ring-4 ring-calm-teal/10"
                    : "border-gray-100 hover:border-calm-teal/30 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">{option.label}</span>
                  {responses[questions[currentStep].id] === option.value && (
                    <CheckCircle2 className="text-calm-teal" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="btn btn-secondary gap-2 px-4 disabled:opacity-0"
            >
              <ChevronLeft size={20} /> Back
            </button>
            <button
              onClick={nextStep}
              disabled={responses[questions[currentStep].id] === undefined}
              className="btn btn-primary gap-2 px-8"
            >
              {currentStep === questions.length - 1 ? "Finish" : "Next"} <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center gap-2 text-text-secondary text-sm">
        <AlertCircle size={16} />
        <span>Your responses are automatically saved. You can pause and return later.</span>
      </div>
    </div>
  );
}
