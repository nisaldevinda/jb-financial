import React from "react";

interface TestimonialSectionProps {
  logoSrc: string;
  testimonialText: string;
  testimonialImageSrc: string;
  name: string;
  designation: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  logoSrc,
  testimonialText,
  testimonialImageSrc,
  name,
  designation,
}) => {
  return (
    <section className="bg-off-white border-y-2 border-neutral-lighter px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-8 items-center">
      <img src={logoSrc} alt="Logo" className="w-[140px]" />
      <p className="bodyText neutralText w-full md:w-1/2 text-center">
        {`“${testimonialText}”`}
      </p>
      <div className="flex flex-col gap-4 items-center">
        <img src={testimonialImageSrc} alt="Testimonial" className="w-16" />
        <div className="flex flex-col gap-1">
          <h5 className="switzer-sb text-lg md:text-2xl primaryText text-center">
            {name}
          </h5>
          <p className="bodyText text-neutral-light text-center">
            {designation}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
