import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-700 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link className='text-white text-2xl font-bold' href='/'>
            React Image File Resizer
          </Link>
        </div>
        <div className='border-red-600'>
          <Link className='text-white mr-4 font-bold text-lg hover:text-cyan-600' href='/image-compresser'>
            Comprimir Imagens
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
