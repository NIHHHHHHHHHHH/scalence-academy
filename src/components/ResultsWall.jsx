"use client";
import { motion } from "framer-motion";
import { toppers, instituteInfo } from "@/data/coachingData";
import { Button } from "@/components/ui";
import { FaArrowRight } from "react-icons/fa";

const avatarColors = [
  "from-red-600 to-rose-500",
  "from-slate-700 to-slate-600",
  "from-red-700 to-red-500",
  "from-stone-600 to-stone-500",
  "from-rose-600 to-pink-600",
];

export default function ResultsWall() {
  return (
    <section id="results" className="pt-24 pb-0 bg-bg geo-pattern">
      <div className="container-xl">
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
          className="border-b-4 border-secondary pb-5 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="section-badge">Results · Verified · 2022–2024</span>
              <h1 className="font-display font-black text-secondary leading-none text-[clamp(1.8rem,7vw,5rem)]">
                THE <span className="text-primary">SCOREBOARD</span>
              </h1>
            </div>
            <p className="text-text-muted font-body max-w-sm text-base leading-relaxed">
              Every rank below is a real student who sat in our classrooms.
              No stock photos. No fabricated scores.
            </p>
          </div>
        </motion.div>

        <div className="border border-border divide-y divide-border mb-8 rounded-lg overflow-hidden">
          <div className="hidden lg:grid grid-cols-12 bg-secondary text-white text-xs font-display font-bold uppercase tracking-widest px-5 py-3">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Student</div>
            <div className="col-span-3">Result</div>
            <div className="col-span-3">Exam</div>
            <div className="col-span-2">College</div>
          </div>
          {toppers.map((t, i) => (
            <motion.div key={t.id}
              initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }}
              transition={{ delay:0.1+i*0.12, duration:0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 items-center px-5 py-5 gap-3 hover:bg-primary-light transition-colors group cursor-default">
              <div className="lg:col-span-1 font-display font-black text-3xl text-primary/30 group-hover:text-primary transition-colors leading-none">
                {String(i+1).padStart(2,"0")}
              </div>
              <div className="lg:col-span-3 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${avatarColors[i]} flex items-center justify-center font-display font-black text-sm text-white shrink-0`}>
                  {t.initials}
                </div>
                <span className="font-display font-bold text-secondary text-base">{t.name}</span>
              </div>
              <div className="lg:col-span-3">
                <span className="font-display font-black text-2xl text-primary">{t.result}</span>
              </div>
              <div className="lg:col-span-3">
                <span className="tag-dark">{t.exam}</span>
              </div>
              <div className="lg:col-span-2 text-base font-body text-text-muted">{t.college}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.9 }}
          className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-border">
          <div className="flex flex-wrap gap-8">
            {[
              { val: instituteInfo.totalStudents, lab: "Students Since 2012" },
              { val: instituteInfo.selectionRate, lab: "Selection Rate"     },
              { val: instituteInfo.yearsActive, lab: "Years of Results"   },
              { val: `${instituteInfo.maxBatchSize}`, lab: "Max Batch Size"  },
            ].map(({ val, lab }) => (
              <div key={lab}>
                <p className="font-display font-black text-3xl text-secondary leading-none">{val}</p>
                <p className="text-text-muted text-xs font-body mt-0.5 uppercase tracking-widest">{lab}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col xs:flex-row gap-3">
            <Button href="#courses" variant="primary">See All Courses</Button>
            <Button href="#enrollment" variant="outline" icon={<FaArrowRight size={12} />}>Enroll Now</Button>
          </div>
        </motion.div>
      </div>

      <div className="bg-primary text-white py-3 overflow-hidden mt-6">
        <div className="flex ticker-scroll whitespace-nowrap">
          {[...Array(2)].map((_,ri) => (
            <span key={ri} className="flex items-center">
              {toppers.map(t => (
                <span key={`${ri}-${t.id}`} className="inline-flex items-center gap-6 px-8">
                  <span className="font-display font-black text-white text-sm">{t.result}</span>
                  <span className="font-body text-sm text-white/80">{t.name}</span>
                  <span className="text-white/40">·</span>
                  <span className="font-body text-xs text-white/60">{t.college}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}