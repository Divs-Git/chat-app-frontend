import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { SetSideDrawerType, ToggleSideDrawer } from '../../redux/slices/app';
import { faker } from '@faker-js/faker';
import { AntSwitch } from '../global/AntSwitch';
import { forwardRef, useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface DialogProps {
  open: boolean;
  handleClose: () => void;
}

function BlockDialog({ open, handleClose }: DialogProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>Block This Contact</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          Are you sure want to block this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}

function DeleteDialog({ open, handleClose }: DialogProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>Delete this chat</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          Are you sure want to delete this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Contact() {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const [openBlockDialog, setOpenBlockDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  function handleBlockDialogClose() {
    setOpenBlockDialog(false);
  }

  function handleDeleteDialogClose() {
    setOpenDeleteDialog(false);
  }

  return (
    <Box sx={{ width: '360px', height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/* {Header} */}
        <Box
          sx={{
            boxShadow: '0 0 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Stack
            direction={'row'}
            sx={{ height: '100%' }}
            p={2}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant='subtitle2'>Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSideDrawer())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* {Body} */}
        <Stack
          height={'100%'}
          p={3}
          spacing={2}
          position={'relative'}
          flexGrow={1}
          sx={{ overflowY: 'scroll' }}
        >
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.person.fullName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant='subtitle1' fontWeight={600}>
                {faker.person.fullName()}
              </Typography>
              <Typography variant='body2' fontWeight={500}>
                {faker.phone.number()}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
          >
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant='overline'>Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant='overline'>Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant='subtitle1' fontWeight={600}>
              About
            </Typography>
            <Typography variant='body2'>{faker.lorem.paragraph()}</Typography>
          </Stack>
          <Divider />
          <Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Typography variant='subtitle1'>Media, Links & Docs</Typography>
              <Button
                onClick={() => dispatch(SetSideDrawerType('SHARED'))}
                endIcon={<CaretRight />}
              >
                401
              </Button>
            </Stack>
            <Stack
              direction={'row'}
              spacing={2}
              alignItems={'center'}
              paddingBottom={2}
            >
              {[1, 2, 3, 4].map((el, index) => (
                <Box key={index}>
                  <img
                    src={faker.image.url()}
                    alt={faker.name.fullName()}
                    width={64}
                    height={64}
                  />
                </Box>
              ))}
            </Stack>
            <Divider />
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Star size={21} />
              <Typography variant='subtitle2'>Starred Messages</Typography>
            </Stack>
            <IconButton onClick={() => dispatch(SetSideDrawerType('STARRED'))}>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Bell size={21} />
              <Typography variant='subtitle2'>Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography variant='subtitle1'>1 group in common</Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
            <Stack>
              <Typography variant='subtitle2'>Company</Typography>
              <Typography variant='caption'>Owl, Monkey, You</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button
              onClick={() => {
                setOpenBlockDialog(true);
              }}
              startIcon={<Prohibit />}
              fullWidth
              variant='outlined'
            >
              Block
            </Button>
            <Button
              onClick={() => {
                setOpenDeleteDialog(true);
              }}
              startIcon={<Trash />}
              fullWidth
              variant='outlined'
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlockDialog && (
        <BlockDialog
          open={openBlockDialog}
          handleClose={handleBlockDialogClose}
        />
      )}
      {openDeleteDialog && (
        <DeleteDialog
          open={openDeleteDialog}
          handleClose={handleDeleteDialogClose}
        />
      )}
    </Box>
  );
}
