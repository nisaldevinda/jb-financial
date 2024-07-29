import React from "react";

interface ContactCardProps {
  line1: string;
  line2: string;
  line3: string;
  imageUrl: string;
}

const contactCardData: ContactCardProps[] = [
  {
    line1: "hello@jbvantage.lk",
    line2: "sales@jbvantage.lk",
    line3: "",
    imageUrl: "/icons/mail.svg",
  },
  {
    line1: "+94 11 249 0900",
    line2: "+94 11 249 0950",
    line3: "+94 11 249 0952",
    imageUrl: "/icons/phone.svg",
  },
  {
    line1: "150, St. Joseph’s Street,",
    line2: "Colombo 14,",
    line3: "Sri Lanka.",
    imageUrl: "/icons/map.svg",
  },
  // Add more contact card data here if needed
];

const ContactCard: React.FC<ContactCardProps> = ({
  line1,
  line2,
  line3,
  imageUrl,
}) => {
  return (
    <div className="flex items-center gap-4 py-4 md:py-16">
      <img src={imageUrl} alt="" className="w-12 md:w-auto" />
      <div>
        <p className="bodyText text-neutral-mid">{line1}</p>
        <p className="bodyText text-neutral-mid">{line2}</p>
        <p className="bodyText text-neutral-mid">{line3}</p>
      </div>
    </div>
  );
};

export { ContactCard, contactCardData };
