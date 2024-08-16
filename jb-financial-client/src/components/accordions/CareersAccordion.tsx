import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface Job {
  category: string;
  title: string;
  location: string;
  tags: string[];
  link: string;
}

interface CareersAccordionProps {
  jobs: Job[];
}

const CareersAccordion: React.FC<CareersAccordionProps> = ({ jobs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const groupedJobs = jobs.reduce((acc, job) => {
    if (!acc[job.category]) {
      acc[job.category] = [];
    }
    acc[job.category].push(job);
    return acc;
  }, {} as { [key: string]: Job[] });

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion flex flex-col gap-4">
      {Object.keys(groupedJobs).map((category, index) => (
        <div key={index} className="accordion-item ">
          <div
            className={`accordion-title cursor-pointer switzer-sb text-neutral-light text-base md:text-2xl flex justify-between items-center p-6 ${
              activeIndex === index
                ? "border-primary-900 border-2 rounded-xl text-primary-900"
                : "border-y-2 border-neutral-lightest"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {category}
            <span
              className={`${
                activeIndex === index ? "text-primary-900" : "text-neutral-mid"
              }`}
            >
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content p-6">
              {groupedJobs[category].map((job, i) => (
                <div
                  key={i}
                  className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest"
                >
                  <div className="flex flex-col gap-4">
                    <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                      {job.title}
                    </h5>
                    <p className="bodyText text-neutral-mid">{job.location}</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex gap-2 md:gap-6 h-fit">
                      {job.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={job.link}>
                      <button className="primary-button">Apply Now</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CareersAccordion;
