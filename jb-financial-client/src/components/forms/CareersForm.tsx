import React, { useState } from "react";

interface CareersFormProps {
  position: string; // Prop to pass the applying position
}

const CareersForm: React.FC<CareersFormProps> = ({ position }) => {
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+94"); // Default to Sri Lanka
  const [email, setEmail] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [cv, setCv] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cv && cv.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", {
      position,
      name,
      mobile: `${countryCode} ${mobile}`,
      email,
      linkedin,
      cv,
    });
  };

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-10 p-4 md:p-12 bg-off-white shadow-2xl rounded-3xl"
    >
      <h3 className="subtitleText text-neutral-mid">Apply Now</h3>

      {/* Autofilled Position Field */}
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={position}
          className="px-6 py-4 border border-neutral-lighter bg-neutral-light rounded-lg switzer-r text-neutral-mid"
          readOnly
        />
      </div>

      {/* Name Field */}
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

      {/* Mobile Number with Country Code */}
      <div className="flex flex-col md:flex-row gap-2">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid md:w-1/4"
        >
          <option value="+94">+94 (Sri Lanka)</option>
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid md:w-3/4"
          required
        />
      </div>

      {/* Email Field */}
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

      {/* LinkedIn URL Field (Optional) */}
      <div className="flex flex-col gap-2">
        <input
          type="url"
          id="linkedin"
          value={linkedin}
          placeholder="LinkedIn URL (Optional)"
          onChange={(e) => setLinkedin(e.target.value)}
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
        />
      </div>

      {/* Upload CV Field */}
      <div className="flex flex-col gap-2">
        <input
          type="file"
          id="cv"
          accept=".pdf, .docx"
          onChange={handleCvUpload}
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  );
};

export default CareersForm;
