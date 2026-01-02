import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaRedo,
} from "react-icons/fa";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwPcDAd-qjVzG0en6jpyQWP0eQOmvWnm54elJLD0IJsCVaL4hN9khM8I7yo_cGFmagV/exec";
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data: FormValues) => {
    const loader = toast.loading("Sending message...");
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("Name", data.name);
      formData.append("Email", data.email);
      formData.append("Subject", data.subject);
      formData.append("Message", data.message);

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      toast.dismiss(loader);

      if (res.ok) {
        toast.success(
          "The message was sent successfully. I’ll connect with you soon!"
        );
        reset();
        setTimeout(() => setFocus("name"), 200);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error: ", error);
      toast.dismiss(loader);
      toast.error("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };
  const headingVariant = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="contact"
      className="relative py-10 lg:py-20 px-6 overflow-hidden bg-black font-assistant"
    >
      <img
        src="/images/layer-bg.png"
        className="w-full h-full absolute top-0 left-0  object-fill pointer-events-none opacity-5"
      />
      <Toaster position="top-right" />
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1600px] mx-auto"
      >
        {/* Heading */}
        <motion.header
          variants={headingVariant}
          className="mb-12 mt-6 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            <span className="inline-block mr-2 text-neutral-300">Let's</span>
            <span className="relative inline-block group">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-rose-400 to-violet-500">
                Connect
              </span>
              <span className="absolute -bottom-[3px] left-0 h-[1.5px] w-0 bg-linear-to-r from-amber-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </span>{" "}
          </h2>
          <p className="my-3 text-base text-[18px] leading-relaxed  text-neutral-400 max-w-4xl mx-auto">
            Want to collaborate, have a question, or just say hi? Drop a message
            and I’ll respond within a couple of business days.
          </p>
        </motion.header>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* FORM */}
          <div className="lg:col-span-7">
            <motion.div
              variants={sectionVariant}
              className="bg-linear-to-br from-neutral-900/60 via-neutral-900/40 to-neutral-900/60 border border-white/6 rounded-3xl p-6 md:p-10 shadow-xl"
            >
              <form
                name="submit-to-google-sheet"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="text-sm text-neutral-300">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", {
                      required: "Please enter your name",
                      minLength: { value: 2, message: "Name too short" },
                    })}
                    className={`mt-2 w-full rounded-lg px-4 py-3 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 ${
                      errors.name ? "ring-rose-500" : "ring-transparent"
                    }`}
                    placeholder="Enter Your Name"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-rose-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-neutral-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={`mt-2 w-full rounded-lg px-4 py-3 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 ${
                      errors.email ? "ring-rose-500" : "ring-transparent"
                    }`}
                    placeholder="Enter Your Email"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-rose-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm text-neutral-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register("subject", {
                      required: "Add a subject",
                      minLength: { value: 3, message: "Subject too short" },
                    })}
                    className={`mt-2 w-full rounded-lg px-4 py-3 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 ${
                      errors.subject ? "ring-rose-500" : "ring-transparent"
                    }`}
                    placeholder="Project / Question"
                    aria-invalid={errors.subject ? "true" : "false"}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-rose-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-lg text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                      required: "Please enter a message",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 chars",
                      },
                    })}
                    className={`mt-2 w-full rounded-lg px-4 py-3 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 ${
                      errors.message ? "ring-rose-500" : "ring-transparent"
                    }`}
                    placeholder="Tell Me About Your Project or Question..."
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-rose-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 items-center">
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-3 py-3 bg-amber-400 hover:bg-amber-500 text-neutral-900 rounded-md font-semibold shadow-md whitespace-nowrap cursor-pointer"
                    disabled={submitting || isSubmitting}
                    aria-disabled={submitting || isSubmitting}
                  >
                    <FaPaperPlane />
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      reset();
                      setFocus("name");
                    }}
                    className="inline-flex items-center gap-2 px-3 py-3 border border-white/8 bg-neutral-800 text-neutral-200 rounded-md shadow-sm whitespace-nowrap cursor-pointer"
                  >
                    <FaRedo /> Reset
                  </motion.button>

                  <div className="mx-auto text-sm text-neutral-400">
                    We typically reply within 48 hours.
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* RIGHT: Map + contact */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              variants={sectionVariant}
              className="rounded-2xl overflow-hidden border border-white/6 shadow-lg"
            >
              <iframe
                title="Indore map"
                src="https://www.google.com/maps?q=Indore+Madhya+Pradesh&output=embed"
                loading="lazy"
                className="w-full h-48 md:h-56"
              />
            </motion.div>

            <motion.div
              variants={sectionVariant}
              className="bg-linear-to-tr from-neutral-900/50 to-neutral-900/30 border border-white/6 rounded-2xl p-6 shadow-inner"
            >
              <ul className="space-y-5 text-neutral-200">
                <li className="flex gap-4 items-start">
                  <div className="text-amber-400 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-300 font-medium">
                      Indore, Madhya Pradesh, 🇮🇳
                    </div>
                    <div className="text-xs text-neutral-400">
                      Available for remote & local collaborations
                    </div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="text-amber-400 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-300">
                      Phone: +91 8*****9
                    </div>
                    <a
                      href="tel:+918xxxxxxx"
                      className="text-xs text-amber-300 hover:underline"
                    >
                      Call me
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="text-amber-400 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-300">
                      Email: krishnaguptamdz@gmail.com
                    </div>
                    <a
                      href="mailto:krishnaguptamdz@gmail.com"
                      className="text-xs text-amber-300 hover:underline"
                    >
                      Send an email
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <label
                  htmlFor="quick-note"
                  className="text-sm text-neutral-300"
                >
                  Quick note
                </label>
                <input
                  id="quick-note"
                  type="text"
                  placeholder="Short note..."
                  className="mt-2 w-full rounded-lg px-3 py-2 bg-white text-neutral-900 placeholder:text-neutral-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
