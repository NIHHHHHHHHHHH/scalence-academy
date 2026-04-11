"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { instituteInfo } from "@/data/coachingData";
import { AnimatedSection, Button } from "@/components/ui";

export default function Contact() {
  return (
    <section id="contact" className="section-py bg-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/10">
          <AnimatedSection variant="slideLeft"
            className="bg-white/5 p-10 flex flex-col justify-between">
            <div>
              <span className="section-badge-cream">Find Us</span>
              <h2 className="font-display font-black text-white text-3xl lg:text-4xl mb-2 leading-tight">
                Come In.<br />
                <span className="text-primary">Talk to Us.</span>
              </h2>
              <p className="text-white/50 font-body text-sm mb-10">No online forms. No waiting. Walk in and we&apos;ll answer every question personally.</p>

              <div className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, label: "Address", value: instituteInfo.address, href: `https://maps.google.com/?q=${encodeURIComponent(instituteInfo.address)}` },
                  { icon: FaPhone, label: "Phone", value: instituteInfo.phone, href: instituteInfo.phoneHref },
                  { icon: FaEnvelope, label: "Email", value: instituteInfo.email, href: `mailto:${instituteInfo.email}` },
                  { icon: FaClock, label: "Hours", value: instituteInfo.timings, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Icon className="text-primary group-hover:text-white text-sm transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-display font-bold uppercase tracking-widest">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("http")?"_blank":undefined}
                          rel={href.startsWith("http")?"noopener noreferrer":undefined}
                          className="text-white/80 font-body text-sm hover:text-primary transition-colors leading-relaxed">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/80 font-body text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <Button href={instituteInfo.whatsapp} variant="primary"
                icon={<FaWhatsapp size={16} />}
                className="w-full justify-center">
                Chat on WhatsApp
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.1} className="min-h-105">
            <iframe
              title="Scalence Academy Location"
              src={instituteInfo.mapEmbed}
              width="100%" height="100%"
              style={{ border: 0, minHeight: "420px", display: "block" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}