import React from "react";

interface ContactCardProps {
  line1: string;
  line2: string;
  line3: string;
  imageUrl: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  line1,
  line2,
  line3,
  imageUrl,
}) => {
  return (
    <div className="flex items-center gap-4 py-4 md:py-16">
      <img src={imageUrl} alt="" className="w-12 md:w-auto" />
      <div className="">
        <p className="bodyText text-neutral-mid">{line1}</p>
        <p className="bodyText text-neutral-mid">{line2}</p>
        <p className="bodyText text-neutral-mid">{line3}</p>
      </div>
    </div>
  );
};

export default ContactCard;
