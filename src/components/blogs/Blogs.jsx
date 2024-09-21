import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('Blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {blogs.map( (blog, idx) => <Blog 
            key={idx} 
            blog={blog} 
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}></Blog>)}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.number.isRequired
};
export default Blogs;