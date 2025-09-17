import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Expense Tracker",
      description: `A full-stack Expense Tracker application built with React, TypeScript, and AWS, designed to 
      help users monitor their spending, stay within budgets, and gain insight through intelligent categorization and analytics. 
      Users can add, edit, and delete expenses, 
      view totals filtered by category, and review their past transactions over time.`,
      link: "https://github.com/asiu3209/Expense-Tracker",
    },
    {
      name: "Habit Tracker",
      description: `A habit tracker application built with TypeScript and React, designed to help users monitor and 
      manage their daily habits. Users can mark habits as complete or incomplete on a daily basis, while a 
      dedicated history tab provides a record of past habits, including their start and end dates.`,
      link: "https://github.com/asiu3209/Habit-Tracker",
    },
    {
      name: "Book Log Website",
      description: "",
      link: "https://github.com/asiu3209/bookLogWebsite",
    },
  ];

  function handleRedirect(link: string) {
    window.open(link, "_blank");
  }

  return (
    <section id="projects" className="min-h-screen px-8">
      <motion.h2
        className="pt-24 text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
            className="h-80 bg-gray-900 border border-gray-700 p-6 rounded-2xl flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{i.name}</h3>
            <p className="text-gray-400">{i.description}</p>
            {i.link && (
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                onClick={() => handleRedirect(i.link)}
              >
                View Project
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
