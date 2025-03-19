import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-6 sm:px-12 px-6 flex justify-between items-center  shadow-lg">
      <nav className="flex w-full screen-max-width items-center">
        <img 
          src={appleImg} 
          alt="Apple" 
          width={16} 
          height={20} 
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300" 
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div 
              key={nav} 
              className="px-6 text-sm font-medium cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {nav}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8 max-sm:justify-end max-sm:flex-1">
          <img 
            src={searchImg} 
            alt="search" 
            width={20} 
            height={20} 
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300" 
          />
          <img 
            src={bagImg} 
            alt="bag" 
            width={20} 
            height={20} 
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300" 
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar