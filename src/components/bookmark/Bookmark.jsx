import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='mb-4 px-4'>
            <h3 className='text-xl p-4 bg-white rounded-lg'>{bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};
export default Bookmark;