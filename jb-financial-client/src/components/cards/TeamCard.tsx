import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaTimes } from "react-icons/fa"; // Importing close icon from react-icons
import { Info } from "@phosphor-icons/react";

interface TeamCardProps {
  name: string;
  designation: string;
  imageUrl: string;
  description: string; // Added description field
}

const teamCardData: TeamCardProps[] = [
  {
    name: "John Doe",
    designation: "CEO",
    imageUrl: "/images/team/sample-team-1.png",
    description:
      "John has over 20 years of experience in the tech industry. He has successfully led numerous projects that have transformed businesses and improved efficiency across various sectors.",
  },
  {
    name: "Peter Smith",
    designation: "CTO",
    imageUrl: "/images/team/sample-team-2.png",
    description:
      "Peter is an expert in software development and architecture. Her innovative approach has resulted in several award-winning applications that have set industry standards.",
  },
  {
    name: "Alice Johnson",
    designation: "CFO",
    imageUrl: "/images/team/sample-team-3.png",
    description:
      "Alice manages the financial strategy of the company. With her keen analytical skills, she ensures sustainable growth and profitability.",
  },
];

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  designation,
  imageUrl,
  description,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 p-8 md:p-12 gap-8 md:gap-12 items-center">
      <img src={imageUrl} alt={name} className="w-60 h-auto" />
      <div className="flex flex-col gap-1">
        <h5 className="switzer-sb text-lg md:text-2xl primaryText text-center">
          {name}
        </h5>
        <p className="bodyText text-neutral-light text-center">{designation}</p>
        <button
          onClick={() => setOpen(true)}
          className="flex justify-center mt-4"
        >
          <Info size={32} color="#930010" />
        </button>
        <Popup open={open} onClose={() => setOpen(false)} modal>
          <div className="popup-content p-6 bg-white rounded-lg shadow-lg w-full mx-auto flex flex-col gap-4">
            {/* Close Icon */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="switzer-sb text-lg md:text-2xl primaryText">
              {name}
            </h2>
            <p className="regularText text-neutral-mid">{description}</p>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export { TeamCard, teamCardData };
