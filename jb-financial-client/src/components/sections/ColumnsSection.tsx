// Card Components
import UnitTrustCard from "../cards/UnitTrustCard";
import FundPriceCard from "../cards/FundPriceCard";
import BlogCard from "../cards/BlogCard";
import TeamCard from "../cards/TeamCard";
import ContactCard from "../cards/ContactCard";

// Define prop types for the cards
interface UnitTrustCardProps {
  type: "unitTrust";
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface FundPriceCardProps {
  type: "fundPrice";
  title: string;
  subtitle: string;
  link: string;
  buyPrice: number;
  sellPrice: number;
}

interface ContactCardProps {
  type: "contact";
  line1: string;
  line2: string;
  line3: string;
  imageUrl: string;
}

interface BlogCardProps {
  type: "blog";
  title: string;
  category: string;
  duration: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface TeamCardProps {
  type: "team";
  name: string;
  designation: string;
  imageUrl: string;
}

type CardProps =
  | UnitTrustCardProps
  | FundPriceCardProps
  | ContactCardProps
  | BlogCardProps
  | TeamCardProps;

interface ColumnsSectionProps {
  subtitleText: string;
  bodyText?: string;
  buttonText?: string;
  buttonType?: "primary" | "secondary";
  cards: CardProps[];
  alignText?: "left" | "center";
}

function ColumnsSection({
  subtitleText,
  bodyText,
  buttonText,
  buttonType = "secondary",
  cards,
  alignText = "center",
}: ColumnsSectionProps) {
  // Function to apply primaryText class to specific letters
  const applyPrimaryTextClass = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) =>
          word.includes("*") ? (
            <span key={index} className="primaryText">
              {word.replace("*", "")}
            </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </>
    );
  };

  return (
    <section
      className={`bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-16 items-${alignText}`}
    >
      <h2 className={`subtitleText text-gray-600 text-${alignText}`}>
        {applyPrimaryTextClass(subtitleText)}
      </h2>
      {bodyText && <p className={`bodyText text-${alignText}`}>{bodyText}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
        {cards.map((card, index) => {
          switch (card.type) {
            case "unitTrust":
              return (
                <UnitTrustCard
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  link={card.link}
                />
              );
            case "fundPrice":
              return (
                <FundPriceCard
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  buyPrice={card.buyPrice}
                  sellPrice={card.sellPrice}
                />
              );
            case "contact":
              return (
                <ContactCard
                  key={index}
                  line1={card.line1}
                  line2={card.line2}
                  line3={card.line3}
                  imageUrl={card.imageUrl}
                />
              );
            case "blog":
              return (
                <BlogCard
                  key={index}
                  title={card.title}
                  category={card.category}
                  duration={card.duration}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  link={card.link}
                />
              );
            case "team":
              return (
                <TeamCard
                  key={index}
                  name={card.name}
                  designation={card.designation}
                  imageUrl={card.imageUrl}
                />
              );
            default:
              return null;
          }
        })}
      </div>
      {buttonText && (
        <button className={`${buttonType}-button text-${alignText}`}>
          {buttonText}
        </button>
      )}
    </section>
  );
}

export default ColumnsSection;
