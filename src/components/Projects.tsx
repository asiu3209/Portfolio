import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Expense Tracker",
      description:
        "Full-stack application with React, TypeScript, and AWS for monitoring spending with intelligent categorization and analytics.",
      tech: ["React", "TypeScript", "AWS", "Full-Stack"],
      link: "https://github.com/asiu3209/Expense-Tracker-Next",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Habit Tracker",
      description:
        "Daily habit monitoring app with completion tracking and historical records, built with TypeScript and React.",
      tech: ["React", "TypeScript", "UI/UX"],
      link: "https://github.com/asiu3209/Habit-Tracker",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Smart Trip",
      description:
        "Collaborative trip planning tool with travel data integration, personalized recommendations, and route optimization.",
      tech: ["React", "Team Project", "APIs"],
      link: "https://github.com/PinkSheep27/SmartTrip",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Volley Pro",
      description:
        "Volleyball training and analytics tool featuring drills, performance tracking, and responsive UI.",
      tech: ["React", "TypeScript", "UI/UX"],
      gradient: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                  {project.name}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group/link"
                  >
                    View on GitHub
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
