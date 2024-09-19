import React, { useState } from "react";

interface ContactFormNProps {}

const ContactFormN: React.FC<ContactFormNProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // https://submit-form.com/L2fLPRTx2

  return (
    <form
      action="https://submit-form.com/echo"
      method="POST"
      className="flex flex-col gap-4 md:gap-10 p-4 md:p-12 bg-off-white shadow-2xl rounded-3xl"
    >
      <h3 className="subtitleText text-neutral-mid">Get in Touch</h3>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          id="name"
          name="name"
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
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          rows={5}
          required
        />
      </div>

      <button type="submit" className="primary-button">
        Send
      </button>
    </form>
  );
};

export default ContactFormN;
