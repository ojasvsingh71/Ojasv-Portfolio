"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2, MessageSquare } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_p5m05o9", "template_5mntav8", form as unknown as Record<string, unknown>, "mi5mbj2rLBUfNW197")
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message, please try again later");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5.5rem var(--gutter) 4rem",
        color: "#f8fafc",
      }}
    >
      <div
        style={{ maxWidth: "var(--container)", width: "100%" }}
        className="contact-outer"
      >
        {/* LEFT: info */}
        <div className="fade-up contact-info" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h2 className="section-heading gradient-text" style={{ marginBottom: "1rem" }}>
              Let&apos;s Chat
            </h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, maxWidth: "460px", fontSize: "1.05rem" }}>
              Have a project in mind, a question, or an opportunity? I&apos;m always open to discussing full-stack engineering, competitive programming, and innovative ideas.
            </p>
          </div>

          {/* Contact detail cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              className="glass-card"
              style={{ display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.25rem 1.5rem" }}
            >
              <div
                style={{
                  background: "rgba(59,130,246,0.2)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-full)",
                  flexShrink: 0,
                }}
              >
                <Mail size={22} color="#60a5fa" />
              </div>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Mail me at
                </p>
                <a
                  href="mailto:ojasvsingh0@gmail.com"
                  style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  ojasvsingh0@gmail.com
                </a>
              </div>
            </div>

            <div
              className="glass-card"
              style={{ display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.25rem 1.5rem" }}
            >
              <div
                style={{
                  background: "rgba(74,222,128,0.2)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-full)",
                  flexShrink: 0,
                }}
              >
                <Phone size={22} color="#4ade80" />
              </div>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Call / WhatsApp
                </p>
                <a
                  href="tel:+919236591912"
                  style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4ade80")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  +91-9236591912
                </a>
              </div>
            </div>

            <div
              className="glass-card"
              style={{ display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.25rem 1.5rem" }}
            >
              <div
                style={{
                  background: "rgba(168,85,247,0.2)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-full)",
                  flexShrink: 0,
                }}
              >
                <MapPin size={22} color="#a78bfa" />
              </div>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Based in
                </p>
                <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.95rem" }}>Ghaziabad / Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://github.com/ojasvsingh71"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: "0.85rem",
                color: "#f8fafc",
                display: "flex",
                transition: "all 0.25s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(15, 23, 42, 0.65)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ojasv-singh-b80b52326/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: "0.85rem",
                color: "#60a5fa",
                display: "flex",
                transition: "all 0.25s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(15, 23, 42, 0.65)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card fade-up fade-up-delay-2 contact-form"
          style={{ padding: "2.5rem" }}
        >
          <h3
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "1.4rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <MessageSquare size={22} color="#60a5fa" />
            Send a Message
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
            <div>
              <label
                style={{ display: "block", fontWeight: 500, color: "#cbd5e1", fontSize: "0.9rem", marginBottom: "0.5rem" }}
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Ojasv Singh"
              />
            </div>

            <div>
              <label
                style={{ display: "block", fontWeight: 500, color: "#cbd5e1", fontSize: "0.9rem", marginBottom: "0.5rem" }}
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="ojasv@example.com"
              />
            </div>

            <div>
              <label
                style={{ display: "block", fontWeight: 500, color: "#cbd5e1", fontSize: "0.9rem", marginBottom: "0.5rem" }}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="input-field"
                style={{ height: "140px", resize: "none" }}
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : (
                <><Send size={18} /> Send Message</>
              )}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .contact-outer {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (min-width: 768px) {
          .contact-outer { grid-template-columns: 1fr 1fr !important; align-items: center !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;