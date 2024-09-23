import React, { useState } from "react";

interface CareersFormProps {
  position: string;
}

const CareersForm: React.FC<CareersFormProps> = ({ position }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Your application has been sent to the HR.");
    e.currentTarget.submit(); // Continue with form submission
  };

  return (
    <form
      action="https://submit-form.com/mEAsfn5j4"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-10 p-4 md:p-12 bg-off-white shadow-2xl rounded-3xl"
    >
      <input
        type="hidden"
        name="_redirect"
        value="https://jb-financial.vercel.app/"
      />
      <h3 className="subtitleText text-neutral-mid">Apply Now</h3>

      {/* Position (Hidden Field) */}
      <input
        type="hidden"
        id="position"
        name="position"
        value={position}
        className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 bg-neutral-lightest rounded-lg switzer-r text-neutral-mid flex-grow"
      />

      {/* First Name */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid flex-grow"
          required
        />
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid flex-grow"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col gap-2">
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      {/* LinkedIn URL */}
      <div className="flex flex-col gap-2">
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="LinkedIn URL (Optional)"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
        />
      </div>

      {/* CV Upload */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cv" className="switzer-md text-neutral-mid mb-2">
          Upload CV
        </label>
        <input
          type="hidden"
          id="cv"
          name="cv"
          role="uploadcare-uploader"
          data-public-key="8da6d6ea3e475bce95cb"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="primary-button">
        Send
      </button>
    </form>
  );
};

export default CareersForm;
