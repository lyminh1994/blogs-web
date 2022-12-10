import { Link, useNavigate } from 'react-router-dom';
import { useSignOutMutation } from 'redux/services/auth';
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useAuth } from 'hooks/auth';
import { Logout, Settings } from '@mui/icons-material';
import UserCircle from 'icons/user-circle';

interface AccountPopoverProps {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  open: boolean;
  onClose?:
    | ((event?: Record<string, never>, reason?: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
}

const AccountPopover = ({ anchorEl, open, onClose }: AccountPopoverProps) => {
  const { user } = useAuth();
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
        autoHideDuration: 1000,
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
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
        <Avatar
          sx={{
            height: 40,
            width: 40,
          }}
          src={user?.profileImage || 'https://i.pravatar.cc/100'}
        ></Avatar>
        <Box sx={{ ml: 1 }}>
          <Typography variant="body1">{`${user?.firstName} ${user?.lastName}`}</Typography>
          <Typography variant="body2">Developer</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <MenuItem component={Link} to={`${user?.publicId}`} onClick={() => onClose?.()}>
          <ListItemIcon>
            <UserCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={`${user?.publicId}`} onClick={() => onClose?.()}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSignOut} disabled={isLoading}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      </Box>
    </Popover>
  );
};

export default AccountPopover;
