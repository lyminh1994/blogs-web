import { useRef, useState } from 'react';
import { Avatar } from '@mui/material';
import UserCircleIcon from 'icons/UserCircle';

import { useGetUserQuery } from 'redux/services/user';

import UserPopover from 'components/user/popover';

const AuthHeader = () => {
  const { data } = useGetUserQuery();
  const popoverRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <>
      <Avatar
        onClick={() => setOpenPopover(true)}
        ref={popoverRef}
        sx={{
          cursor: 'pointer',
          height: 40,
          width: 40,
          ml: 2,
        }}
        src={data?.profileImage}
        alt={data?.profileImage}
      >
        <UserCircleIcon fontSize="small" />
      </Avatar>
      <UserPopover
        anchorEl={popoverRef.current}
        open={openPopover}
        onClose={() => setOpenPopover(false)}
      />
    </>
  );
};

export default AuthHeader;
