import React from "react";

interface Document {
  title: string;
  fileType: string;
  fileSize: string;
  tags: string[];
  buttonText: string;
  filePath: string; // Add filePath to point to the document
}

interface FundDocumentsSectionProps {
  sectionTitle: string;
  description: string;
  documents: Document[];
}

const FundDocumentsSection: React.FC<FundDocumentsSectionProps> = ({
  sectionTitle,
  description,
  documents,
}) => {
  return (
    <section className="bg-white px-4 py-8 md:p-8 lg:px-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16">
      <h4 className="subtitleText text-neutral-mid">{sectionTitle}</h4>
      <p className="bodyText text-neutral-mid">{description}</p>
      {documents.map((doc, index) => (
        <div
          key={index}
          className="flex flex-col p-4 mlg:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest"
        >
          <div className="flex flex-col gap-4">
            <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
              {doc.title}
            </h5>
            <p className="bodyText text-neutral-mid">
              {doc.fileType} - <span>{doc.fileSize}</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-2 md:gap-6 h-fit">
              {doc.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={doc.filePath} // Removed download attribute
              className="primary-button"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              {doc.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FundDocumentsSection;
