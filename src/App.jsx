import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <div className='container mx-auto md:px-24'>
        <Header></Header>
      </div>
      <main className='container mx-auto md:px-24 md:flex flex-nowrap gap-4'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}></Bookmarks>
      </main>
      <footer>
        <Footer></Footer>
      </footer>  
    </>
  )
}

export default App;
