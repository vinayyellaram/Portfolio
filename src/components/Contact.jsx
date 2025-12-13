import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import GlbModel from "./3dModels/GlbModel";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/components/ui/card";
import { Button } from "@components/components/ui/button";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [currectAnimation, setCurrectAnimation] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setCurrectAnimation("play");
    if (window.animationTimeout) clearTimeout(window.animationTimeout);
    window.animationTimeout = setTimeout(() => setCurrectAnimation(""), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const sendEmail = async () => {
    try {
      const response = await emailjs.send(
        "service_xw1i8uo",
        "template_pr8gocs",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        "L-ovI-oSbdLSpITK7"
      );
      console.log("SUCCESS!", response);
      alert("Message sent!");
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.log("FAILED...", error);
      alert("Error sending message.");
    }
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vinayyellaram",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vinay-yellaram-a4203b194/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:vinayyellaram715@gmail.com",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl tracking-wider  md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 font-semibold"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <GlbModel currectAnimation={currectAnimation} />
          </motion.div>
          <motion.div className="space-y-6 flex flex-row justify-around gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}>

            {/* Socials */}
            <Card className="flex-1 border border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      className="w-full justify-start text-foreground hover:text-primary hover:border-primary transition-all"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{social.label}</span>
                      </a>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Outro */}

            <Card className="flex-1 border border-border shadow-sm">
              <CardContent className="text-muted-foreground text-lg leading-relaxed p-6">
                Let's build something amazing together! Whether you have a
                project in mind or just want to chat about technology, I'd love
                to hear from you.
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
