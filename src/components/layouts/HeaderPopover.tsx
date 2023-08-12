import { useSnackbar } from 'notistack';

import { Link, useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import UserCircleIcon from 'icons/UserCircle';
import type { PopoverVirtualElement } from '@mui/material';
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { useLogoutMutation } from 'redux/services/api';

interface HeaderPopoverProps {
  anchorEl?:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null;
  open: boolean;
  onClose?: (event?: Record<string, never>, reason?: 'backdropClick' | 'escapeKeyDown') => void;
}

const HeaderPopover = ({ anchorEl, open, onClose }: HeaderPopoverProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [logoutMutation, { isSuccess, isError, error }] = useLogoutMutation();

  const handleLogout = async () => {
    onClose?.();

    await logoutMutation().unwrap();
    if (isSuccess) {
      navigate('/');
    }

    if (isError) {
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
          <Typography variant="body1">{`${user?.firstName} ${user?.lastName}`}</Typography>
          <Typography variant="body2">{user?.email}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <MenuItem component={Link} to="/account" onClick={() => onClose?.()}>
          <ListItemIcon>
            <UserCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/account/settings" onClick={() => onClose?.()}>
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

export default HeaderPopover;
