import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import BlogList from "../../components/Home/BlogList/BlogList";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import { blogList } from "../../config/data";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  console.log(searchKey);

  // Search submit
  // const handleSearchBar = (e) => {
  //   e.preventDefault();
  //   handleSearchResults();
  // };

  // Search for blog by category
  // let updatedList = [...blogList];

  const handleSearchResults = (e) => {
    // const allBlogs = blogList;
    // const filteredBlogs = allBlogs.filter((blog) =>
    //   blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    // );
    // setBlogs(filteredBlogs);
    // blogs = blogs.filter(
    //   (item) => item.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1
    // );
    // setBlogs(blogs);
    setSearchKey(e.target.value);
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
        // formSubmit={handleSearchResults}
        handleSearchKey={handleSearchResults}
      />
      {/* {Blog List & Empty List} */}
      {!blogs.length ? (
        <EmptyList />
      ) : (
        <BlogList blogs={blogList} searchTerm={searchKey} />
      )}
    </div>
  );
};

export default Home;
