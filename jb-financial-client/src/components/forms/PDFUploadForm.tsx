import React, { useState, FormEvent } from "react";
import axios from "axios";
import { SERVER_URL } from "../../Constants.tsx";
import emailjs from "emailjs-com";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  linkedInUrl?: string;
  pdfUrl?: string;
}

interface PDFUploadFormProps {
  position: string;
}

const PDFUploadForm: React.FC<PDFUploadFormProps> = ({ position }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    linkedInUrl: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setSelectedFile(file);
        setUploadStatus("");
      } else {
        setUploadStatus("Please select a PDF file");
        setSelectedFile(null);
      }
    }
  };

  const handleUpload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploadStatus("Uploading...");
      const response = await axios.post(`${SERVER_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("Upload successful!");
      return response.data.imageUrl;
    } catch (error) {
      setUploadStatus("Upload failed. Please try again.");
      throw error;
    }
  };

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     try {
  //       let pdfUrl = "";
  //       if (selectedFile) {
  //         pdfUrl = await handleUpload(selectedFile);
  //       }

  //       const finalFormData = {
  //         ...formData,
  //         pdfUrl,
  //         position, // Adding the hidden applied position field
  //       };

  //       console.log("Form submitted with data:", finalFormData);

  //       // Reset form
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         mobileNumber: "",
  //         linkedInUrl: "",
  //       });
  //       setSelectedFile(null);
  //       setUploadStatus("Form submitted successfully!");
  //     } catch (error) {
  //       setUploadStatus("Form submission failed. Please try again.");
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let pdfUrl = "";
      if (selectedFile) {
        pdfUrl = await handleUpload(selectedFile);
      }

      const templateParams = {
        to_name: "JBF Website Carreer",
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        linkedInUrl: formData.linkedInUrl || "N/A",
        pdfUrl,
        position, // Hidden field with applied position
      };

      // Use EmailJS to send the email
      const result = await emailjs.send(
        "service_7oqla1i", // Replace with your EmailJS service ID
        "template_u92o6cm", // Replace with your EmailJS template ID
        templateParams,
        "YB6BakE_DZu4DxQrW" // Replace with your EmailJS public key (user ID)
      );

      console.log("Email sent successfully!", result.text);
      setUploadStatus("Form submitted and email sent successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        linkedInUrl: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error sending email:", error);
      setUploadStatus("Form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-10 p-4 md:p-12 bg-off-white shadow-2xl rounded-3xl"
    >
      <h3 className="subtitleText text-neutral-mid">Apply Now</h3>

      {uploadStatus && (
        <div
          className={`regularText p-4 rounded ${
            uploadStatus.includes("successful")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {uploadStatus}
        </div>
      )}

      {/* First Name & Last Name */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid w-full"
          required
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid w-full"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col gap-2">
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          placeholder="Mobile Number"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
          required
        />
      </div>

      {/* LinkedIn URL (Optional) */}
      <div className="flex flex-col gap-2">
        <input
          type="url"
          id="linkedInUrl"
          name="linkedInUrl"
          value={formData.linkedInUrl}
          onChange={handleInputChange}
          placeholder="LinkedIn Profile URL (Optional)"
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
        />
      </div>

      {/* PDF Upload */}
      <div className="flex flex-col gap-2">
        <input
          type="file"
          id="pdf"
          accept=".pdf"
          onChange={handleFileChange}
          className="px-6 py-4 border border-neutral-lighter focus:border-primary-800 rounded-lg switzer-r text-neutral-mid"
        />
        {selectedFile && (
          <div className="text-sm text-green-600 mt-1">
            Selected file: {selectedFile.name}
          </div>
        )}
      </div>

      {/* Hidden Applied Position Field */}
      <input type="hidden" name="position" value={position} />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`primary-button ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary-500 hover:bg-primary-600"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Form"}
      </button>
    </form>
  );
};

export default PDFUploadForm;
