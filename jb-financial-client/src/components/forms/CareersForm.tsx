import React, { useState } from "react";
import axios from "axios";

import { SERVER_URL } from "../../Constants.tsx"; // Import the server URL for the document upload functionality

interface CareersFormProps {
  position: string;
}

const CareersForm: React.FC<CareersFormProps> = ({ position }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [cvFile, setCvFile] = useState<File | null>(null); // State for CV file
  const [uploadStatus, setUploadStatus] = useState<string>(""); // State for upload status
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCvFile(e.target.files[0]); // Set the selected file
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please upload your CV.");
      return;
    }

    const formData = new FormData();
    formData.append("document", cvFile); // Append the CV file to form data
    formData.append("position", position); // Include position as well

    setIsLoading(true); // Start loading
    try {
      // Make a POST request to your document upload endpoint
      const response = await axios.post(`${SERVER_URL}/upload-doc`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploadStatus("Upload successful!"); // Update status on success
      alert("Thank you! We have received your application.");
      console.log(response.data); // Log response data for debugging
    } catch (error) {
      // Check if error is an instance of Error
      if (error instanceof Error) {
        setUploadStatus(`Upload failed: ${error.message}`); // Use error message
      } else {
        setUploadStatus("Upload failed: Unknown error occurred."); // Fallback for unknown errors
      }
      console.error("Error during upload:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-10 p-4 md:p-12 bg-off-white shadow-2xl rounded-3xl"
    >
      <h3 className="subtitleText text-neutral-mid">Apply Now</h3>

      {/* First Name */}
      <input
        type="text"
        id="first-name"
        name="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
        className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid flex-grow"
      />

      {/* Last Name */}
      <input
        type="text"
        id="last-name"
        name="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
        className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid flex-grow"
      />

      {/* Email */}
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
      />

      {/* Mobile Number */}
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile Number"
        required
        className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
      />

      {/* LinkedIn URL */}
      <input
        type="url"
        id="linkedin"
        name="linkedin"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        placeholder="LinkedIn URL (Optional)"
        className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
      />

      {/* CV Upload */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cv" className="switzer-md text-neutral-mid mb-2">
          Upload CV (PDF or DOCX)
        </label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.docx" // Accept only PDF and DOCX formats
          onChange={handleFileChange}
          required
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid flex-grow"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="primary-button" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </button>

      {/* Upload Status Message */}
      {uploadStatus && <p>{uploadStatus}</p>}
    </form>
  );
};

export default CareersForm;
