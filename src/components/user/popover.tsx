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

import { useGetUserQuery } from 'redux/services/user';
import { useSignOutMutation } from 'redux/services/api';

interface UserPopoverProps {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  open: boolean;
  onClose?:
    | ((event?: Record<string, never>, reason?: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
}

const UserPopover = ({ anchorEl, open, onClose }: UserPopoverProps) => {
  const { data } = useGetUserQuery();
  const navigate = useNavigate();
  const [signOut, { isLoading }] = useSignOutMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleSignOut = async () => {
    onClose?.();

    try {
      await signOut().unwrap();
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
      PaperProps={{
        sx: { width: '300px' },
      }}
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
        <MenuItem onClick={handleSignOut} disabled={isLoading}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      </Box>
    </Popover>
  );
};

export default UserPopover;
