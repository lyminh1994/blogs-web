import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/user';

import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

export interface HeaderProps {
  appName?: string;
  user: User | null;
}

const Header = ({ appName, user }: HeaderProps) => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              {appName}
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <LoggedOut user={user} />

            <LoggedIn user={user} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
