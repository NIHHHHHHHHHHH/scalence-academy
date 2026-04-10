"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials, instituteInfo } from "@/data/coachingData";
import { AnimatedSection } from "@/components/ui";

export default function AudienceToggle() {
  const [aud, setAud] = useState("student");
  const filtered = testimonials.filter(t => t.audience === aud);

  return (
    <section className="section-py bg-bg">
      <div className="container-xl">
        <AnimatedSection className="mb-10">
          <span className="section-badge-light">Testimonials</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-black text-secondary text-3xl lg:text-4xl">
              {instituteInfo.totalStudents} Families.<br />
              <span className="text-primary">One Trust.</span>
            </h2>
            <div className="flex bg-surface border border-border rounded-lg overflow-hidden shrink-0">
              {[{id:"student",label:"Students"},{id:"parent",label:"Parents"}].map(t => (
                <button key={t.id} onClick={() => setAud(t.id)}
                  className={`px-6 py-2.5 font-display font-bold text-sm transition-all ${
                    aud === t.id ? "bg-secondary text-white" : "text-text-muted hover:text-secondary"
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div key={aud}
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }} transition={{ duration:0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity:0, y:25 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.1 }}
                className="border-l-4 border-primary bg-surface p-8 rounded-r-lg">
                <FaQuoteLeft className="text-primary/50 text-5xl mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_,j) => <FaStar key={j} className="text-primary text-xs" />)}
                </div>
                <p className="text-secondary font-body text-lg leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-display font-black text-white text-sm shrink-0">{t.initials}</div>
                  <div>
                    <p className="font-display font-bold text-secondary text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs font-body">{t.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}