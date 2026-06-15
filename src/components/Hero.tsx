import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-label">Portfolio</span>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="text-white">Aaron Siu</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-3 font-medium">
            Developer. Student Athlete. Problem Solver.
          </p>

          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Building interactive web experiences while leading on and off the
            court.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
