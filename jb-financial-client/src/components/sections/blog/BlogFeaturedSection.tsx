import React from "react";

interface BlogFeaturedSectionProps {
  imageSrc: string;
  category: string;
  readingTime: string;
  title: string;
  description: string;
  buttonText: string;
}

const BlogFeaturedSection: React.FC<BlogFeaturedSectionProps> = ({
  imageSrc,
  category,
  readingTime,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-6 md:gap-16">
      <div className="w-full md:w-1/4">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="w-full md:w-3/4 flex flex-col gap-4 md:gap-10 justify-center">
        <div className="flex gap-4 items-center">
          <span className="regularText uppercase">{category}</span>
          <div className="flex gap-2 border border-neutral-mid rounded-full px-3 py-1">
            <img src="/icons/clock.svg" alt="Clock" />
            <span className="switzer-md text-sm">{readingTime}</span>
          </div>
        </div>
        <h4 className="subtitleText text-neutral-mid">{title}</h4>
        <p className="bodyText text-neutral-mid">{description}</p>
        <button className="secondary-button">{buttonText}</button>
      </div>
    </section>
  );
};

export default BlogFeaturedSection;
