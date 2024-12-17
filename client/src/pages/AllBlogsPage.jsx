import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import AllBlogs from '../components/blog/AllBlogs';

const BlogsPage = () => {
    return (
        <div>
            <div className="overlay-image"></div>
            <Header />
            <AllBlogs />
            <Up />
            <Footer />
        </div>
    );
};

export default BlogsPage;