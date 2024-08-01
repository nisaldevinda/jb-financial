import React from "react";

interface BlogCardProps {
  category: string;
  duration: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const blogCardData: BlogCardProps[] = [
  {
    category: "Investing",
    duration: "5 min",
    title: "Laddering as a strategy",
    description:
      "In a period of declining interest rates, laddering can be a great way to buttress your returns. Let us explain.",
    imageUrl: "/images/blog/sample-blog-1.jpg",
    link: "/blogs/blog-1",
  },
  {
    category: "Economy",
    duration: "15 min",
    title: "An uptick in economic performance",
    description:
      "Sri Lanka’s economic activity displayed an uptick in the first two quarters of 2024. Read our take and observations.",
    imageUrl: "/images/blog/sample-blog-2.jpg",
    link: "/blogs/blog-1",
  },
  {
    category: "Investing",
    duration: "10 min",
    title: "Investment Review 2Q 2024",
    description:
      "Reviewing our investment portfolio and its performance in the second quarter of 2024.",
    imageUrl: "/images/blog/sample-blog-3.jpg",
    link: "/blogs/blog-1",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  duration,
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300">
      <div className="flex flex-col px-4 py-6">
        <div className="flex justify-between items-center">
          <span className="regularText uppercase">{category}</span>
          <div className="flex gap-2 border border-neutral-mid rounded-full px-3 py-1">
            <img src="/icons/clock.svg" alt="" />
            <span className="switzer-md text-sm">{duration}</span>
          </div>
        </div>
        <span className="switzer-sb text-lg md:text-2xl primaryText">
          {title}
        </span>
      </div>
      <img src={imageUrl} className="" alt="card-image" />
      <div className="flex flex-col gap-6 px-4 pt-9 pb-6">
        <p className="regularText neutralText">{description}</p>
        <a href={link} className="switzer-md">
          Read More
        </a>
      </div>
    </div>
  );
};

export { BlogCard, blogCardData };
