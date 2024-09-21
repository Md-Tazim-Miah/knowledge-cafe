import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full h-96 rounded-lg' src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex justify-between items-center'>
                    <div>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="Picture of the author" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold leading-[38.40px]'>{author}</h3>
                        <p className="text-[#111111]/60 text-base font-semibold leading-relaxed">{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-[#111111]/60 text-xl font-medium mr-2'>{reading_time} min read</p>
                    <button className='text-[#111111]/60 text-4xl font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-blue-600 duration-300' onClick={ () => handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-[40px] font-bold leading-[64px] mt-4">{title}</h2>
            <p className="text-[#111111]/60 text-xl font-medium leading-loose">
                {hashtags.map( (hash, idx) => <small key={idx} className='mr-2'><a href="">{hash}</a></small>)}
            </p>
            <button onClick={ () => {handleMarkAsRead(blog.id, blog.reading_time)}} className="text-[#6047ec] text-xl font-semibold underline my-[21px]">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.number.isRequired
};
export default Blog;