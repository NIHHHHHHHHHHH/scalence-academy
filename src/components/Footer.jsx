"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaArrowRight } from "react-icons/fa";
import { instituteInfo, navLinks, courses } from "@/data/coachingData";
import { Button } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t-4 border-primary">

      <div className="bg-primary-light border-b border-border-red">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-black text-secondary text-lg">Admissions Open - Limited Seats Available</p>
            <p className="text-text-muted font-body text-sm">JEE · NEET · MHT-CET · Foundation batches starting soon</p>
          </div>
          <Button href="#enrollment" variant="primary" icon={<FaArrowRight size={12} />} className="shrink-0"> Secure Your Seat</Button>
        </div>
      </div>

      <div className="container-xl pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

          <div className="md:col-span-4">
            <a href="#" className="flex items-baseline gap-1 mb-4">
              <span className="font-display font-black text-2xl text-primary">Scalence</span>
              <span className="font-display font-bold text-lg text-secondary ml-1">Academy</span>
            </a>
            <p className="text-text-muted font-body text-sm leading-relaxed mb-5 max-w-xs">{instituteInfo.tagline}</p>
            <div className="flex gap-6 py-4 border-t border-b border-border">
              {[
                { val: instituteInfo.totalStudents, lab: "Students" },
                { val: instituteInfo.selectionRate, lab: "Selection" },
                { val: instituteInfo.yearsActive, lab: "Years" },
              ].map(({ val, lab }) => (
                <div key={lab} className="text-center">
                  <p className="font-display font-black text-xl text-primary leading-none">{val}</p>
                  <p className="text-text-faint text-[10px] font-body uppercase tracking-widest mt-0.5">{lab}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              {[
                { icon: FaInstagram, href: instituteInfo.social.instagram, label: "Instagram" },
                { icon: FaFacebook, href: instituteInfo.social.facebook, label: "Facebook"  },
                { icon: FaYoutube, href: instituteInfo.social.youtube, label: "YouTube"   },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all">
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-secondary text-xs uppercase tracking-widest mb-4 pb-2 border-b-2 border-primary w-fit">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-sm font-body text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-secondary text-xs uppercase tracking-widest mb-4 pb-2 border-b-2 border-primary w-fit">Courses </h4>
            <ul className="space-y-2.5">
              {courses.map(c => (
                <li key={c.id}>
                  <a href="#courses"
                    className="text-sm font-body text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-200" />
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-secondary text-xs uppercase tracking-widest mb-4 pb-2 border-b-2 border-primary w-fit">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm font-body text-text-muted leading-relaxed">{instituteInfo.address}</li>
              <li>
                <a href={instituteInfo.phoneHref}
                  className="text-sm font-body text-text-muted hover:text-primary transition-colors">
                  {instituteInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${instituteInfo.email}`}
                  className="text-sm font-body text-text-muted hover:text-primary transition-colors">
                  {instituteInfo.email}
                </a>
              </li>
              <li className="text-sm font-body font-bold text-primary">{instituteInfo.timings}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs font-body text-text-faint">
          <p>@ {year} <span className="text-text-muted font-bold">Scalence Academy</span>. All rights reserved.</p>
          <p>
            Crafted with dedication by{" "}
            <span className="text-primary font-bold">Nihal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}