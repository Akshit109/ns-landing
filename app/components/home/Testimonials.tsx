"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anand Gupta",
    role: "CEO, Vmansions India Pvt. Ltd.",
    video: "/testimonials/Anand.mp4",
    review:
      "The difference between investing based on confusion or luck and investing with a disciplined strategy is peace of mind and consistently better outcomes. Nifty Shloka helped me approach equity investing with greater confidence and structure. Pehle istemal karo, phir vishwas karo.",
  },
  {
    name: "Parth Agarwal",
    role: "Investor",
    video: "/testimonials/Parth.mp4",
    review:
      "My portfolio finally feels structured and intentional. I spend far less time worrying about market movements than I used to. The clarity and discipline brought by Nifty Shloka have made investing a much more confident experience.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >


          <h2 className="mt-6 text-5xl font-bold text-white">

            Trusted by{" "}

            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Investors
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">

            Every portfolio tells a story. Here's what our investors have to
            say after experiencing disciplined investing with{" "}

            <span className="font-semibold text-white">
              Nifty Shloka.
            </span>

          </p>

        </motion.div>

        {/* Cards */}
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="group w-full max-w-[760px] overflow-hidden rounded-[30px] border border-white/10 bg-[#050505] transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >              <div className="flex min-h-fit flex-col md:h-[340px] md:flex-row">
                {/* Video */}

                <div className="relative h-[260px] shrink-0 md:h-full md:w-[38%]">

                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover rounded-t-[30px] md:rounded-l-[30px] md:rounded-tr-none"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0 rounded-l-[30px] bg-gradient-to-r from-transparent via-transparent to-black/5 pointer-events-none" />

                </div>

                {/* Text */}

                <div className="flex flex-1 flex-col justify-between p-6 md:w-[62%] md:p-8">

                  <div>

                    <div >

                      <Quote
                        size={16}
                        className="text-accent"
                      />

                    </div>

                    <blockquote className="max-w-[360px] text-[13px] leading-6 text-white">

                      &ldquo;{item.review}&rdquo;

                    </blockquote>

                  </div>

                  <div>

                    <div className="mb-4 h-px w-full bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />

                   <h3 className="text-2xl font-bold text-white md:text-3xl">

                      {item.name}

                    </h3>

                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-accent md:text-sm">

                      {item.role}

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>          ))}

        </div>

      </div>

    </section>
  );
}