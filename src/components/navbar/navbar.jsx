function Navbar() {
    return (
      <nav className="sticky top-0 z-100 flex items-center justify-between p-4 bg-[#0d0d0d] text-white">
  
        <div className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-400 font-sans transition duration-300">Abhinav Bansal</a>
        </div>
  
       
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 text-lg">
            <li><a href="/" className="hover:text-gray-400 transition duration-300">Home</a></li>
            <li><a href="about" className="hover:text-gray-400 transition duration-300">About</a></li>
            <li><a href="projects" className="hover:text-gray-400 transition duration-300">Projects</a></li>
            <li><a href="contact" className="hover:text-gray-400 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
  export default Navbar
  