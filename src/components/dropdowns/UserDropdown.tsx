import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { User } from 'types/user';
import { useAppDispatch } from 'store/hooks';
import { logout } from 'store/auth/authSlice';

interface UserDropdownProps {
  user: User | null;
}

const UserDropdown = ({ user }: UserDropdownProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={user?.image}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link
          to={`/@${user?.username}`}
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
        >
          Profile
        </Link>
        <Link
          to="/settings"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
        >
          Settings
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
