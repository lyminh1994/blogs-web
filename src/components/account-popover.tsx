import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
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
import { Logout, Settings } from '@mui/icons-material';

import { useAccount } from 'hooks/account';
import { useSignOutMutation } from 'redux/services/api';
import UserCircle from 'icons/UserCircle';

interface AccountPopoverProps {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  open: boolean;
  onClose?:
    | ((event?: Record<string, never>, reason?: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
}

const AccountPopover = ({ anchorEl, open, onClose }: AccountPopoverProps) => {
  const { account } = useAccount();
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
        <Avatar
          sx={{
            height: 40,
            width: 40,
          }}
          src={account?.profileImage || 'https://i.pravatar.cc/100'}
        ></Avatar>
        <Box sx={{ ml: 1 }}>
          <Typography variant="body1">{`${account?.firstName} ${account?.lastName}`}</Typography>
          <Typography variant="body2">Developer</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <MenuItem component={Link} to={`${account?.publicId}`} onClick={() => onClose?.()}>
          <ListItemIcon>
            <UserCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={`${account?.publicId}/setting`} onClick={() => onClose?.()}>
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
