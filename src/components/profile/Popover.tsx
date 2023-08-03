import { useSnackbar } from 'notistack';

import { Link, useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import UserCircleIcon from 'icons/UserCircle';
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from '@mui/material';
import type { PopoverVirtualElement } from '@mui/material';

import { logout } from 'redux/features/authSlice';
import { useAppDispatch } from 'hooks/redux';
import { useAuth } from 'hooks/useAuth';

interface AccountPopoverProps {
  anchorEl?:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null;
  open: boolean;
  onClose?: (event?: Record<string, never>, reason?: 'backdropClick' | 'escapeKeyDown') => void;
}

const ProfilePopover = ({ anchorEl, open, onClose }: AccountPopoverProps) => {
  const dispatch = useAppDispatch();
  const {
    auth: { user },
  } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    onClose?.();

    try {
      dispatch(logout());
      navigate('/');
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error, null, 2), {
        variant: 'error',
      });
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: '300px' } } }}
    >
      <Box
        sx={{
          p: 2,
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Box>
          <Typography variant="body1">{user?.username}</Typography>
          <Typography variant="body2">{user?.email}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <MenuItem component={Link} to={`/account/${user?.username}`} onClick={() => onClose?.()}>
          <ListItemIcon>
            <UserCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          to={`/account/${user?.username}/settings`}
          onClick={() => onClose?.()}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Box>
    </Popover>
  );
};

export default ProfilePopover;
