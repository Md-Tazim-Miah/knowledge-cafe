import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 w-full">
            <div className='bg-[#111111]/5 rounded-lg mb-4'>
                <h3 className='text-2xl font-bold text-blue-700 p-4'>Reading Time: {readingTime} min</h3>
            </div>
            <div className='h-full bg-[#111111]/5 rounded-lg'>
                <h1 className="text-2xl font-bold p-4">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};
export default Bookmarks;