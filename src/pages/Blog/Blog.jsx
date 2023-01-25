import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip/Chip";
import "./style.css";

const Blog = () => {
  const { title } = useParams();
  // let title2 = title.replace(/\s+/g, "-");
  // console.log(title2);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find(
      (blog) => blog.title.replace(/\s+/g, "-") === title
    );

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div>
      <Link to="/">
        <span>&#8592;</span> Go Back
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Publish {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
