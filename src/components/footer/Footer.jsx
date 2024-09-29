
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
          <p className="text-xs">&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19.2 3.3c-1.8-.3-3.3-.4-4.8.4-1.5.9-2.4 2.4-2.4 4.3v.7c-3.4.2-6.7-1.6-8.8-4.4-.9 1.6-.7 3.3.5 4.5-.7 0-1.5-.2-2-.6v.1c0 1.5.8 2.8 2 3.3-.6.2-1.3.1-1.8-.1.6 1.8 2.2 3.1 4 3.1-1.5 1.1-3.3 1.6-5.1 1.4 1.7 1.2 3.6 1.8 5.6 1.8 6.7 0 10.6-5.6 10.4-10.6.7-.5 1.4-1.2 1.9-2-.5.2-1.2.4-1.8.5.7-.5 1.2-1.1 1.4-1.8z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 8.1 6.7 9.4-.1-.8-.1-1.7.2-2.5.3-.9 2-5.8 2-5.8s-.5-.1-.5-.7c0-.7.4-1.2 1-1.2s1.3.4 1.3 1.1c0 .7-.4 1.3-.4 1.3s.3 1.6.4 2.4c.2.8.8 1.2 1.5 1.2 1.9 0 3.4-1.7 3.4-3.8 0-2.1-1.5-3.6-3.7-3.6-2.4 0-3.5 1.8-3.5 3.7 0 .8.3 1.5.8 2-.1.4-.4 1.5-.4 1.5s-1.7-.7-2.5-2.8c-.4-1.1-.7-2.2-.7-3.3 0-2.7 1.8-4.6 5.2-4.6 2.7 0 4.8 1.9 4.8 4.4 0 2.7-1.7 4.9-4 4.9-1 .1-1.9-.6-2.2-1.3 0 0-.6 2.3-.8 2.9-.3.9-1 2.1-1.5 2.9 1.4.4 2.9.6 4.3.6 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.5 5.6c-.8.4-1.7.6-2.6.8.9-.5 1.6-1.4 2-2.4-.8.5-1.8.8-2.7 1C18.4 3.6 17.3 3 16 3c-2.3 0-4.2 1.9-4.2 4.2 0 .3 0 .6.1.8C8.6 7.8 5.6 6.3 3.4 4c-.3.5-.5 1.1-.5 1.8 0 1.4.7 2.6 1.9 3.4-.7 0-1.4-.2-2-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2.1 2.7 3.9 2.7-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-.8-.1 1.8 1.1 3.9 1.8 6.2 1.8 7.5 0 11.7-6.2 11.7-11.7 0-.2 0-.4 0-.6.8-.5 1.6-1.2 2.2-2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;