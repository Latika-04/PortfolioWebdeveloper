import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCreateMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() || `Web Developer Opportunity - ${senderName || 'Recruitment'}`
    );
    const mailBody = encodeURIComponent(
      `Hello Laxmi,\n\n${message || 'I came across your portfolio and would love to connect regarding web development opportunities.'}\n\nBest regards,\n${senderName || 'Recruiter / Hiring Team'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-[#120406] border-t border-[#3d0d16] relative flex items-center justify-center overflow-hidden"
    >
      {/* 35mm Film Top Track */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-[#080203] border-b border-[#360810] flex items-center justify-between px-4 opacity-60 select-none pointer-events-none">
        <div className="text-[10px] font-mono tracking-widest text-[#a82438]">
          ● SLIDE 11 // MAGAZINE BACK COVER // DIRECT CONTACT CHANNELS
        </div>
        <div className="flex gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2.5 h-1.5 rounded-[1px] bg-[#1a0508]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Presentation Back Cover Frame with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#360810] border-2 border-[#5c121f] p-6 sm:p-10 md:p-14 shadow-2xl relative paper-card"
        >
          
          {/* Masking tape on cover */}
          <div className="absolute -top-3 left-16 w-28 h-6 tape-strip rotate-2 hidden sm:block pointer-events-none" />
          <div className="absolute -top-3 right-16 w-24 h-6 tape-strip -rotate-1 hidden sm:block pointer-events-none" />

          {/* Big Back Cover Title */}
          <div className="max-w-3xl mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e0509] border border-[#4a0e17] text-[#e6b8c0] text-xs font-mono mb-3"
            >
              <Mail className="w-3.5 h-3.5 text-[#a82438]" />
              <span>SLIDE 11 // FINAL PAGE // REACH OUT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-[#faf6ee] font-bold tracking-wide"
            >
              let's build something.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 space-y-1"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf6ee]">
                {personalInfo.name}
              </div>
              <div className="text-sm font-mono text-[#e6b8c0]">
                Web Developer • Hyderabad, India • 2027 Placement Candidate
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Contact Info (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              
              {/* Email Card with 1-Click Copy */}
              <div className="p-6 rounded-xl bg-[#faf6ee] text-[#1a060a] border border-[#ded3c1] shadow-md space-y-4 relative paper-card">
                <div className="absolute -top-2.5 left-8 w-16 h-4 tape-strip -rotate-1" />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#8a1a2e] font-bold uppercase tracking-wider">
                    DIRECT EMAIL
                  </span>
                  <button
                    id="copy-email-button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded bg-[#f0e7d8] hover:bg-[#e4d7c3] text-xs font-mono text-[#1a060a] transition-colors flex items-center gap-1 border border-[#ded3c1] cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#8a1a2e]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-base sm:text-lg font-editorial font-bold text-[#1a060a] hover:text-[#8a1a2e] transition-colors truncate"
                >
                  {personalInfo.email}
                </a>

                <div className="text-xs text-[#522931] font-sans">
                  Open to full-time campus roles, internships, and technical development projects.
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#25070d] border border-[#4a0e17] hover:border-[#8a1a2e] transition-all flex items-center justify-between group block cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#170508] border border-[#3d0d16] text-[#e6b8c0] group-hover:text-[#faf6ee] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#c49a9e] uppercase">LinkedIn</div>
                    <div className="font-mono text-xs text-[#faf6ee] group-hover:text-[#ffffff]">
                      linkedin.com/in/lpralatikams46
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#c49a9e] group-hover:text-[#faf6ee] transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                id="contact-github-link"
                href={personalInfo.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#25070d] border border-[#4a0e17] hover:border-[#8a1a2e] transition-all flex items-center justify-between group block cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#170508] border border-[#3d0d16] text-[#e6b8c0] group-hover:text-[#faf6ee] transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#c49a9e] uppercase">GitHub</div>
                    <div className="font-mono text-xs text-[#faf6ee] group-hover:text-[#ffffff]">
                      github.com/Latika-04
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#c49a9e] group-hover:text-[#faf6ee] transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#25070d] border border-[#4a0e17] flex items-center gap-3 text-xs font-mono text-[#faf6ee]">
                <MapPin className="w-4 h-4 text-[#a82438]" />
                <span>Hyderabad, Telangana, India</span>
              </div>

            </motion.div>

            {/* Right Column: Direct Mail Composer (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="p-6 sm:p-8 rounded-xl bg-[#25070d] border border-[#4a0e17] shadow-xl">
                
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#3d0d16]">
                  <MessageSquare className="w-4 h-4 text-[#a82438]" />
                  <h3 className="font-editorial text-xl font-bold text-[#faf6ee]">
                    Direct Message Dispatch
                  </h3>
                </div>

                <form onSubmit={handleCreateMailto} className="space-y-4 font-mono text-xs">
                  <div>
                    <label htmlFor="contact-sender-name" className="block text-[#e6b8c0] mb-1">
                      Your Name / Organization
                    </label>
                    <input
                      id="contact-sender-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Technical Hiring Team"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#170508] border border-[#3d0d16] text-[#faf6ee] placeholder-[#8a686e] focus:outline-none focus:border-[#8a1a2e] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[#e6b8c0] mb-1">
                      Subject / Opportunity
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Web Developer Campus Recruitment"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#170508] border border-[#3d0d16] text-[#faf6ee] placeholder-[#8a686e] focus:outline-none focus:border-[#8a1a2e] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[#e6b8c0] mb-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your note or opportunity details here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#170508] border border-[#3d0d16] text-[#faf6ee] placeholder-[#8a686e] focus:outline-none focus:border-[#8a1a2e] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-button"
                    className="w-full py-3 rounded-lg bg-[#faf6ee] hover:bg-[#ffffff] text-[#1a060a] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <span>GET IN TOUCH</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a1a2e]" />
                  </button>
                </form>

              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
