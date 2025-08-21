import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { useState } from 'react';
import Logo from '../Logo';
import { categories, navLinks, quickFilters } from '../../constants/sidebar';

const Sidebar = ({ filter }: { filter: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className='sm:hidden fixed top-4 left-0 z-50 bg-noble-black-700 text-stem-green-500 p-2 rounded shadow-lg'
        onClick={() => setOpen(true)}
        aria-label='Open sidebar'
      >
        <FaBars size={22} />
      </button>

      {/* Overlay Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? 'block' : 'hidden'}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-noble-black-700 flex flex-col px-6 py-8 border-r border-noble-black-600 pt-4 lg:pt-1 space-y-8 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} sm:static sm:translate-x-0 sm:flex overflow-y-auto custom-scrollbar min-h-screen`}
      >
        <div className='w-full flex sm:hidden items-start'>
          <div className='flex-1'>
            <Logo />
          </div>
          {/* Close button for mobile */}
          <button
            className='sm:hidden  text-stem-green-500 rounded'
            onClick={() => setOpen(false)}
            aria-label='Close sidebar'
          >
            <FaTimes size={22} />
          </button>
        </div>
        {/* Navigation Links */}
        <nav className='lg:mt-8'>
          <ul className='space-y-2'>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li
                  key={link.param}
                  className={`rounded hover:bg-noble-black-600 cursor-pointer text-sm ${
                    filter === link.param
                      ? 'text-stem-green-600 bg-noble-black-600'
                      : 'text-noble-black-400'
                  }`}
                >
                  <NavLink
                    to={`/?workspace=${link.param}`}
                    className={`flex items-center gap-2  px-3 py-2 `}
                  >
                    <span>{Icon && <Icon />}</span> {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        ;{/* Quick Filters */}
        <div className=''>
          <h4 className='text-base font-semibold text-noble-black-300 mb-2'>
            Quick Filters
          </h4>
          <div className='flex gap-2 flex-col'>
            {quickFilters.map((quickFilter) => (
              <NavLink
                key={quickFilter.param}
                to={`/?workspace=${quickFilter.param}`}
                className={` px-3 py-2 rounded hover:bg-noble-black-600 cursor-pointer text-sm ${
                  filter === quickFilter.param
                    ? 'text-stem-green-600 bg-noble-black-600'
                    : 'text-noble-black-400'
                }`}
              >
                <span>{quickFilter.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        ;{/* Categories */}
        <div>
          <h4 className='text-sm font-semibold text-noble-black-300 mb-2'>
            Categories
          </h4>
          <ul className='space-y-2'>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <li
                  key={category.param}
                  className={`rounded hover:bg-noble-black-600 cursor-pointer text-sm ${
                    filter === category.param
                      ? 'text-stem-green-600 bg-noble-black-600'
                      : 'text-noble-black-400'
                  }`}
                >
                  <NavLink
                    to={`/?workspace=${category.param}`}
                    className={`flex items-center gap-2  px-3 py-2 `}
                  >
                    <span>{Icon && <Icon />}</span> {category.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        ;;
      </aside>
    </>
  );
};

export default Sidebar;
