
import logo from '@/assets/images/technet-logo-white.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-8 md:mb-0">
          {/* <img className="h-10" src={logo} alt="Logo" /> */}
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Discover</h4>
            <ul className="space-y-2">
              <li>Upcoming</li>
              <li>Shipping</li>
              <li>How it works</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <ul className="space-y-2">
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-2">
              <li>List your gear</li>
              <li>Contact team</li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 text-3xl">
            <RiFacebookBoxFill />
            <RiInstagramLine />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-700 my-8 mx-6" />
      <div className="container mx-auto flex justify-between items-center px-6">
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Terms & Conditions</a>
        </nav>
        <p className="text-gray-400">&#169; quirky {year}</p>
      </div>
    </footer>
  );
}
