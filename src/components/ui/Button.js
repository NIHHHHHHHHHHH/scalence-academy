"use client";
import { motion } from "framer-motion";
export default function Button({ children, href, onClick, variant="primary", type="button", disabled=false, className="", icon }) {
  // s = variant styles, mp = motion props
    const s = {
    primary:  "gradient-primary text-white font-display font-bold px-6 py-3 text-sm rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-primary/20",
    secondary:"bg-secondary text-white font-display font-bold px-6 py-3 text-sm rounded-lg hover:bg-secondary/90 transition-colors shadow-md",
    outline:  "bg-transparent border-2 border-primary text-primary font-display font-bold px-6 py-3 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors",
    cream:    "bg-accent text-secondary font-display font-bold px-6 py-3 text-sm rounded-lg hover:bg-accent-dark transition-colors shadow-md",
    ghost:    "bg-transparent text-primary font-display font-bold text-sm underline underline-offset-4 hover:text-primary-dark transition-colors",
  };

  const mp = { whileHover: !disabled?{scale:1.03}:{}, whileTap: !disabled?{scale:0.97}:{} };

  const content = <>{icon&&<span>{icon}</span>}{children}</>;
  
  if (href) return <motion.a href={href} {...mp} className={`inline-flex items-center gap-2 ${s[variant]} ${className}`}>{content}</motion.a>;
  return <motion.button type={type} onClick={onClick} disabled={disabled} {...mp} className={`inline-flex items-center gap-2 ${s[variant]} ${className} disabled:opacity-50`}>{content}</motion.button>;
}