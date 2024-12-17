import React from "react";
import { Link } from "react-router-dom";
import blogData from "./blogs.json";
import "./AllBlogs.css";

const AllBlogs = () => {
  return (
    <div className="all-blogs-container">
      <h2 className="all-blogs-title">All Blog Posts</h2>
      <div className="all-blogs-wrapper">
        {blogData.map((blog) => (
          <div className="all-blog-card" key={blog.slug}>
            <img src={blog.cover} alt={blog.title} className="all-blog-card-cover" />
            <div className="all-blog-card-body">
              <h3 className="all-blog-card-title">{blog.title}</h3>
              <p className="all-blog-card-content">
                {blog.content.substring(0, 150)}...
              </p>
              <Link to={`/blog/${blog.slug}`} className="read-more-link" target="_blank">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;