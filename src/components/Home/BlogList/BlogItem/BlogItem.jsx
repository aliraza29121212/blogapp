import React from "react";
import "./style.css";
import Chip from "../../../common/Chip/Chip";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  let blognew = title.replace(/\s+/g, "-");
  console.log(blognew);
  return (
    <div className="blogItem-wrap">
      <img src={cover} alt="cover" className="blogItem-cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>

      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>

        <Link to={`/blog/${blognew}`}>👉</Link>
      </footer>
    </div>
  );
};

export default BlogItem;
