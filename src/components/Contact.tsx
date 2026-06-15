import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    emailjs
      .send(
        "service_oze1r3z",
        "template_1j6wllg",
        formData,
        "AHdUEDi22jJuTemJM"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"))
      .finally(() => setIsSubmitting(false));
  }

  return (
    <section id="contact" className="section-padding border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Contact</span>
            <h2 className="section-title mb-4">Let's connect</h2>
            <p className="section-subtitle mb-8">
              Have a project in mind or want to chat? Send me a message and I'll
              get back to you.
            </p>

            <a
              href="https://github.com/asiu3209"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              github.com/asiu3209
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="card p-6 md:p-8 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-400 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-zinc-400 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-zinc-400 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                className="input-field resize-none h-32"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-emerald-400">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Failed to send. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
