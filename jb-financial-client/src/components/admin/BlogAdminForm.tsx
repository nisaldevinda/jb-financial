import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Select, Textarea, FileInput } from "flowbite-react";

interface BlogContent {
  subtitle: string;
  paragraph: string;
}

interface Blog {
  _id?: { $oid: string };
  category: string;
  duration: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  content: BlogContent[];
}

interface BlogAdminFormProps {
  blog: Blog;
  onSave: (blog: Blog) => void;
  onCancel: () => void;
}

const BlogAdminForm: React.FC<BlogAdminFormProps> = ({ blog: initialBlog, onSave, onCancel }) => {
  const [blog, setBlog] = useState<Blog>(initialBlog);

  useEffect(() => {
    setBlog(initialBlog);
  }, [initialBlog]);

  const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setBlog({ ...blog, [id]: value });
  };

  const handleSectionChange = (index: number, field: string, value: string | File) => {
    const updatedSections = [...blog.content];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setBlog({ ...blog, content: updatedSections });
  };

  const addSection = () => {
    setBlog({
      ...blog,
      content: [...blog.content, { subtitle: "", paragraph: "" }],
    });
  };

  const removeSection = (index: number) => {
    const updatedSections = blog.content.filter((_, i) => i !== index);
    setBlog({ ...blog, content: updatedSections });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        {blog._id && blog._id.$oid && (
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="mb-2 block">
                  <Label htmlFor="_id" value="Blog ID" className="switzer-md" />
                </div>
                <TextInput
                    id="_id"
                    type="text"
                    value={blog._id.$oid}
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
              <Label htmlFor="category" value="Blog Category" className="switzer-md" />
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
              <Label htmlFor="duration" value="Read Time (in minutes)" className="switzer-md" />
            </div>
            <TextInput
                id="duration"
                type="text"
                value={blog.duration}
                onChange={handleInputChange}
                required
                shadow
                className="switzer-r"
            />
          </div>
        </div>
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
        <div className="mb-2 block">
          <Label htmlFor="description" value="Blog Description" className="switzer-md" />
        </div>
        <Textarea
            id="description"
            value={blog.description}
            onChange={handleInputChange}
            required
            shadow
            className="switzer-r"
        />
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Image URL" className="switzer-md" />
        </div>
        <TextInput
            id="imageUrl"
            type="text"
            value={blog.imageUrl}
            onChange={handleInputChange}
            required
            shadow
            className="switzer-r"
        />
        <div className="mb-2 block">
          <Label htmlFor="link" value="Blog Link" className="switzer-md" />
        </div>
        <TextInput
            id="link"
            type="text"
            value={blog.link}
            onChange={handleInputChange}
            required
            shadow
            className="switzer-r"
        />
        <div>
          <h5 className="switzer-md text-lg">Blog Content Sections</h5>
          {blog.content.map((section, index) => (
              <div key={index} className="flex flex-col gap-4 mt-4">
                <div className="mb-2 block">
                  <Label
                      htmlFor={`section-${index}-subtitle`}
                      value={`Section ${index + 1} Subtitle`}
                      className="switzer-md"
                  />
                </div>
                <TextInput
                    id={`section-${index}-subtitle`}
                    type="text"
                    value={section.subtitle}
                    onChange={(e) => handleSectionChange(index, "subtitle", e.target.value)}
                    required
                    shadow
                    className="switzer-r"
                />
                <div className="mb-2 block">
                  <Label
                      htmlFor={`section-${index}-paragraph`}
                      value={`Section ${index + 1} Paragraph`}
                      className="switzer-md"
                  />
                </div>
                <Textarea
                    id={`section-${index}-paragraph`}
                    value={section.paragraph}
                    onChange={(e) => handleSectionChange(index, "paragraph", e.target.value)}
                    required
                    shadow
                    className="switzer-r"
                />
                <Button
                    type="button"
                    color="failure"
                    onClick={() => removeSection(index)}
                    className="switzer-r"
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
            Save Blog
          </Button>
          <Button type="button" color="failure" onClick={onCancel} className="switzer-r">
            Cancel
          </Button>
        </div>
      </form>
  );
};

export default BlogAdminForm;
