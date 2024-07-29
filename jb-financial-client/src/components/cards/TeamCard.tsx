import React from "react";

interface TeamCardProps {
  name: string;
  designation: string;
  imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, designation, imageUrl }) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 p-8 md:p-12 gap-8 md:gap-12 items-center">
      <img src={imageUrl} alt="" className="w-60 h-60" />
      <div className="flex flex-col gap-1">
        <h5 className="switzer-sb text-lg md:text-2xl primaryText text-center">
          {name}
        </h5>
        <p className="bodyText text-neutral-light text-center">{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
