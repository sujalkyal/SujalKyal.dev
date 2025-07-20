"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "sonner";

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
      toast.success("Message sent successfully!");
      setIsSent(true);
      setTimeout(() => {
        onClose();
        setIsSent(false);
        setForm({ name: "", email: "", message: "" });
        setIsSending(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to send", err);
      toast.error("Failed to send message. Please try again.");
      setIsSending(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <>
    <Toaster
      position="top-right"
      theme="dark"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex items-center space-x-4 bg-[#0a0f1b] text-white border border-white/10 shadow-lg rounded-lg p-4",
          title: "text-white font-semibold",
          description: "text-white/70 text-sm",
          actionButton: "bg-white text-black px-3 py-1 rounded-md",
          cancelButton: "bg-gray-700 text-white px-3 py-1 rounded-md",
          closeButton: "text-white hover:text-gray-300",
        },
      }}
    />
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
              <a href="mailto:sujalkyal.dev@gmail.com" className="text-emerald-400 underline">
                sujalkyal.dev@gmail.com
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
    </AnimatePresence>
    </>,
    document.body
    
  );
};
