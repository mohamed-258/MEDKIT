"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, ChevronRight } from "lucide-react"

// نموذج لسؤال طبي (يمكن لاحقاً جلبه من قاعدة البيانات)
const questionData = {
  id: 1,
  subject: "Cardiology",
  text: "A 55-year-old man presents to the emergency department with sudden-onset, crushing chest pain radiating to his left jaw. His blood pressure is 140/90 mmHg, and his heart rate is 98 bpm. An ECG shows ST-segment elevation in leads II, III, and aVF. Which of the following is the most appropriate initial step in management?",
  options: [
    { id: "A", text: "Administer sublingual nitroglycerin" },
    { id: "B", text: "Administer chewed aspirin" },
    { id: "C", text: "Perform immediate echocardiography" },
    { id: "D", text: "Administer intravenous metoprolol" },
  ],
  correctAnswer: "B",
  explanation: "The patient is presenting with an acute inferior ST-elevation myocardial infarction (STEMI). The most critical initial step in the management of any suspected acute coronary syndrome (ACS) is the administration of chewed aspirin (162-325 mg) to inhibit platelet aggregation and reduce mortality. While nitroglycerin and beta-blockers may be indicated, aspirin is the universally accepted first immediate intervention. Echocardiography would delay necessary treatment."
}

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    // في المستقبل: هنا سنضع كود جلب السؤال التالي
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-4 md:p-8 flex flex-col items-center">
      
      {/* شريط التحكم العلوي */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>
        <div className="bg-slate-900 px-4 py-2 rounded-full text-sm font-semibold border border-slate-800 text-sky-400">
          Module: {questionData.subject}
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
        
        {/* منطقة السؤال */}
        <div className="p-6 md:p-10 border-b border-slate-800">
          <h2 className="text-slate-400 font-semibold mb-4 flex items-center gap-2">
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md text-sm">Question 1 of 40</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-200">
            {questionData.text}
          </p>
        </div>

        {/* منطقة الخيارات */}
        <div className="p-6 md:p-10 space-y-4">
          {questionData.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.id === questionData.correctAnswer;
            
            // تحديد ألوان الخيارات بناءً على حالة الإجابة
            let optionStyle = "border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 text-slate-300";
            let icon = null;

            if (isSubmitted) {
              if (isCorrect) {
                optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-100";
                icon = <CheckCircle2 className="text-emerald-500" size={24} />;
              } else if (isSelected && !isCorrect) {
                optionStyle = "border-rose-500 bg-rose-500/10 text-rose-100";
                icon = <XCircle className="text-rose-500" size={24} />;
              } else {
                optionStyle = "border-slate-800 bg-slate-900/50 text-slate-500 opacity-50";
              }
            } else if (isSelected) {
              optionStyle = "border-sky-500 bg-sky-500/10 text-sky-100";
            }

            return (
              <button
                key={option.id}
                onClick={() => !isSubmitted && setSelectedOption(option.id)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${optionStyle}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-lg ${isSubmitted && isCorrect ? 'text-emerald-500' : isSelected && !isSubmitted ? 'text-sky-500' : 'text-slate-500'}`}>
                    {option.id}.
                  </span>
                  <span className="text-base md:text-lg">{option.text}</span>
                </div>
                {icon}
              </button>
            );
          })}
        </div>

        {/* منطقة الشرح (تظهر فقط بعد الإجابة) */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="px-6 md:px-10 pb-6 md:pb-10"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                  <AlertCircle className="text-sky-400" />
                  Educational Objective & Explanation
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {questionData.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* أزرار الإجراءات (تقديم أو التالي) */}
        <div className="p-6 md:p-10 bg-slate-950/50 border-t border-slate-800 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedOption
                  ? "bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-xl font-bold transition-all"
            >
              Next Question <ChevronRight size={20} />
            </button>
          )}
        </div>

      </div>
    </div>
  )
}
