import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
}

const UnitTrustCard: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300">
      <div className="flex flex-col px-4 py-6">
        <span className="regularText">{title}</span>
        <span className="switzer-sb text-lg md:text-2xl primaryText">
          {subtitle}
        </span>
      </div>
      <img src={imageUrl} className="" alt="card-image" />
      <div className="flex flex-col gap-6 px-4 pt-9 pb-6">
        <p className="regularText neutralText">{description}</p>
        <a
          href={link}
          className="switzer-md text-neutral-light hover:text-neutral-mid"
        >
          Learn More &nbsp;→
        </a>
      </div>
    </div>
  );
};

export default UnitTrustCard;
