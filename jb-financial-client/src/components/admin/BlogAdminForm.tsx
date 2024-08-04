import React, { useState, useEffect } from "react";
import {
  Button,
  Label,
  TextInput,
  Select,
  Textarea,
  FileInput,
} from "flowbite-react";

interface Section {
  subtitle: string;
  paragraph: string;
  image?: File;
}

interface Blog {
  id: number;
  category: string;
  readTime: number;
  title: string;
  description: string;
  sections: Section[];
}

interface BlogAdminFormProps {
  blog: Blog;
  onSave: (blog: Blog) => void;
  onCancel: () => void;
}

const BlogAdminForm: React.FC<BlogAdminFormProps> = ({
  blog: initialBlog,
  onSave,
  onCancel,
}) => {
  const [blog, setBlog] = useState<Blog>(initialBlog);

  useEffect(() => {
    setBlog(initialBlog);
  }, [initialBlog]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setBlog({ ...blog, [id]: value });
  };

  const handleSectionChange = (
    index: number,
    field: string,
    value: string | File
  ) => {
    const updatedSections = [...blog.sections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setBlog({ ...blog, sections: updatedSections });
  };

  const addSection = () => {
    setBlog({
      ...blog,
      sections: [
        ...blog.sections,
        { subtitle: "", paragraph: "", image: undefined },
      ],
    });
  };

  const removeSection = (index: number) => {
    const updatedSections = blog.sections.filter((_, i) => i !== index);
    setBlog({ ...blog, sections: updatedSections });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(blog);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 md:gap-4 p-4 shadow-md rounded-2xl bg-off-white"
    >
      <h4 className="switzer-sb text-base md:text-2xl">Blog Post Editor</h4>
      <p className="switzer-r text-sm text-neutral-mid">
        Welcome back! Please enter your details.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="id" value="Blog ID" className="switzer-md" />
          </div>
          <TextInput
            id="id"
            type="number"
            value={blog.id}
            onChange={handleInputChange}
            required
            shadow
            className="switzer-r"
            readOnly
          />
        </div>
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="category"
              value="Blog Category"
              className="switzer-md"
            />
          </div>
          <Select
            id="category"
            value={blog.category}
            onChange={handleInputChange}
            required
            className="switzer-r"
          >
            <option>Investing</option>
            <option>Finance</option>
            <option>Informational</option>
            <option>Other</option>
          </Select>
        </div>
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="readTime"
              value="Read Time (in minutes)"
              className="switzer-md"
            />
          </div>
          <TextInput
            id="readTime"
            type="number"
            value={blog.readTime}
            onChange={handleInputChange}
            required
            shadow
            className="switzer-r"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="title" value="Blog Title" className="switzer-md" />
          </div>
          <TextInput
            id="title"
            type="text"
            value={blog.title}
            onChange={handleInputChange}
            required
            shadow
            className="switzer-r"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="description"
              value="Blog Description"
              className="switzer-md"
            />
          </div>
          <Textarea
            id="description"
            value={blog.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="switzer-r"
          />
        </div>
      </div>

      {blog.sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-4 bg-white shadow-sm rounded-lg w-full border border-neutral-lighter"
        >
          <h5 className="switzer-r text-sm md:text-lg text-neutral-mid">
            Section:{" "}
            <span className="switzer-sb">
              {" "}
              {section.subtitle || `Section ${index + 1}`}
            </span>
          </h5>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor={`subtitle-${index}`}
                value="Section Title"
                className="switzer-md"
              />
            </div>
            <TextInput
              id={`subtitle-${index}`}
              type="text"
              value={section.subtitle}
              onChange={(e) =>
                handleSectionChange(index, "subtitle", e.target.value)
              }
              required
              shadow
              className="switzer-r"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor={`paragraph-${index}`}
                value="Section Text"
                className="switzer-md"
              />
            </div>
            <Textarea
              id={`paragraph-${index}`}
              value={section.paragraph}
              onChange={(e) =>
                handleSectionChange(index, "paragraph", e.target.value)
              }
              required
              rows={10}
              className="switzer-r"
            />
          </div>
          <div id="fileUpload" className="max-w-md switzer-r">
            <div className="mb-2 block">
              <Label
                htmlFor={`image-${index}`}
                value="Section Image (Optional)"
                className="switzer-md"
              />
            </div>
            <FileInput
              id={`image-${index}`}
              helperText="Add a .jpg image [1156px x 875px]"
              onChange={(e) =>
                handleSectionChange(index, "image", !e.target.files[0])
              }
            />
          </div>
          <Button
            type="button"
            onClick={() => removeSection(index)}
            className="secondary-button-2"
          >
            Remove Section
          </Button>
        </div>
      ))}

      <a href="#" onClick={addSection} className="switzer-sb">
        + Add New Section
      </a>

      <div className="flex justify-end gap-4">
        <Button type="submit" className="primary-button-2">
          Save Blog
        </Button>
        <Button type="button" className="secondary-button-2" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default BlogAdminForm;
