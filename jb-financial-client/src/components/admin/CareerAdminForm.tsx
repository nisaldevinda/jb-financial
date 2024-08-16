import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

interface CareerContent {
    heading: string;
    paragraphs: string[];
}

interface Career {
    _id?: string;
    title: string;
    location: string;
    tags: string;
    content: CareerContent[];
}

interface CareerAdminFormProps {
    career: Career;
    onSave: (career: Career) => void;
    onCancel: () => void;
}

const CareerAdminForm: React.FC<CareerAdminFormProps> = ({
                                                             career: initialCareer,
                                                             onSave,
                                                             onCancel,
                                                         }) => {
    const [career, setCareer] = useState<Career>(initialCareer);

    useEffect(() => {
        setCareer(initialCareer);
    }, [initialCareer]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setCareer({ ...career, [id]: value });
    };

    const handleSectionChange = (
        index: number,
        field: "heading" | "paragraphs",
        value: string | string[],
        paragraphIndex?: number
    ) => {
        const updatedContent = [...career.content];
        if (field === "paragraphs" && paragraphIndex !== undefined) {
            const updatedParagraphs = [...updatedContent[index].paragraphs];
            updatedParagraphs[paragraphIndex] = value as string;
            updatedContent[index] = { ...updatedContent[index], paragraphs: updatedParagraphs };
        } else {
            updatedContent[index] = { ...updatedContent[index], [field]: value };
        }
        setCareer({ ...career, content: updatedContent });
    };

    const addSection = () => {
        setCareer({
            ...career,
            content: [...career.content, { heading: "", paragraphs: [""] }],
        });
    };

    const removeSection = (index: number) => {
        const updatedContent = career.content.filter((_, i) => i !== index);
        setCareer({ ...career, content: updatedContent });
    };

    const addParagraph = (index: number) => {
        const updatedContent = [...career.content];
        updatedContent[index].paragraphs.push("");
        setCareer({ ...career, content: updatedContent });
    };

    const removeParagraph = (sectionIndex: number, paragraphIndex: number) => {
        const updatedContent = [...career.content];
        updatedContent[sectionIndex].paragraphs = updatedContent[sectionIndex].paragraphs.filter(
            (_, i) => i !== paragraphIndex
        );
        setCareer({ ...career, content: updatedContent });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(career);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4 md:gap-4 p-4 shadow-md rounded-2xl bg-off-white"
        >
            <h4 className="switzer-sb text-base md:text-2xl">Career Editor</h4>
            <p className="switzer-r text-sm text-neutral-mid">
                {career._id ? "Edit Career" : "Create New Career"}
            </p>
            {career._id && (
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <div className="mb-2 block">
                            <Label htmlFor="_id" value="Career ID" className="switzer-md" />
                        </div>
                        <TextInput
                            id="_id"
                            type="text"
                            value={career._id}
                            readOnly
                            required
                            shadow
                            className="switzer-r"
                        />
                    </div>
                </div>
            )}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Career Title" className="switzer-md" />
                    </div>
                    <TextInput
                        id="title"
                        type="text"
                        value={career.title}
                        onChange={handleInputChange}
                        required
                        shadow
                        className="switzer-r"
                    />
                </div>
                <div className="flex-grow">
                    <div className="mb-2 block">
                        <Label htmlFor="location" value="Location" className="switzer-md" />
                    </div>
                    <TextInput
                        id="location"
                        type="text"
                        value={career.location}
                        onChange={handleInputChange}
                        required
                        shadow
                        className="switzer-r"
                    />
                </div>
            </div>
            <div className="mb-2 block">
                <Label htmlFor="tags" value="Tags (Comma Separated)" className="switzer-md" />
            </div>
            <TextInput
                id="tags"
                type="text"
                value={career.tags}
                onChange={handleInputChange}
                shadow
                className="switzer-r"
            />
            <div>
                <h5 className="switzer-md text-lg">Career Content Sections</h5>
                {career.content.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="flex flex-col gap-4 mt-4">
                        <div className="mb-2 block">
                            <Label
                                htmlFor={`section-${sectionIndex}-heading`}
                                value={`Section ${sectionIndex + 1} Heading`}
                                className="switzer-md"
                            />
                        </div>
                        <TextInput
                            id={`section-${sectionIndex}-heading`}
                            type="text"
                            value={section.heading}
                            onChange={(e) =>
                                handleSectionChange(sectionIndex, "heading", e.target.value)
                            }
                            required
                            shadow
                            className="switzer-r"
                        />
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                            <div key={paragraphIndex} className="flex flex-col gap-2">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor={`section-${sectionIndex}-paragraph-${paragraphIndex}`}
                                        value={`Section ${sectionIndex + 1} Paragraph ${paragraphIndex + 1}`}
                                        className="switzer-md"
                                    />
                                </div>
                                <Textarea
                                    id={`section-${sectionIndex}-paragraph-${paragraphIndex}`}
                                    value={paragraph}
                                    onChange={(e) =>
                                        handleSectionChange(
                                            sectionIndex,
                                            "paragraphs",
                                            e.target.value,
                                            paragraphIndex
                                        )
                                    }
                                    required
                                    shadow
                                    className="switzer-r"
                                />
                                {section.paragraphs.length > 1 && (
                                    <Button
                                        type="button"
                                        color="failure"
                                        onClick={() =>
                                            removeParagraph(sectionIndex, paragraphIndex)
                                        }
                                        className="switzer-r"
                                    >
                                        Remove Paragraph
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => addParagraph(sectionIndex)}
                            className="switzer-r mt-2"
                        >
                            Add Paragraph
                        </Button>
                        <Button
                            type="button"
                            color="failure"
                            onClick={() => removeSection(sectionIndex)}
                            className="switzer-r mt-4"
                        >
                            Remove Section
                        </Button>
                    </div>
                ))}
                <Button
                    type="button"
                    color="primary"
                    onClick={addSection}
                    className="switzer-r mt-4"
                >
                    Add Section
                </Button>
            </div>
            <div className="flex gap-4 mt-4">
                <Button type="submit" className="primary-button-2 switzer-md">
                    {career._id ? "Update Career" : "Create Career"}
                </Button>
                <Button
                    type="button"
                    color="failure"
                    onClick={onCancel}
                    className="switzer-r"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default CareerAdminForm;
