import React from "react";
import BlogItem from "../../Home/BlogList/BlogItem/BlogItem";
import "./style.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
