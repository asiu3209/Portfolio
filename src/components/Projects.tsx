import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Volley Pro",
      description:
        "AI-powered volleyball form analysis that turns uploaded clips into clear feedback on mechanics, timing, and technique.",
      tech: ["React", "TypeScript", "Python", "AI/ML"],
      link: "https://github.com/asiu3209/Volley-Pro",
      webLink: "https://volley-pro.vercel.app",
      featured: true,
    },
    {
      name: "Expense Tracker",
      description:
        "Full-stack application with React, TypeScript, and AWS for monitoring spending with intelligent categorization and analytics.",
      tech: ["React", "TypeScript", "AWS", "Full-Stack"],
      link: "https://github.com/asiu3209/Expense-Tracker-Next",
    },
    {
      name: "Habit Tracker",
      description:
        "Daily habit monitoring app with completion tracking and historical records, built with TypeScript and React.",
      tech: ["React", "TypeScript", "UI/UX"],
      link: "https://github.com/asiu3209/Habit-Tracker",
    },
    {
      name: "Smart Trip",
      description:
        "Collaborative trip planning tool with travel data integration, personalized recommendations, and route optimization.",
      tech: ["React", "Team Project", "APIs"],
      link: "https://github.com/PinkSheep27/SmartTrip",
      webLink: "https://my-smart-trip.vercel.app",
    },
  ];

  return (
    <section id="projects" className="section-padding border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Work</span>
          <h2 className="section-title mb-4">Featured projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built — from AI-powered sports tools
            to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`card p-6 flex flex-col ${
                project.featured ? "md:col-span-2 md:p-8" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="tag !text-orange-400 !border-orange-500/20 !bg-orange-500/10">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.06]">
                {project.webLink && (
                  <a
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Live site
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    GitHub
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
