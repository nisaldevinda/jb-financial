import React from "react";

interface TeamCardProps {
  name: string;
  designation: string;
  imageUrl: string;
}

const teamCardData: TeamCardProps[] = [
  {
    name: "John Doe",
    designation: "CEO",
    imageUrl: "/images/team/sample-team-1.png",
  },
  {
    name: "Jane Smith",
    designation: "CTO",
    imageUrl: "/images/team/sample-team-2.png",
  },
  {
    name: "Alice Johnson",
    designation: "CFO",
    imageUrl: "/images/team/sample-team-3.png",
  },
  {
    name: "Michael Brown",
    designation: "COO",
    imageUrl: "/images/team/sample-team-1.png",
  },
  {
    name: "Emily Davis",
    designation: "CMO",
    imageUrl: "/images/team/sample-team-2.png",
  },
  {
    name: "David Wilson",
    designation: "VP of Sales",
    imageUrl: "/images/team/sample-team-3.png",
  },
  {
    name: "Sophia Taylor",
    designation: "Head of HR",
    imageUrl: "/images/team/sample-team-1.png",
  },
  {
    name: "James Anderson",
    designation: "Lead Developer",
    imageUrl: "/images/team/sample-team-2.png",
  },
  {
    name: "Olivia Martinez",
    designation: "Product Manager",
    imageUrl: "/images/team/sample-team-3.png",
  },
];

const TeamCard: React.FC<TeamCardProps> = ({ name, designation, imageUrl }) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 p-8 md:p-12 gap-8 md:gap-12 items-center">
      <img src={imageUrl} alt="" className="w-60 h-auto" />
      <div className="flex flex-col gap-1">
        <h5 className="switzer-sb text-lg md:text-2xl primaryText text-center">
          {name}
        </h5>
        <p className="bodyText text-neutral-light text-center">{designation}</p>
      </div>
    </div>
  );
};

export { TeamCard, teamCardData };
