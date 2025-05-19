// components/Contact.jsx
import React, { useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="bg-slate-900 text-slate-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">Contact</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p>Let’s connect or just say hello!</p>
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a href="mailto:abhishekkenganal6789@gmail.com" className="text-cyan-300 hover:text-white">
                <FaEnvelope />
              </a>
              <a href="https://github.com/abhishekkenganal2" className="text-cyan-300 hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-kenganal/" className="text-cyan-300 hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="flex-1 space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-slate-800 text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-slate-800 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-slate-800 text-white"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
