import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-400 font-semibold mb-4 tracking-wider uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Aaron Siu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Developer. Student Athlete. Problem Solver.
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Building interactive web experiences while leading on and off the
            court
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/75 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
