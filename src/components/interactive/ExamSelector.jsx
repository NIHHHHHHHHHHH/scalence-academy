"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { examOptions, courses, faculty, toppers } from "@/data/coachingData";
import { AnimatedSection, Button } from "@/components/ui";

export default function ExamSelector() {
  const [sel, setSel] = useState("JEE");
  const filtCourses = courses.filter(c => c.examTags.includes(sel));
  const filtFaculty = faculty.filter(f => f.examTags.includes(sel));
  const filtToppers = toppers.filter(t => t.examTag === sel);

  return (
    <section id="courses" className="section-py bg-bg">
      <div className="container-xl">
        <AnimatedSection className="mb-10">
          <span className="section-badge-light">Courses & Faculty</span>
          <h2 className="font-display font-black text-secondary text-3xl lg:text-5xl mb-2">
            Pick Your Target.<br />
            <span className="text-primary">We Handle the Rest.</span>
          </h2>
          <p className="text-text-muted font-body">Select an exam - courses, faculty and toppers update instantly.</p>
        </AnimatedSection>

        <div className="flex border-b-2 border-border mb-10 overflow-x-auto">
          {examOptions.map(e => (
            <button key={e.id} onClick={() => setSel(e.id)}
              className={`px-6 py-3 font-display font-bold text-sm whitespace-nowrap transition-all duration-200 border-b-2 -mb-0.5 ${
                sel === e.id
                  ? "border-primary text-primary bg-primary-light"
                  : "border-transparent text-text-muted hover:text-secondary hover:border-border"
              }`}>
              {e.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={sel}
            initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-15 }} transition={{ duration:0.3 }}>

            <div className="mb-10">
              <p className="font-display font-bold text-xs uppercase tracking-widest text-text-muted mb-4">Courses</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtCourses.map((c, i) => {
                  const rem = c.totalSeats - c.filledSeats;
                  return (
                    <motion.div key={c.id} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.07 }}
                      className="card-paper p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display font-bold text-secondary text-lg leading-tight">{c.name}</h3>
                        {rem <= 5 && <span className="text-[10px] font-display font-bold bg-urgent text-white px-2 py-0.5 rounded ml-2 shrink-0">{rem} left</span>}
                      </div>
                      <p className="text-text-muted text-sm font-body mb-1">{c.duration} · {c.forClass}</p>
                      <p className="text-text-faint text-sm font-body mb-4">{c.subjects}</p>
                      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-end gap-2">
                        <div>
                          <p className="font-display font-black text-xl text-primary">{c.fee}</p>
                          <p className="text-text-faint text-sm font-body">Starts {c.batchStart}</p>
                        </div>
                        <Button href="#enrollment" variant="primary" className="text-xs py-2 px-4">Apply</Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            
            {filtFaculty.length > 0 && (
              <div className="mb-10">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-text-muted mb-4">Faculty</p>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filtFaculty.map((f, i) => (
                    <motion.div key={f.id} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:i*0.07 }}
                      className="bg-surface border border-border rounded-lg p-4 text-center">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center font-display font-black text-white text-sm mx-auto mb-2">{f.initials}</div>
                      <p className="font-display font-bold text-secondary text-sm">{f.name}</p>
                      <p className="text-primary text-xs font-body font-semibold">{f.subject}</p>
                      <p className="text-text-faint text-xs font-body mt-1">{f.qual}</p>
                      <span className="inline-block mt-2 tag-red">{f.exp}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {filtToppers.length > 0 && (
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-text-muted mb-4">Toppers from this stream</p>
                <div className="flex flex-wrap gap-3">
                  {filtToppers.map((t, i) => (
                    <motion.div key={t.id} initial={{ opacity:0, x:-15 }} animate={{ opacity:1, x:0 }} transition={{ delay:i*0.08 }}
                      className="flex items-center gap-3 bg-secondary text-white rounded-lg px-4 py-3">
                      <div className="w-9 h-9 rounded bg-primary flex items-center justify-center font-display font-black text-white text-xs shrink-0">{t.initials}</div>
                      <div>
                        <p className="font-display font-bold text-sm">{t.name}</p>
                        <p className="text-primary-light text-xs font-body font-bold">{t.result} · {t.exam}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}