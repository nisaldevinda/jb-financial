import React, {useState} from "react";
import { Table, Button, Pagination } from "flowbite-react";

interface Blog {
  id: number;
  title: string;
  // Add other fields as needed
}

interface BlogAdminTableProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

const BlogAdminTable: React.FC<BlogAdminTableProps> = ({
                                                         blogs,
                                                         onEdit,
                                                         onDelete,
                                                         onAdd,
                                                       }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  // Sort blogs by id in descending order
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  // Calculate the current entries to display
  const indexOfLastBlog = currentPage * entriesPerPage;
  const indexOfFirstBlog = indexOfLastBlog - entriesPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate total pages
  const totalPages = Math.ceil(sortedBlogs.length / entriesPerPage);

  return (
      <div>
        <Button onClick={onAdd} className="mt-4 switzer-sb text-neutral-dark">
          + Add New Blog
        </Button>
        <Table className="switzer-r" striped>
          <Table.Head className="w-full">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentBlogs.map((blog) => (
                <Table.Row
                    key={blog.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {blog.id}
                  </Table.Cell>
                  <Table.Cell>{blog.title}</Table.Cell>
                  <Table.Cell className="flex space-x-2">
                    <Button
                        onClick={() => onEdit(blog)}
                        size="xs"
                        className="mr-2"
                        color="success"
                        pill
                    >
                      Edit
                    </Button>
                    <Button
                        onClick={() => onDelete(blog.id)}
                        size="xs"
                        color="failure"
                        pill
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
            className="mt-4 switzer-r text-xs"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
      </div>
  );
};

export default BlogAdminTable;
