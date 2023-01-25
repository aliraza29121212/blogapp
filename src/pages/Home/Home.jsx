import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import BlogList from "../../components/Home/BlogList/BlogList";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import { blogList } from "../../config/data";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    console.log(e.target.val);

    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.includes((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* {Page Header} */}
      <Header />
      {/* {Search Bar} */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* {Blog List & Empty List} */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogList} />}
    </div>
  );
};

export default Home;
