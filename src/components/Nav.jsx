import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const classNames = (...classes) => {
  return twMerge(classes);
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  return (
    <nav className="bg-tarnsparent backdrop-blur-lg px-4 sm:px-12 py-2.5 sticky w-full z-20 top-0 left-0 shadow-md ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className=""
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="text-4xl text-maroon absolute right-8 top-5 cursor-pointer md:hidden" />
            ) : (
              <FaBars className="text-4xl text-maroon absolute right-8 top-5 cursor-pointer md:hidden " />
            )}
          </button>
          <Link to="/">
            <img
              src="https://cdn.discordapp.com/attachments/1054797763348541583/1056934597612548146/Marvel_Logo.svg.png"
              alt="logo"
              class="mr-3 h-12"
            />
          </Link>
          <div
            className={[
              'items-center justify-between md:flex md:w-auto md:order-1',
              open ? 'flex' : 'hidden',
            ].join(' ')}
          >
            <ul
              className={[
                'text-maroon font-bold md:text-xl bg-gradient-to-l from-orange to-whitish md:bg-transparent md:bg-none text-2xl md:flex flex-col md:flex-row md:w-auto md:h-auto gap-x-5 h-screen sm:w-72 w-56',
                open
                  ? 'md:shadow-none shadow-xl md:relative absolute top-0 left-0 md:p-0 px-5 pt-8'
                  : 'left-[-700px] top-[96px] hidden',
              ].join(' ')}
            >
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-orange duration-300 ',
                      isActive ? 'underline text-reddish' : ''
                    )
                  }
                  to="/"
                >
                  Characters
                </NavLink>
              </li>
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-orange duration-300 ',
                      isActive ? 'underline text-reddish ' : ''
                    )
                  }
                  to="comics"
                >
                  Comics
                </NavLink>
              </li>
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-orange duration-300 ',
                      isActive ? 'underline text-reddish ' : ''
                    )
                  }
                  to="events"
                >
                  Events
                </NavLink>
              </li>
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-orange duration-300 ',
                      isActive ? 'underline text-reddish ' : ''
                    )
                  }
                  to="stories"
                >
                  Stories
                </NavLink>
              </li>
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-orange duration-300 ',
                      isActive ? 'underline text-reddish ' : ''
                    )
                  }
                  to="series"
                >
                  Series
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
