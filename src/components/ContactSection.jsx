import React from 'react';
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const ContactItem = ({ icon, title, value, link }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-md">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      {link ? (
        <a
          href={link}
          className="text-gray-300 hover:text-teal-300 transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-300">{value}</span>
      )}
    </div>
  </div>
);

const InputField = ({ id, label, type = "text", placeholder }) => (
  <div className="mb-5">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required
      className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
      placeholder={placeholder}
    />
  </div>
);

const TextAreaField = ({ id, label, placeholder }) => (
  <div className="mb-5">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows="5"
      required
      className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
      placeholder={placeholder}
    />
  </div>
);

  return (
    <section
  id="contact"
  className="py-16 md:py-20 px-4 md:px-6 text-white relative z-10 scroll-mt-32 panel-spacing"
>
  <div className="panel-glow-wrap section-panel-bridge max-w-6xl mx-auto">
  <div className="section-panel container max-w-6xl mx-auto px-6 md:px-9 py-12 md:py-16 relative z-10 bg-gradient-to-br from-[#1e1e2f] via-[#2d2e4a] to-[#1b1c2b] dark:from-[#0f0f1f] dark:via-[#111125] dark:to-[#0a0a15]">
    <h2 className="panel-title text-3xl md:text-5xl font-extrabold text-center mb-5 md:mb-6">
      Get <span className="highlight">In Touch</span>
    </h2>
    <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 md:mb-12 text-sm md:text-base leading-relaxed">
      Have a project in mind or want to collaborate? Feel free to reach out.
      I'm always open to new ideas, opportunities, and creative discussions.
    </p>

    <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
      {/* Contact Info */}
      <div className="space-y-8 md:space-y-10 max-w-sm md:max-w-none mx-auto">
        <div className="space-y-5 md:space-y-6">
              <ContactItem
                  icon={<Mail />}
                  title="Email"
                  value="vikrantkawadkar2099@gmail.com"
                  link="mailto:vikrantkawadkar2099@gmail.com"
              />
              <ContactItem
                  icon={<Phone />}
                  title="Phone"
                  value="+91 94099 14760"
                  link="tel:+919409914760"
              />
              <ContactItem
                  icon={<MapPin />}
                  title="Location"
                  value="Ahmedabad, Gujarat, India"
              />
          </div>

          

        <div className="flex items-start space-x-4">
  <div className="p-2.5 md:p-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-md">
    <Send className="text-white w-5 h-5 md:w-6 md:h-6" />
  </div>
  <div>
    <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Connect with me</h4>
    <div className="flex items-center space-x-3 md:space-x-4">
      {[
        {
          href: "https://linkedin.com/in/vikrant-kawadkar-0b9073251",
          icon: <Linkedin />,
        },
        {
          href: "https://x.com/KawadkarVikrant",
          icon: <Twitter />,
        },
        {
          href: "https://instagram.com/vikrantkawadkar",
          icon: <Instagram />,
        },
        {
          href: "#",
          icon: <Twitch />,
        },
      ].map(({ href, icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-teal-300 transition duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full"
        >
          <div className="p-2 bg-[#1e1e2f] dark:bg-[#1c1c2c] rounded-full flex items-center justify-center">
            {React.cloneElement(icon, { className: 'w-4 h-4 md:w-5 md:h-5' })}
          </div>
        </a>
      ))}
    </div>
  </div>
</div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c2c] rounded-3xl p-6 md:p-8 shadow-lg ring-1 ring-white/10 max-w-md md:max-w-full mx-auto"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-teal-300">Send a Message</h3>
        <InputField id="name" label="Your Name" placeholder="Enter your name..." />
        <InputField id="email" label="Your Email" type="email" placeholder="you@example.com" />
        <TextAreaField id="message" label="Your Message" placeholder="What's on your mind?" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.3)]"
        >
          {isSubmitting ? "Sending..." : "Send Message"} <Send className="inline ml-2" size={18} />
        </button>
      </form>
    </div>
  </div>
  </div>
</section>

  );
};