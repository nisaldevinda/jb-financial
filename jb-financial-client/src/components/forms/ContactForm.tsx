import React, { useState } from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [subscribe, setSubscribe] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message, subscribe });
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

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          className="w-4 h-4"
        />
        <label
          htmlFor="subscribe"
          className="text-sm md:text-base switzer-r text-neutral-light"
        >
          I Agree with the{" "}
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </label>
      </div>

      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
