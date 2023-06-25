import { Link, useNavigate } from 'react-router-dom';

import { useSnackbar } from 'notistack';

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

import { useGetUserQuery } from 'redux/services/user';
import { useLogoutMutation } from 'redux/services/api';

interface AccountPopoverProps {
  anchorEl?:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null
    | undefined;
  open: boolean;
  onClose?:
    | ((event?: Record<string, never>, reason?: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
}

const AccountPopover = ({ anchorEl, open, onClose }: AccountPopoverProps) => {
  const { data } = useGetUserQuery();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    onClose?.();

    try {
      await logout().unwrap();
      navigate('/');
    } catch (err) {
      enqueueSnackbar('Oh no, there was an error!', {
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
          <Typography variant="body1">{`${data?.firstName || 'unknown'} ${
            data?.lastName || ''
          }`}</Typography>
          <Typography variant="body2">{data?.email}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <MenuItem component={Link} to={`${data?.publicId}`} onClick={() => onClose?.()}>
          <ListItemIcon>
            <UserCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={`${data?.publicId}/settings`} onClick={() => onClose?.()}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} disabled={isLoading}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Box>
    </Popover>
  );
};

export default AccountPopover;
