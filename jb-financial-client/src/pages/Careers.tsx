import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import HeroSection from "../components/sections/HeroSection";
import PlainTextSection from "../components/sections/PlainTextSection";
import AccordionSection from "../components/sections/AccordionSection";

const Careers: React.FC = () => {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load job listings. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
      <>
        <HeroSection
            title="Join Our Team"
            highlightedText="Our Team"
            description="Experience a supportive work culture that values collaboration and growth."
            button1Text="Learn More"
            button2Text="Contact Us"
            desktopImage="/images/hero/careers-d.jpg"
            mobileImage="/images/hero/careers-m.jpg"
            renderLeftContent={false}
        />
        <PlainTextSection />
        {loading ? (
            <p>Loading job listings...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <AccordionSection
                title="Career Opportunities"
                highlightedText="Career"
                accordionType="careers"
                accordionProps={{ jobs: jobsData }}
            />
        )}
      </>
  );
};

export default Careers;