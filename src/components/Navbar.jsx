"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "@/data/coachingData";
import { Button } from "@/components/ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-bg transition-all duration-300 ${scrolled ? "shadow-md border-b border-border" : "border-b border-transparent"}`}>
      <nav className="container-xl">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex flex-col xs:flex-row items-baseline gap-1">
            <span className="font-display font-black text-xl xs:text-2xl text-primary">Scalence</span>
            <span className="font-display font-semibold text-xs text-text-muted ml-1 tracking-widest normalcase xs:uppercase">Academy</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="font-body font-semibold text-sm text-text-muted hover:text-primary transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="#courses" variant="outline" className="text-sm py-2">Browse Courses</Button>
            <Button href="#enrollment" variant="primary" className="text-sm py-2">Enroll Now</Button>
          </div>

          <button className="lg:hidden p-2 text-secondary" onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
            exit={{ height:0, opacity:0 }} className="lg:hidden bg-bg border-t border-border overflow-hidden">
            <div className="container-xl py-4 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay: i*0.05 }}
                  className="py-2.5 px-3 text-sm font-body font-semibold text-text-muted hover:text-primary hover:bg-surface rounded transition-colors">
                  {l.label}
                </motion.a>
              ))}
              <div className="flex gap-2 mt-2">
                <Button href="#courses" variant="outline" className="flex-1 justify-center text-sm" onClick={() => setOpen(false)}>Courses</Button>
                <Button href="#enrollment" variant="primary" className="flex-1 justify-center text-sm" onClick={() => setOpen(false)}>Enroll Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}