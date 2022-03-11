import React from 'react';
import { Link } from 'react-router-dom';

import { User } from 'types/user';

import UserDropdown from 'components/dropdowns/UserDropdown';

interface LoggedInProps {
  user: User | null;
}

const LoggedIn = ({ user }: LoggedInProps) => {
  if (user) {
    return (
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li className="flex items-center">
          <Link
            to="/"
            className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          >
            Home
          </Link>
        </li>

        <li className="flex items-center">
          <Link
            to="/editor"
            className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          >
            <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{' '}
            New Post
          </Link>
        </li>

        <li className="flex items-center">
          <UserDropdown user={user} />
        </li>
      </ul>
    );
  }

  return null;
};

export default LoggedIn;
