import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // EmailJS configuration
  const serviceId = "service_7oqla1i";
  const templateId = "template_scn5gyn";
  const publicKey = "YB6BakE_DZu4DxQrW";

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "JB Financial",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully.", response.status, response.text);
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-10 p-4 md:p-12 bg-off-white shadow-2xl rounded-3xl"
    >
      <h3 className="subtitleText text-neutral-mid">Get in Touch</h3>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          id="message"
          value={message}
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          rows={5}
          required
        />
      </div>

      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
