import { Link } from "react-router-dom";

const  Header = () => {

  const handleFAQ = () =>{
    window.location.href = "/FAQ"
  }

  return (
    <header className="bg-black/50  py-5 w-full flex justify-around items-center text-white sticky top-0 backdrop-blur-md mb-10">

      <a href="/" className="flex justify-center items-center text-2xl "><span className="py-2 text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">She </span>&nbsp;Search</a>

      <ul className="flex justify-center items-center gap-20">
        <li className="text-white hover:text-purple-700  cursor-pointer drop-shadow-lg">
          About Us
        </li>
        <li className="text-white hover:text-purple-700  cursor-pointer drop-shadow-lg">
          Testimonials
        </li>
        <a href="#faq"className="text-white hover:text-purple-700  cursor-pointer drop-shadow-lg" onClick={handleFAQ}>
          FAQ
        </a>
      </ul>

      {/* Get Started button */}
      <Link to="/categories">
        <button className="bg-pink-600 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950 drop-shadow-lg">
          Get Started
        </button>
      </Link>
    </header>
  );
};

export default Header;
