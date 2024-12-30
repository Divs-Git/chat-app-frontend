import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement } from 'react';

const list = [
  {
    key: 0,
    title: 'Mark as unread',
    combination: ['Cmd', 'Shift', 'U'],
  },
  {
    key: 1,
    title: 'Mute',
    combination: ['Cmd', 'Shift', 'M'],
  },
  {
    key: 2,
    title: 'Archive Chat',
    combination: ['Cmd', 'Shift', 'E'],
  },
  {
    key: 3,
    title: 'Delete Chat',
    combination: ['Cmd', 'Shift', 'D'],
  },
  {
    key: 4,
    title: 'Pin Chat',
    combination: ['Cmd', 'Shift', 'P'],
  },
  {
    key: 5,
    title: 'Search',
    combination: ['Cmd', 'F'],
  },
  {
    key: 6,
    title: 'Search Chat',
    combination: ['Cmd', 'Shift', 'F'],
  },
  {
    key: 7,
    title: 'Next Chat',
    combination: ['Cmd', 'N'],
  },
  {
    key: 8,
    title: 'Next Step',
    combination: ['Ctrl', 'Tab'],
  },
  {
    key: 9,
    title: 'Previous Step',
    combination: ['Ctrl', 'Shift', 'Tab'],
  },
  {
    key: 10,
    title: 'New Group',
    combination: ['Cmd', 'Shift', 'N'],
  },
  {
    key: 11,
    title: 'Profile & About',
    combination: ['Cmd', 'P'],
  },
  {
    key: 12,
    title: 'Increase speed of voice message',
    combination: ['Shift', '.'],
  },
  {
    key: 13,
    title: 'Decrease speed of voice message',
    combination: ['Shift', ','],
  },
  {
    key: 14,
    title: 'Settings',
    combination: ['Shift', 'S'],
  },
  {
    key: 15,
    title: 'Emoji Panel',
    combination: ['Cmd', 'E'],
  },
  {
    key: 16,
    title: 'Sticker Panel',
    combination: ['Cmd', 'S'],
  },
];

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: ReactElement }
>(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface KeyboardShortcutsProps {
  open: boolean;
  handleClose: () => void;
}

export default function KeyboardShortcutsDialog({
  open,
  handleClose,
}: KeyboardShortcutsProps) {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth='md'
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid2 container spacing={1}>
            {list.map(({ key, combination, title }) => (
              <Grid2 container size={6} key={key}>
                <Stack
                  width={'100%'}
                  spacing={3}
                  direction={'row'}
                  alignContent={'center'}
                  justifyContent={'space-between'}
                >
                  <Typography variant='caption' sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>
                  <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    {combination.map((el) => (
                      <Button
                        variant='contained'
                        disabled
                        sx={{ color: '#212121' }}
                      >
                        {el}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
