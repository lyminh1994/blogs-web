import { useRef, useState } from 'react';
import { Avatar } from '@mui/material';
import UserCircleIcon from 'icons/UserCircle';

import HeaderPopover from 'components/layouts/HeaderPopover';

import { useAuth } from 'hooks/useAuth';

const AuthHeader = () => {
  const popoverRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);

  const { user } = useAuth();

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
        src={user?.profileImage}
        alt={user?.profileImage}
      >
        <UserCircleIcon fontSize="small" />
      </Avatar>
      <HeaderPopover
        anchorEl={popoverRef.current}
        open={openPopover}
        onClose={() => setOpenPopover(false)}
      />
    </>
  );
};

export default AuthHeader;
