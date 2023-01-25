import React from "react";
import BlogItem from "../../Home/BlogList/BlogItem/BlogItem";
import "./style.css";

const BlogList = ({ blogs,searchTerm }) => {
  return (
    <div className="blogList-wrap">
      {blogs.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
      {/* {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))} */}
    </div>
  );
};

export default BlogList;
