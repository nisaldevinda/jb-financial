import React, { useState, useEffect } from "react";
import BlogAdminForm from "../../admin/BlogAdminForm";
import BlogAdminTable from "../../admin/BlogAdminTable";

interface Blog {
  id: number;
  category: string;
  readTime: number;
  title: string;
  description: string;
  sections: {
    subtitle: string;
    paragraph: string;
    image?: File;
  }[];
}

const BlogAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/blogs.json");
      const blogsData: Blog[] = await response.json();
      setBlogs(blogsData);
    };

    fetchBlogs();
  }, []);

  const handleEdit = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const handleDelete = (id: number) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    // Optionally, save the updated blogs to the JSON file
  };

  const handleAdd = () => {
    const newBlog: Blog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
      category: "",
      readTime: 0,
      title: "",
      description: "",
      sections: [],
    };
    setSelectedBlog(newBlog);
  };

  const handleSave = (blog: Blog) => {
    const updatedBlogs =
      selectedBlog && blogs.some((b) => b.id === blog.id)
        ? blogs.map((b) => (b.id === blog.id ? blog : b))
        : [...blogs, blog];
    setBlogs(updatedBlogs);
    setSelectedBlog(null);
    // Optionally, save the updated blogs to the JSON file
  };

  const handleCancel = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="w-full bg-off-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16 items-start">
      <h3 className="switzer-sb text-xl md:text-4xl">Blogs</h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full">
        <div className="w-full md:w-1/4">
          <div className="overflow-x-auto">
            <BlogAdminTable
              blogs={blogs}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAdd={handleAdd}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 ">
          {selectedBlog && (
            <BlogAdminForm
              blog={selectedBlog}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogAdmin;
