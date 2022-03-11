import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/user';

export interface LoggedOutProps {
  user: User | null;
}

const LoggedOut = ({ user }: LoggedOutProps) => {
  if (!user) {
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
            to="/login"
            className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          >
            Sign in
          </Link>
        </li>

        <li className="flex items-center">
          <Link
            to="/register"
            className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          >
            Sign up
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

export default LoggedOut;
