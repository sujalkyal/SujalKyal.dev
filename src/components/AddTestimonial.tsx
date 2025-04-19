"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "sonner";
import axios from "axios";

export const TestimonialCTA = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    position: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/send-testimonial", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        toast.success("Thank you! Your testimonial has been submitted.");
        setOpen(false);
        setForm({ name: "", position: "", company: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="relative bg-gradient-to-tr from-emerald-400 to-sky-400 text-black px-5 py-3 rounded-full shadow-xl font-semibold transition duration-300 group"
        >
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 blur-xl opacity-40 group-hover:opacity-60 motion-safe:animate-pulse group-hover:animate-none transition" />
          <span className="relative z-10 text-black">Leave a Testimonial</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#0a0f1b] rounded-2xl w-full max-w-md sm:max-w-sm p-6 shadow-2xl border border-white/10 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-white">
                Share your thoughts
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Your Name"
                  className="w-full p-2.5 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  placeholder="Your Position"
                  className="w-full p-2.5 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none"
                  value={form.position}
                  onChange={(e) =>
                    setForm({ ...form, position: e.target.value })
                  }
                />
                <input
                  placeholder="Company (optional)"
                  className="w-full p-2.5 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />
                <textarea
                  required
                  placeholder="Your message"
                  rows={4}
                  className="w-full p-2.5 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setForm({ name: "", position: "", company: "", message: "" });
                    }}
                    className="text-white/60 hover:text-white transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-tr from-emerald-300 to-sky-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  );
};
