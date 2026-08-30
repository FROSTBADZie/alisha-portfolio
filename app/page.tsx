"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <div className="text-lg font-semibold tracking-tight">
          ALISHA<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {["Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative transition-colors hover:text-white"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Available for work
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-6 pb-20 pt-10 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Hero text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3 text-sm text-zinc-300"
            >
              <span className="h-px w-8 bg-cyan-400" />
              SaaS · AI · AUTOMATION
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              Building software
              <br />
             <span className="text-zinc-300">that moves ideas</span>
              <br />
              forward<span className="text-cyan-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg"
            >
              I design and develop SaaS products, AI-powered applications,
              and business automation systems for startups and growing
              businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Explore my work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-zinc-300 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Let's work together
              </a>
            </motion.div>
          </div>

          {/* Animated system visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-white/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-20 rounded-full border border-cyan-400/20"
            />

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <div className="text-center">
                <div className="text-2xl font-semibold">AI</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Core
                </div>
              </div>
            </div>

            {[
              ["01", "SaaS", "top-4 left-1/2 -translate-x-1/2"],
              ["02", "API", "right-2 top-1/2 -translate-y-1/2"],
              ["03", "DATA", "bottom-4 left-1/2 -translate-x-1/2"],
              ["04", "AUTOMATE", "left-2 top-1/2 -translate-y-1/2"],
            ].map(([number, label, position]) => (
              <motion.div
                key={number}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Number(number) * 0.3,
                }}
                className={`absolute ${position} rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl`}
              >
                <div className="text-[9px] text-zinc-600">{number}</div>
                <div className="mt-1 text-xs text-zinc-300">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
            </section>

      {/* Selected Work */}
      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3 text-sm text-zinc-500">
            <span className="h-px w-8 bg-cyan-400" />
            SELECTED WORK
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Products designed to solve
            <span className="text-zinc-300"> real problems.</span>
          </h2>
        </motion.div>

        {/* SupportAI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 sm:p-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] transition-opacity duration-500 group-hover:bg-cyan-500/20" />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            
            {/* Project info */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-cyan-400">01 / 03</span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  CONCEPT PROJECT
                </span>
              </div>

              <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Support<span className="text-cyan-400">AI</span>
              </h3>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-300">
                An AI-powered customer support platform designed to help
                businesses handle conversations, automate responses, and
                improve resolution speed.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Next.js", "AI Integration", "Automation", "SaaS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Mini product interface */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/10 bg-[#090909] p-4 shadow-2xl"
            >
              {/* Fake app navbar */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-xs font-bold text-black">
                    AI
                  </div>

                  <div>
                    <div className="text-xs font-medium">SupportAI</div>
                    <div className="text-[10px] text-zinc-500">
                      Customer Intelligence
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  AI ONLINE
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Conversations
                  </div>
                  <div className="mt-3 text-2xl font-semibold">128</div>
                  <div className="mt-1 text-[10px] text-emerald-400">
                    ↑ 18.4%
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    AI Resolution
                  </div>
                  <div className="mt-3 text-2xl font-semibold">94%</div>
                  <div className="mt-1 text-[10px] text-cyan-400">
                    Excellent
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Response Time
                  </div>
                  <div className="mt-3 text-2xl font-semibold">1.2s</div>
                  <div className="mt-1 text-[10px] text-violet-400">
                    AI optimized
                  </div>
                </div>
              </div>

              {/* Conversation */}
              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium">Live conversation</span>
                  <span className="text-[10px] text-zinc-600">JUST NOW</span>
                </div>

                <div className="space-y-3">
                  <div className="max-w-[75%] rounded-xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-xs text-zinc-300">
                    Where can I track my order?
                  </div>

                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100"
                  >
                    Your order is currently out for delivery. You can track it
                    from your account dashboard.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
               </motion.div>

        {/* InvoiceFlow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="group relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/30 sm:p-10"
        >
          <div className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* Dashboard preview */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="order-2 rounded-2xl border border-white/10 bg-[#090909] p-4 shadow-2xl lg:order-1"
            >
              {/* App header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400 text-xs font-bold text-black">
                    $
                  </div>

                  <div>
                    <div className="text-xs font-medium">InvoiceFlow</div>
                    <div className="text-[10px] text-zinc-500">
                      Financial automation
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-zinc-500">
                  AUG 2026
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[9px] uppercase text-zinc-500">
                    Revenue
                  </div>
                  <div className="mt-2 text-lg font-semibold">$24.5K</div>
                  <div className="mt-1 text-[9px] text-emerald-400">
                    ↑ 12.8%
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[9px] uppercase text-zinc-500">
                    Outstanding
                  </div>
                  <div className="mt-2 text-lg font-semibold">$8.2K</div>
                  <div className="mt-1 text-[9px] text-amber-400">
                    6 invoices
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[9px] uppercase text-zinc-500">
                    Paid
                  </div>
                  <div className="mt-2 text-lg font-semibold">42</div>
                  <div className="mt-1 text-[9px] text-violet-400">
                    This month
                  </div>
                </div>
              </div>

              {/* Invoice list */}
              <div className="mt-3 rounded-xl border border-white/10">
                {[
                  ["#1042", "Acme Studio", "$4,850", "PAID"],
                  ["#1043", "Northstar", "$2,400", "PENDING"],
                  ["#1044", "Lumina Labs", "$6,200", "PAID"],
                ].map(([id, client, amount, status]) => (
                  <div
                    key={id}
                    className="flex items-center justify-between border-b border-white/5 px-4 py-3 last:border-0"
                  >
                    <div>
                      <div className="text-xs font-medium">{client}</div>
                      <div className="mt-0.5 text-[9px] text-zinc-600">
                        Invoice {id}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-300">{amount}</span>

                      <span
                        className={`rounded-full px-2 py-1 text-[8px] ${
                          status === "PAID"
                            ? "bg-emerald-400/10 text-emerald-400"
                            : "bg-amber-400/10 text-amber-400"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Automation indicator */}
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-violet-400/10 bg-violet-400/5 p-3">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-violet-400"
                />

                <span className="text-[10px] text-violet-200">
                  Automation active — payment reminders running
                </span>
              </div>
            </motion.div>

            {/* Project information */}
            <div className="order-1 lg:order-2">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-violet-400">02 / 03</span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  CONCEPT PROJECT
                </span>
              </div>

              <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Invoice<span className="text-violet-400">Flow</span>
              </h3>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
                A smart invoicing and business automation platform that helps
                businesses track revenue, manage invoices, and automate
                payment reminders.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Next.js", "Automation", "Payments", "Dashboard"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
              </motion.div>

        {/* DocuExtract */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="group relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Project information */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-cyan-400">03 / 03</span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  CONCEPT PROJECT
                </span>
              </div>

              <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Docu<span className="text-cyan-400">Extract</span>
              </h3>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
                An AI-powered document intelligence platform that extracts,
                organizes, and converts unstructured documents into useful
                structured data.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Next.js", "AI", "Document AI", "Automation"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* AI Document Interface */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/10 bg-[#090909] p-4 shadow-2xl"
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-xs font-bold text-black">
                    D
                  </div>

                  <div>
                    <div className="text-xs font-medium">DocuExtract</div>
                    <div className="text-[10px] text-zinc-500">
                      AI Document Intelligence
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  ANALYSIS COMPLETE
                </div>
              </div>

              {/* Uploaded document */}
              <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-lg">
                    📄
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-medium">
                      invoice_august.pdf
                    </div>

                    <div className="mt-1 text-[10px] text-zinc-500">
                      2.4 MB · Processed successfully
                    </div>
                  </div>

                  <span className="text-xs text-emerald-400">98.7%</span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.7%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="h-full rounded-full bg-cyan-400"
                  />
                </div>
              </div>

              {/* Extracted data */}
              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Extracted Data
                  </span>

                  <span className="text-[10px] text-cyan-400">
                    AI VERIFIED
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    ["Vendor", "Acme Corporation"],
                    ["Amount", "$4,850.00"],
                    ["Invoice ID", "#INV-2026-084"],
                    ["Due Date", "September 12, 2026"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] text-zinc-500">
                        {label}
                      </span>

                      <span className="text-xs text-zinc-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-3 flex items-center justify-between rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-3">
                <span className="text-[10px] text-cyan-100">
                  Structured data ready
                </span>

                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xs text-cyan-400"
                >
                  Export →
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
            </section>

      {/* Services */}
      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3 text-sm text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            WHAT I BUILD
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            From idea to a{" "}
            <span className="text-zinc-300">working product.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            I help founders and businesses turn ideas, workflows, and problems
            into modern software products.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Service 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-cyan-400/40"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

            <div className="relative">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-cyan-400">01</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                SaaS MVP Development
              </h3>

              <p className="mt-4 leading-7 text-zinc-300">
                I build the first working version of SaaS products so founders
                can validate ideas and get real users.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Dashboards", "Auth", "APIs", "Payments"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-violet-400/40"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-400/5 blur-3xl transition-all duration-500 group-hover:bg-violet-400/10" />

            <div className="relative">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-violet-400">02</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg">
                  ✦
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                AI-Powered Applications
              </h3>

              <p className="mt-4 leading-7 text-zinc-300">
                I integrate AI into web applications to create smarter tools,
                assistants, document systems, and automated workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["AI APIs", "Chatbots", "Document AI", "LLMs"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Service 03 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-emerald-400/40"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/5 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/10" />

            <div className="relative">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-emerald-400">03</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg">
                  ⚡
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Business Automation
              </h3>

              <p className="mt-4 leading-7 text-zinc-300">
                I build internal tools and automated workflows that reduce
                repetitive work and make business operations more efficient.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Workflows", "Integrations", "Internal Tools", "Automation"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
           </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3 text-sm text-cyan-400">
              <span className="h-px w-8 bg-cyan-400" />
              ABOUT ME
            </div>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl">
              Curious about
              <br />
              <span className="text-zinc-300">what can be built.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pt-4"
          >
            <p className="text-xl leading-9 text-zinc-200 sm:text-2xl">
              I'm <span className="text-cyan-400">Alisha</span>, a software
              developer focused on building modern web applications, SaaS
              products, and AI-powered tools.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
              I enjoy taking an idea or a problem and turning it into something
              useful, functional, and easy to use. I'm particularly interested
              in SaaS products, automation, and AI-powered applications.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
              Currently, I'm focused on improving my development skills,
              building real-world projects, and working with founders and
              businesses that need modern software solutions.
            </p>

            {/* Skills */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="mb-5 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Current toolkit
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "AI APIs",
                  "Git & GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
           </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-center gap-3 text-sm text-cyan-400">
              <span className="h-px w-8 bg-cyan-400" />
              LET'S BUILD
              <span className="h-px w-8 bg-cyan-400" />
            </div>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl">
              Have an idea
              <br />
              <span className="text-zinc-300">worth building?</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              Whether you're building a SaaS product, an AI-powered tool, or
              looking to automate a business workflow, let's talk about how we
              can turn your idea into something real.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {/* CHANGE EMAIL HERE */}
              <a
                href="mail_to:codebyalisha@gmail.com"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* CHANGE THESE LINKS LATER */}
              <a
                href="https://github.com/AsherHere"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/alisha-k-110144432"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Currently available for freelance opportunities
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            © 2026 Alisha. Built with Next.js.
          </div>

          <div className="flex gap-5">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}