import { Link } from 'react-router-dom';

import { Button } from '../components/ui/button';

import { HiOutlineSearch } from 'react-icons/hi';
import Cart from '../components/Cart';


export default function Navbar() {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-black/30">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link className='text-blue' to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">All Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout"></Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
