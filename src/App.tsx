/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ChevronRight,
  Layout,
  Cpu,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Building2,
  PenTool,
  Box
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">A</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Aspire Design Academy</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">Programs</a>
            <a href="#" className="text-sm font-medium border-b-2 border-black">Enterprise</a>
            <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">Stories</a>
            <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">Blog</a>
            <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">Contact</a>
            <button className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 right-0 border-b border-slate-100 bg-white p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#" className="text-lg font-medium">Programs</a>
              <a href="#" className="text-lg font-medium text-black">Enterprise</a>
              <a href="#" className="text-lg font-medium">Stories</a>
              <a href="#" className="text-lg font-medium">Blog</a>
              <a href="#" className="text-lg font-medium">Contact</a>
              <button className="w-full rounded-full bg-black py-3 font-semibold text-white">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-100 py-24 lg:py-40">
          {/* Background Image with Filter */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://picsum.photos/seed/architecture-office/1920/1080"
              alt="Background"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Primary Filter Overlay */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                  <Building2 className="h-3 w-3" />
                  Enterprise Solutions
                </div>
                <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
                  A Personalized Approach to <span className="italic text-white/90">Corporate Training</span>
                </h1>
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300">
                  AD Academy will design personalized corporate training programs that align with your company’s objectives, culture, and workforce development goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:gap-4 active:scale-95">
                    Get a Proposal
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden aspect-square lg:aspect-auto lg:block lg:h-[500px]"
              >
                <img
                  src="https://picsum.photos/seed/arch-training/1000/1000"
                  alt="Corporate Training"
                  className="h-full w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/20"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <img
                          key={i}
                          src={`https://picsum.photos/seed/user${i}/100/100`}
                          className="h-10 w-10 rounded-full border-2 border-white object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">50+ Companies</p>
                      <p className="text-xs text-slate-500">Trust our training programs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 max-w-3xl">
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">What do we offer</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                We offer cutting-edge skills training across the full architecture and design life cycle through a range of flexible training formats, be it in our flagship city campus or on-site in your company.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Comprehensive Range",
                  desc: "Our programs cover every aspect of architecture, design, contractor, and supplier — from concept development to project delivery.",
                  icon: Layout,
                  tags: ["AutoCAD", "BIM", "ArchVIZ"]
                },
                {
                  title: "Hands-on and Practical",
                  desc: "AD Academy company training programs emphasize hands-on, practical learning that bridges design theory with real-world experience.",
                  icon: Cpu,
                  tags: ["Workshops", "Live Projects", "Mentorship"]
                },
                {
                  title: "Tailored and Customized",
                  desc: "Our training programs are tailored to match your company’s unique projects, workflows, and development goals.",
                  icon: Users,
                  tags: ["Custom Content", "On-site", "Flexible"]
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/50 p-8 transition-shadow hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <item.icon className="h-7 w-7 text-black" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="mb-8 flex-grow text-slate-600 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-slate-900 py-24 text-white lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Our Core Training Programs</h2>
                <p className="text-lg text-slate-400">
                  Equip your team with industry-standard tools and frameworks to maintain your company’s competitive advantages in the digital age.
                </p>
              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "AutoCAD Technical",
                  desc: "Master 2D drafting and 3D modeling for architectural and engineering projects.",
                  icon: PenTool,
                  color: "bg-blue-500"
                },
                {
                  title: "Building Information Modeling (BIM)",
                  desc: "Streamline workflows and improve collaboration with advanced BIM methodologies.",
                  icon: Box,
                  color: "bg-emerald-500"
                },
                {
                  title: "Architecture Visualization (ArchVIZ)",
                  desc: "Create stunning photorealistic renders and immersive walkthroughs.",
                  icon: Layout,
                  color: "bg-purple-500"
                }
              ].map((program, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl bg-slate-800 p-8 transition-colors hover:bg-slate-700">
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${program.color}`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{program.title}</h3>
                  <p className="mb-6 text-slate-400 leading-relaxed">{program.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:underline">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="border-t border-slate-100 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">Get a Proposal</h2>
                <p className="mb-12 text-lg text-slate-600">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your training needs.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                      <Mail className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold">Email us</p>
                      <p className="text-slate-600">hello@ad-kh.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                      <Phone className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold">Call us</p>
                      <p className="text-slate-600">096 889 8669</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                      <MapPin className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold">Visit us</p>
                      <p className="text-slate-600">House No. 2364z+2372z, Street 46, Sangkat Srah Chak, Khan Daun Penh, Phnom Penh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-12">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-500">First Name</label>
                      <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                      <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Work Email</label>
                    <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white" placeholder="Architecture Inc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Message</label>
                    <textarea rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white" placeholder="Tell us about your training needs..." />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-black py-4 font-bold text-white transition-transform hover:scale-[1.02] active:scale-95">
                    Submit Request
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    By clicking "Submit Request," you agree to our <a href="#" className="underline">Terms & Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-xl italic">A</span>
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase">Aspire Design Academy</span>
              </div>
              <p className="max-w-sm text-slate-500 leading-relaxed">
                Empowering the next generation of architecture and design professionals with industry-leading digital skills and practical experience.
              </p>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-slate-400 text-xs">Programs</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-black">AutoCAD Technical</a></li>
                <li><a href="#" className="hover:text-black">BIM Methodologies</a></li>
                <li><a href="#" className="hover:text-black">ArchVIZ Rendering</a></li>
                <li><a href="#" className="hover:text-black">Project Delivery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-slate-400 text-xs">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-black">Our Story</a></li>
                <li><a href="#" className="hover:text-black">Student Stories</a></li>
                <li><a href="#" className="hover:text-black">Hiring Partners</a></li>
                <li><a href="#" className="hover:text-black">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
            <p className="text-sm text-slate-400">© 2026 Aspire Design Academy. All rights reserved.</p>
            <div className="flex gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
