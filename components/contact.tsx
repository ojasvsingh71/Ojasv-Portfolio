"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_p5m05o9",
        "template_5mntav8",
        form as unknown as Record<string, unknown>,
        "mi5mbj2rLBUfNW197"
      )
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
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start md:items-center">
        <div className="space-y-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Let's Chat
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Have a project in mind, a question, or just want to connect? I'm
              always open to discussing new opportunities and interesting ideas.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 text-gray-200 w-full justify-center md:justify-start">
              <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm shrink-0">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Mail me at</p>
                <a
                  href="mailto:ojasvsingh0@gmail.com"
                  className="font-medium hover:text-blue-400 transition break-all"
                >
                  ojasvsingh0@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-200 w-full justify-center md:justify-start">
              <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm shrink-0">
                <MapPin className="text-purple-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Based in</p>
                <p className="font-medium">India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a
              href="https://github.com/ojasvsingh71"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-3 rounded-lg hover:bg-white/20 hover:scale-110 transition-all text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ojasv-singh-b80b52326/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-3 rounded-lg hover:bg-white/20 hover:scale-110 transition-all text-blue-400"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl w-full"
        >
          <div className="space-y-5 sm:space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                type="text"
                placeholder="Ojasv Singh"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                type="email"
                placeholder="ojasv@example.com"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all resize-none text-sm sm:text-base"
                placeholder="What's on your mind?"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Sending...
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
