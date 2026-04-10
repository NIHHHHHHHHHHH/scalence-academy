"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { daySchedule } from "@/data/coachingData";
import { AnimatedSection } from "@/components/ui";
import { FaSun, FaFlask, FaCompass, FaBook, FaPencilAlt, FaClock, FaComments, FaMoon, FaDoorOpen } from "react-icons/fa";

const iconMap = {
  sunrise : <FaSun className="text-primary text-base"/>,
  flask : <FaFlask className="text-primary text-base"/>,
  compass : <FaCompass className="text-primary text-base"/>,
  book : <FaBook className="text-primary text-base"/>,
  pencil : <FaPencilAlt className="text-primary text-base"/>,
  timer : <FaClock className="text-primary text-base"/>,
  chat : <FaComments className="text-primary text-base"/>,
  moon : <FaMoon className="text-primary text-base"/>,
  door : <FaDoorOpen className="text-primary text-base"/>,
};

export default function DayTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="schedule" className="section-py bg-surface overflow-hidden relative">
      <div className="container-xl relative z-10">
        <AnimatedSection className="mb-14">
          <span className="section-badge-light">Daily Schedule</span>
          <h2 className="font-display font-black text-secondary text-3xl lg:text-5xl leading-tight">
            14 Hours.<br />
            <span className="text-primary">Zero Wasted.</span>
          </h2>
          <p className="text-text-muted font-body mt-3 max-w-lg">Every slot at Scalence Academy is designed with one goal - your rank.</p>
        </AnimatedSection>

        <div ref={ref} className="hidden lg:block relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-primary -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{ height: "100%" }}
          />

          <div className="flex flex-col gap-6">
            {daySchedule.map((slot, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>

                  <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="bg-white border border-border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all group">
                      <span className="inline-block bg-primary text-white font-display font-black text-xs px-3 py-1 rounded mb-2">
                        {slot.time}
                      </span>
                      <p className="font-display font-bold text-secondary text-base leading-tight">{slot.title}</p>
                      <p className="text-text-muted text-xs font-body mt-1 leading-relaxed">{slot.desc}</p>
                    </div>
                  </div>

                  <div className="w-2/12 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md text-lg">
                      {iconMap[slot.icon]}
                    </div>
                  </div>

                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-5 top-0 w-px bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{ height: "100%" }}
          />
          <div className="flex flex-col gap-5">
            {daySchedule.map((slot, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex items-start gap-5 pl-14">
                <div className="absolute left-1 top-3 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-base z-10">
                  {iconMap[slot.icon]}
                </div>
                <div className="flex-1 bg-white border border-border rounded-xl p-4">
                  <span className="inline-block bg-primary text-white font-display font-black text-xs px-2 py-0.5 rounded mb-2">
                    {slot.time}
                  </span>
                  <p className="font-display font-bold text-secondary text-sm">{slot.title}</p>
                  <p className="text-text-muted text-xs font-body mt-1">{slot.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}