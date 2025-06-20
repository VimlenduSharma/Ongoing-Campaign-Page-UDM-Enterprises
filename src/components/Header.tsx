import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-[#1a1f3d] text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          UDM<br />
          <span className="text-sm">LOGO</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About Us</a>
          <a href="#" className="text-white font-medium border-b-2 border-white pb-1">Ongoing Campaigns</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Brands</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a1f3d] transition-all">
            Login
          </Button>
          <Button className="bg-white text-[#1a1f3d] hover:bg-gray-100 transition-all">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
