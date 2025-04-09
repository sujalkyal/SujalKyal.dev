"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const ContactPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with EmailJS or your backend API call
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setIsSent(true);
      setTimeout(() => {
        onClose();
        setIsSent(false);
        setForm({ name: "", email: "", message: "" });
        setIsSending(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to send", err);
      setIsSending(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-950 border border-white/10 p-8 rounded-2xl shadow-xl w-full max-w-lg text-white"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
            <p className="text-sm text-white/60 mb-6">
              Drop me a message or reach me at{" "}
              <a href="mailto:sujalkyal2704@gmail.com" className="text-emerald-400 underline">
                sujalkyal2704@gmail.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg resize-none"
                rows={4}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className="bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-white/80 transition"
              >
                {isSending ? "Sending..." : isSent ? "Sent ✅" : "Connect"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
