
import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">TravelMart</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-primary transition-colors">Destinations</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
