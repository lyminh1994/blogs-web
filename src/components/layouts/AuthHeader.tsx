import { useRef, useState } from 'react';
import { Avatar } from '@mui/material';
import UserCircleIcon from 'icons/UserCircle';

import UserPopover from 'components/profile/Popover';
import { useAuth } from 'hooks/useAuth';

const AuthHeader = () => {
  const {
    auth: { user },
  } = useAuth();
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
        src={user?.image}
        alt={user?.image}
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
