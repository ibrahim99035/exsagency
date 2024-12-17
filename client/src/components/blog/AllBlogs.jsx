import React from "react";
import { Link } from "react-router-dom";
import blogData from "./blogs.json";
import './AllBlogs.css';

const AllBlogs = () => {
  return (
    <div className="all-blogs-container">
      <h1 className="blogs-title">All Blog Posts</h1>
      {blogData.map((blog) => (
        <div className="blog-post" key={blog.slug}>
          <h3>{blog.title}</h3>
          <p>{blog.content.substring(0, 200)}...</p>
          <Link to={`/blog/${blog.slug}`} className="read-more-link" target="_blank">Read full post</Link>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
