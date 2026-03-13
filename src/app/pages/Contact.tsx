import { useState } from "react";
import { motion } from "motion/react";
import { PageHeader } from "../components/PageHeader";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real implementation, this would send the form data
  };

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Contact Me"
        subtitle="Let's connect and collaborate on something meaningful"
        icon={<MessageCircle className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10">
              <h3
                className="text-ocean-foam mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                }}
              >
                Let's Work Together
              </h3>
              <p
                className="text-ocean-foam/55 mb-6"
                style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
              >
                I'm always open to discussing new projects,
                collaborations in geospatial development, marine
                conservation, or any opportunities to make a
                positive impact through technology and
                environmental science.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:dencel.marino@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-ocean-light/5 hover:bg-ocean-light/10 border border-ocean-light/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-ocean-light/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-ocean-light" />
                  </div>
                  <div>
                    <p
                      className="text-ocean-foam"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-ocean-foam/50"
                      style={{ fontSize: "0.8rem" }}
                    >
                      dencel.marino@gmail.com
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-ocean-foam/30 ml-auto group-hover:text-ocean-light transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jude-wincel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-ocean-light/5 hover:bg-ocean-light/10 border border-ocean-light/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p
                      className="text-ocean-foam"
                      style={{ fontSize: "0.85rem" }}
                    >
                      LinkedIn
                    </p>
                    <p
                      className="text-ocean-foam/50"
                      style={{ fontSize: "0.8rem" }}
                    >
                      linkedin.com/in/jude-wincel
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-ocean-foam/30 ml-auto group-hover:text-ocean-light transition-colors" />
                </a>

                <a
                  href="https://github.com/juwd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-ocean-light/5 hover:bg-ocean-light/10 border border-ocean-light/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center">
                    <Github className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p
                      className="text-ocean-foam"
                      style={{ fontSize: "0.85rem" }}
                    >
                      GitHub
                    </p>
                    <p
                      className="text-ocean-foam/50"
                      style={{ fontSize: "0.8rem" }}
                    >
                      github.com/juwd
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-ocean-foam/30 ml-auto group-hover:text-ocean-light transition-colors" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-ocean-light/5 border border-ocean-light/10">
                  <div className="w-10 h-10 rounded-lg bg-ocean-teal/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-ocean-teal" />
                  </div>
                  <div>
                    <p
                      className="text-ocean-foam"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-ocean-foam/50"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Quezon City, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="p-6 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-ocean-teal/15 border border-ocean-teal/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-ocean-teal" />
                  </div>
                  <h3
                    className="text-ocean-foam mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-ocean-foam/50"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Thank you for reaching out. I'll get back to
                    you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-ocean-light/10 text-ocean-foam border border-ocean-light/20 hover:bg-ocean-light/20 transition-all"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3
                    className="text-ocean-foam mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    Send a Message
                  </h3>

                  <div>
                    <label
                      className="block text-ocean-foam/70 mb-1.5"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ocean-deep/50 border border-ocean-light/15 text-ocean-foam placeholder:text-ocean-foam/30 focus:border-ocean-light/40 focus:outline-none transition-all"
                      placeholder="Your name"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-ocean-foam/70 mb-1.5"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ocean-deep/50 border border-ocean-light/15 text-ocean-foam placeholder:text-ocean-foam/30 focus:border-ocean-light/40 focus:outline-none transition-all"
                      placeholder="your@email.com"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-ocean-foam/70 mb-1.5"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ocean-deep/50 border border-ocean-light/15 text-ocean-foam placeholder:text-ocean-foam/30 focus:border-ocean-light/40 focus:outline-none transition-all resize-none"
                      placeholder="Tell me about your project or idea..."
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ocean-light text-white hover:bg-ocean-light/90 transition-all shadow-lg shadow-ocean-light/20"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}