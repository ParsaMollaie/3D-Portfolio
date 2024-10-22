import { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = () => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={() => {}}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen((prev) => !prev);
  };

  const closeMenu = () => setIsopen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 hover:text-white transition-colors font-bold text-xl "
          >
            Parsa
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white sm:hidden flex focus:outline-none"
            aria-label="Toggle menu"
          >
            <img
              src={isopen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isopen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
