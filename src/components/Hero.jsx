
"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { instituteInfo, badges, achievementCards } from "@/data/coachingData";
import { AnimatedSection, Button } from "@/components/ui";


export default function Hero() {
  return (
    <section className="section-py bg-surface overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <AnimatedSection>
              <span className="section-badge-light">Pune's Most Result-Driven Institute</span>
              <h2 className="font-display font-black text-secondary leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Your Rank
                <span className="block text-primary">Starts Here.</span>
                Not Someday -
                <span className="block">This Year.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="font-body text-text-muted text-lg leading-relaxed mb-8">
                {instituteInfo.nameFull} has guided{" "}
                <strong className="text-secondary">{instituteInfo.totalStudents} students</strong> to
                IITs, AIIMS and top colleges since {instituteInfo.founded}.
                Small batches. Expert faculty. Zero compromise on results.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-wrap gap-2 mb-8">
              {badges.map(b => (
                <span key={b} className="flex items-center gap-1.5 bg-white border border-border text-secondary text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                  <FaCheckCircle className="text-success text-xs shrink-0" />{b}
                </span>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.28} className="flex flex-col xs:flex-row gap-3">
              <Button href="#courses" variant="primary"  icon={<FaArrowRight size={12} />}>Explore Courses</Button>
              <Button href="#enrollment" variant="outline">Free Counselling</Button>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="slideRight" delay={0.2}>

            {/* mobile (below 500px) */}
            <div className="flex flex-col gap-3 min-[500px]:hidden">

              <div className="bg-white rounded-2xl shadow-2xl border-2 border-secondary px-8 py-6 text-center">
                <p className="font-display font-black text-primary leading-none text-5xl">
                  {instituteInfo.selectionRate}
                </p>
                <div className="w-10 h-0.5 bg-primary/30 mx-auto my-2" />
                <p className="font-display font-bold text-secondary text-[11px] uppercase tracking-widest">Selection Rate</p>
                <p className="text-text-faint text-[10px] font-body mt-1">{instituteInfo.totalStudents} students</p>
              </div>

              {achievementCards.map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs text-white shrink-0 ${
                    i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : i === 2 ? "bg-success" : "bg-primary/70"
                  }`}>
                    {c.initials}
                  </div>
                  <div>
                    <p className="font-display font-black text-primary text-base leading-none">{c.rank}</p>
                    <p className="text-text-faint text-[10px] font-body mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* desktop: (above 500px) */}
            <div className="relative h-115 hidden min-[500px]:block">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-20 border-primary/8" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-12 border-primary/12" />

              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(var(--color-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />

              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-secondary px-8 py-7 text-center w-44">
                  <p className="font-display font-black text-primary leading-none text-5xl" >{instituteInfo.selectionRate} </p>
                  <div className="w-10 h-0.5 bg-primary/30 mx-auto my-2" />
                  <p className="font-display font-bold text-secondary text-[11px] uppercase tracking-widest">Selection Rate</p>
                  <p className="text-secondary/70 text-xs font-body mt-1">{instituteInfo.totalStudents} students</p>
                </div>
              </div>

              {achievementCards.map((c, i) => (
                <div key={i}
                  style={{ position: "absolute", top: c.top, bottom: c.bottom, left: c.left, right: c.right }}
                  className="z-30"
                >
                  <div className="bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs text-white shrink-0 ${
                      i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : i === 2 ? "bg-success" : "bg-primary/70"
                    }`}>
                      {c.initials}
                    </div>
                    <div>
                      <p className="font-display font-black text-primary text-base leading-none">{c.rank}</p>
                      <p className="text-secondary/70 text-xs font-body mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                </div>
              ))}

              {[
                { top: "15%", left: "30%" },
                { top: "70%", right: "25%" },
                { bottom: "30%", left: "20%" },
              ].map((pos, i) => (
                <motion.div key={i} style={{ position: "absolute", ...pos }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                  className="w-2 h-2 rounded-full bg-primary/40" />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}