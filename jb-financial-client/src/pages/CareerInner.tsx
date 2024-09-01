import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CareersForm from "../components/forms/CareersForm";
import {SERVER_URL} from "../Constants.tsx";

interface ContentItem {
  heading: string;
  paragraphs: string[];
}

interface CareerData {
  title: string;
  location: string;
  tags: string[];
  content: ContentItem[];
}

const CareerInner: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the job ID from the URL
  const [career, setCareer] = useState<CareerData | null>(null);

  useEffect(() => {
    // Fetch career data from your API using the job ID
    fetch(`${SERVER_URL}/api/careers/${id}`)
        .then(response => response.json())
        .then(data => {
          setCareer({
            title: data.title,
            location: data.location,
            tags: data.tags,
            content: data.content, // Assume the content structure is already correct
          });
        })
        .catch(error => console.error('Error fetching career data:', error));
  }, [id]);

  return career ? (
      <>
        <div className="h-[72px]"></div>
        <section className="px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16 items-start">
          <div className="flex flex-col gap-4 items-start">
            <h5 className="zodiak-r text-3xl md:text-6xl text-neutral-mid">
              {career.title}
            </h5>
            <p className="bodyText text-neutral-mid">{career.location}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
            <div className="flex gap-2 md:gap-6 h-fit">
              {career.tags.map((tag, index) => (
                  <span
                      key={index}
                      className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg"
                  >
                {tag}
              </span>
              ))}
            </div>
            <button className="primary-button">Apply Now</button>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16">
          {career.content.map((contentItem, index) => (
              <div key={index} className="content-block">
                <h6 className="heading switzer-sb text-xl md:text-2xl text-neutral-mid">
                  {contentItem.heading}
                </h6>
                {contentItem.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="bodyText text-neutral-mid">
                      {paragraph}
                    </p>
                ))}
              </div>
          ))}
        </section>

        {/* Careers Form Section */}
        <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16">
          <CareersForm position={career.title} />
        </section>
      </>
  ) : (
      <div>Loading...</div>
  );
};

export default CareerInner;
