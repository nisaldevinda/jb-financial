import React from "react";

interface SideContentSectionProps {
  title: string;
  highlightedText: string;
  description?: string;
  buttonText?: string;
  imageUrl: string;
  textColumns?: Array<{ title: string; text: string }>;
  imageColumn?: { title: string; text: string; imageUrl: string };
  newRow?: { line1: string; line2: string; line3: string };
  swapContentAndImage?: boolean;
}

const SideContentSection: React.FC<SideContentSectionProps> = ({
  title,
  highlightedText,
  description,
  buttonText,
  imageUrl,
  textColumns,
  imageColumn,
  newRow,
  swapContentAndImage = false,
}) => {
  const titleWords = title.split(" ");
  const highlightedTitle = titleWords.map((word, index) =>
    highlightedText.includes(word) ? (
      <span key={index} className="primaryText">
        {word}{" "}
      </span>
    ) : (
      <span key={index}>{word} </span>
    )
  );

  const renderTextColumns = textColumns?.map((col, idx) => (
    <div key={idx} className="w-full md:w-1/2 flex flex-col gap-6">
      <h4 className="switzer-sb text-2xl uppercase text-primary-900">
        {col.title}
      </h4>
      <p className="regularText neutralText">{col.text}</p>
    </div>
  ));

  const renderImageColumn = imageColumn && (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h4 className="switzer-sb text-2xl uppercase text-primary-900">
          {imageColumn.title}
        </h4>
        <p className="regularText neutralText">{imageColumn.text}</p>
      </div>
      <img src={imageColumn.imageUrl} alt="" className="w-full md:w-1/2" />
    </div>
  );

  const renderNewRow = newRow && (
    <div className="flex flex-col md:flex-row gap-8">
      <ul className="list-disc pl-5">
        <li className="bodyText neutralText">{newRow.line1}</li>
        <li className="bodyText neutralText">{newRow.line2}</li>
        <li className="bodyText neutralText">{newRow.line3}</li>
      </ul>
    </div>
  );

  const renderButton = buttonText && (
    <button className="secondary-button">{buttonText}</button>
  );

  const content = (
    <div className="flex flex-col justify-center gap-12 w-full md:w-[60%]">
      <h2 className="subtitleText text-neutral-mid">{highlightedTitle}</h2>
      {description && (
        <p className="bodyText neutralText w-full md:w-[80%]">{description}</p>
      )}
      {textColumns && (
        <div className="flex flex-col md:flex-row gap-8">
          {renderTextColumns}
        </div>
      )}
      {imageColumn && renderImageColumn}
      {newRow && renderNewRow}
      {renderButton}
    </div>
  );

  const image = (
    <div className="w-full md:w-[40%]">
      <img src={imageUrl} className="" alt="section-image" />
    </div>
  );

  return (
    <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-16">
      {swapContentAndImage ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </section>
  );
};

export default SideContentSection;
