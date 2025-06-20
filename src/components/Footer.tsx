import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">logo</h3>
            <p className="text-gray-600 mb-6">
              We are marketing agency that help you find more talents to develop business
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter email" className="flex-1" />
              <Button className="bg-[#1a1f3d] hover:bg-[#2a2f4d]">
                Subscribe Now
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">COMPANY</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Partner program</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Pricing Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">CONTACT</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Direct Mail Academy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Success stories</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <p className="text-gray-600 mb-2">📧 support@UDM.com</p>
              <p className="text-gray-600">Made with ❤️ UDM</p>
            </div>
            
            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm">Login</Button>
              <Button className="bg-[#1a1f3d] hover:bg-[#2a2f4d]" size="sm">
                Try it for free
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex gap-4 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Twitter className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm">A trusted market agency</p>
            <p className="text-gray-500 text-sm mt-2">© 2024 UDM, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
