"use client";
import { motion } from "framer-motion";
import { batches } from "@/data/coachingData";
import { AnimatedSection, Button } from "@/components/ui";

export default function SeatGrid() {
  return (
    <section id="batches" className="section-py bg-surface">
      <div className="container-xl">
        <AnimatedSection className="mb-10">
          <span className="section-badge-light">Upcoming Batches</span>
          <h2 className="font-display font-black text-secondary text-3xl lg:text-5xl">
            Seats Filling Up.<br />
            <span className="text-primary">Don't Wait.</span>
          </h2>
        </AnimatedSection>

        <div className="hidden lg:block border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 gap-4 bg-secondary text-white text-xs font-display font-bold uppercase tracking-widest px-5 py-3">
            <div className="col-span-3">Batch</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Starts</div>
            <div className="col-span-3">Seats (35 Total)</div>
            <div className="col-span-2">Action</div>
          </div>
          {batches.map((b, i) => {
            const rem = b.totalSeats - b.filledSeats;
            const urgent = rem <= 5;
            return (
              <motion.div key={b.id}
                initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.08 }}
                className="grid grid-cols-12 gap-4 items-center px-5 py-4 border-t border-border hover:bg-primary-light transition-colors">
                <div className="col-span-3">
                  <p className="font-display font-bold text-secondary">{b.name}</p>
                  <span className="tag-dark text-[9px]">{b.examTag}</span>
                </div>
                <div className="col-span-2 text-text-muted text-sm font-body">{b.type}</div>
                <div className="col-span-2 font-body text-sm text-secondary font-semibold">{b.startDate}</div>
                <div className="col-span-3">
                  <div className="flex flex-wrap gap-1 mb-1">
                    {Array.from({ length: b.totalSeats }).map((_, j) => (
                      <div key={j} className={`w-3 h-3 rounded-sm ${
                        j < b.filledSeats
                          ? urgent ? "bg-urgent pulse-dot" : "bg-secondary"
                          : "bg-surface-2 border border-border"
                      }`} />
                    ))}
                  </div>
                  <p className={`text-xs font-display font-bold ${urgent ? "text-urgent" : "text-success"}`}>{rem} seats left</p>
                </div>
                <div className="col-span-2 ">
                  <Button href="#enrollment" variant={urgent?"primary":"outline"} className="text-xs py-1.5 px-4">
                    {urgent ? "Reserve Fast" : "Apply Now"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="lg:hidden grid grid-cols-1 gap-4">
          {batches.map((b, i) => {
            const rem = b.totalSeats - b.filledSeats;
            const urgent = rem <= 5;
            return (
              <motion.div key={b.id} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.08 }}
                className="card-paper p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-display font-bold text-secondary">{b.name}</p>
                    <p className="text-text-muted text-xs font-body">{b.type} · Starts {b.startDate}</p>
                  </div>
                  <span className="tag-dark shrink-0 ml-2">{b.examTag}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {Array.from({ length: b.totalSeats }).map((_, j) => (
                    <div key={j} className={`w-3 h-3 rounded-sm ${j < b.filledSeats ? (urgent?"bg-urgent pulse-dot":"bg-secondary") : "bg-surface-2 border border-border"}`} />
                  ))}
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3">
                  <p className={`text-xs font-display font-bold ${urgent ? "text-urgent" : "text-success"}`}>{rem} seats remaining</p>
                  <Button href="#enrollment" variant={urgent?"primary":"outline"} className="text-xs py-1.5 px-3">Apply</Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}