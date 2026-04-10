"use client";
import { motion } from "framer-motion";
import { whyUs } from "@/data/coachingData";
import { AnimatedSection } from "@/components/ui";

export default function WhyUs() {
  return (
    <section className="section-py bg-secondary text-white overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection variant="slideLeft">
            <span className="section-badge-cream">Six Reasons</span>
            <h2 className="font-display font-black text-white leading-tight mb-6"
              style={{ fontSize:"clamp(2rem, 4.5vw, 3.5rem)" }}>
              Not Every
              <span className="block text-primary">Coaching Is</span>
              Equal.
            </h2>
            <p className="text-white/60 font-body text-lg leading-relaxed">
              Most institutes fit 80 students in a class and call it coaching.
              We cap at 35. That's not a policy - it's a commitment.
            </p>
          </AnimatedSection>

          <div className="flex flex-col divide-y divide-white/10">
            {whyUs.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.5 }}
                className="flex gap-5 py-5 group hover:bg-white/5 px-2 transition-colors rounded">
                <span className="font-display font-black text-3xl text-primary/30 group-hover:text-primary transition-colors leading-none mt-1 w-10 shrink-0">
                  {item.num}
                </span>
                <div>
                  <p className="font-display font-bold text-white text-base mb-1">{item.title}</p>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}