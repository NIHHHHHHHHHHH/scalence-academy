"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { instituteInfo, targetExams, preferredBatches } from "@/data/coachingData";
import { AnimatedSection, Button } from "@/components/ui";

const initialForm = { studentName:"", parentName:"", phone:"", email:"", exam:"", batch:"", message:"" };
const highlights = ["Trial class before full enrollment","Transparent fees - no hidden charges","EMI options available","Results verified publicly"];

export default function Enrollment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.studentName.trim()) e.studentName = "Required";
    if (!form.parentName.trim()) e.parentName  = "Required";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g,""))) e.phone = "Valid 10-digit number required";
    if (!form.exam) e.exam  = "Required";
    if (!form.batch) e.batch = "Required";
    return e;
  };

  const handleChange = (e) => {
    setForm(p => ({...p,[e.target.name]:e.target.value}));
    setErrors(p => ({...p,[e.target.name]:""}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    const msg = encodeURIComponent(
      `Enrollment Inquiry - ${instituteInfo.nameFull}\n\nStudent: ${form.studentName}\nParent: ${form.parentName}\nPhone: ${form.phone}\nEmail: ${form.email||"-"}\nExam: ${form.exam}\nBatch: ${form.batch}\nMessage: ${form.message||"-"}`
    );
    window.open(`${instituteInfo.whatsapp}?text=${msg}`, "_blank");
    setForm(initialForm);
  };

  const iClass = (f) =>
    `w-full bg-bg border rounded-lg px-4 py-2.5 text-secondary font-body text-sm placeholder:text-text-faint focus:outline-none focus:ring-2 transition-all ${
      errors[f] ? "border-urgent focus:border-urgent focus:ring-urgent/20" : "border-border focus:border-primary focus:ring-primary/20"
    }`;

  return (
    <section id="enrollment" className="section-py bg-bg">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection variant="slideLeft">
            <span className="section-badge-light">Admission Open</span>
            <h2 className="font-display font-black text-secondary text-3xl lg:text-4xl mb-6 leading-tight">
              One Form.<br />
              <span className="text-primary">Your Entire Future</span><br />
              Starts Moving.
            </h2>
            <p className="text-text-muted font-body leading-relaxed mb-8">
              Fill this in - our team will reach out within 24 hours.
              No pressure, no pushy sales. Just honest counselling.
            </p>
            <ul className="space-y-3 mb-10">
              {highlights.map(h => (
                <li key={h} className="flex items-center gap-3">
                  <FaCheckCircle className="text-success shrink-0" />
                  <span className="font-body text-secondary">{h}</span>
                </li>
              ))}
            </ul>
            <div className="bg-surface border border-border rounded-lg p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center font-display font-black text-white shrink-0">SK</div>
              <div>
                <p className="font-display font-bold text-secondary">{instituteInfo.director}</p>
                <p className="text-text-muted text-xs font-body">{instituteInfo.directorQual}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.1}>
            <div className="bg-white border border-border rounded-xl p-8 shadow-lg">
              <h3 className="font-display font-bold text-secondary text-xl mb-6">Enrollment Inquiry</h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Student Name</label>
                    <input name="studentName" type="text" value={form.studentName} onChange={handleChange} placeholder="Full name" className={iClass("studentName")} />
                    {errors.studentName && <p className="text-urgent text-xs mt-1">{errors.studentName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Parent Name</label>
                    <input name="parentName" type="text" value={form.parentName} onChange={handleChange} placeholder="Parent / Guardian" className={iClass("parentName")} />
                    {errors.parentName && <p className="text-urgent text-xs mt-1">{errors.parentName}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile" className={iClass("phone")} />
                    {errors.phone && <p className="text-urgent text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Email <span className="normal-case font-normal">(optional)</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className={iClass("email")} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Target Exam</label>
                  <select name="exam" value={form.exam} onChange={handleChange} className={`${iClass("exam")} appearance-none cursor-pointer`}>
                    <option value="">Select exam</option>
                    {targetExams.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                  {errors.exam && <p className="text-urgent text-xs mt-1">{errors.exam}</p>}
                </div>
                <div>
                  <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Preferred Batch</label>
                  <select name="batch" value={form.batch} onChange={handleChange} className={`${iClass("batch")} appearance-none cursor-pointer`}>
                    <option value="">Select batch</option>
                    {preferredBatches.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.batch && <p className="text-urgent text-xs mt-1">{errors.batch}</p>}
                </div>
                <div>
                  <label className="block text-xs font-display font-bold text-text-muted uppercase tracking-wide mb-1">Message <span className="normal-case font-normal">(optional)</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Questions or special requirements..." className={`${iClass("message")} resize-none`} />
                </div>
                <motion.button type="submit" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                  className="w-full gradient-primary text-white text-xs xs:text-base font-display font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md">
                  <FaWhatsapp size={18} />
                  Send Enquiry via WhatsApp
                </motion.button>
                <p className="text-text-faint text-xs text-center font-body">Redirects to WhatsApp with your details pre-filled</p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}