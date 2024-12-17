import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogs.json";
import './SingleBlog.css';

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.slug === slug);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="single-blog">
      <img src={blog.cover} alt={blog.title} className="single-blog-cover" />
      <div className="single-blog-content">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <p><strong>Published on:</strong> {blog.date}</p>
      </div>
    </div>
  );
};

export default SingleBlog;