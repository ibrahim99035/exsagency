import React from "react";
import { Link } from "react-router-dom";
import blogData from "./blogs.json";
import './BlogCards.css';

const BlogCards = () => {
  return (
    <div className="blog-cards-container">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-cards-wrapper">
        {blogData.slice(0, 6).map((blog) => (
          <div className="blog-card" key={blog.slug}>
            <img src={blog.cover} alt={blog.title} className="blog-card-cover" />
            <div className="blog-card-body">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-content">{blog.content.substring(0, 120)}...</p>
              <Link to={`/blog/${blog.slug}`} className="read-more-link" target="_blank">Read more</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="all-blogs-button-container">
        <Link to="/blogs" className="all-blogs-button" target="_blank">View All Blogs</Link>
      </div>
    </div>
  );
};

export default BlogCards;