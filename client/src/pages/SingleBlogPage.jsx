import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import SingleBlog from '../components/blog/SingleBlog';

const SingleBlogPage = () => {
    return (
        <div>
            <div className="overlay-image"></div>
            <Header />
            <SingleBlog />
            <Up />
            <Footer />
        </div>
    );
};

export default SingleBlogPage;