import React, { useState, useEffect } from "react";
import BlogAdminForm from "../../admin/BlogAdminForm";
import BlogAdminTable from "../../admin/BlogAdminTable";

interface BlogContent {
  subtitle: string;
  paragraph: string;
}

interface Blog {
  _id: { $oid: string };
  category: string;
  duration: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  content: BlogContent[];
}

const BlogAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:5000/api/blogs");
      const blogsData: Blog[] = await response.json();
      setBlogs(blogsData);
    };

    fetchBlogs();
  }, []);

  const handleEdit = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedBlogs = blogs.filter((blog) => blog._id.$oid !== id);
        setBlogs(updatedBlogs);
      } else {
        console.error('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleAdd = () => {
    const newBlog: Blog = {
      _id: { $oid: "" },
      category: "",
      duration: "",
      title: "",
      description: "",
      imageUrl: "",
      link: "",
      content: []
    };
    setSelectedBlog(newBlog);
  };

  const handleSave = (blog: Blog) => {
    const updatedBlogs =
        selectedBlog && blogs.some((b) => b._id.$oid === blog._id.$oid)
            ? blogs.map((b) => (b._id.$oid === blog._id.$oid ? blog : b))
            : [...blogs, blog];
    setBlogs(updatedBlogs);
    setSelectedBlog(null);
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
                  onDelete={(id) => handleDelete(id)}
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