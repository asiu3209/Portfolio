import { motion } from "framer-motion";

export default function Extracurricular() {
  const achievements = [
    {
      title: "Team Captain",
      description:
        "Led team through challenging seasons, fostering unity and driving performance improvements.",
      year: "2023–Present",
    },
    {
      title: "Leadership Under Pressure",
      description:
        "Developed crucial decision-making skills and team coordination in high-stakes situations.",
      year: "Ongoing",
    },
    {
      title: "Discipline & Dedication",
      description:
        "Balanced rigorous athletic training with academic excellence in Computer Science.",
      year: "Daily",
    },
    {
      title: "Team Building",
      description:
        "Created inclusive environment where every team member felt valued and motivated.",
      year: "2022–Present",
    },
  ];

  const skills = [
    "Leadership",
    "Strategic Thinking",
    "Communication",
    "Time Management",
    "Resilience",
    "Mentorship",
  ];

  return (
    <section id="extracurricular" className="section-padding border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Athletics</span>
          <h2 className="section-title mb-4">Leadership on the court</h2>
          <p className="section-subtitle">
            The lessons I've learned on the court have shaped me into a better
            developer and team player.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card p-6"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <span className="text-xs text-orange-400/80 font-medium whitespace-nowrap">
                  {item.year}
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8"
        >
          <h3 className="text-base font-semibold mb-5 text-white text-center">
            Transferable Skills from Athletics
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
