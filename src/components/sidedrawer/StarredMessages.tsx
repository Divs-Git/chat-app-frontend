import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { SetSideDrawerType } from '../../redux/slices/app';
import { CaretLeft } from 'phosphor-react';
import ChatMessages from '../conversation/ChatMessages';

export default function StarredMessages() {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

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
          {' '}
          <Stack
            direction={'row'}
            sx={{ height: '100%' }}
            p={2}
            alignItems={'center'}
          >
            <IconButton onClick={() => dispatch(SetSideDrawerType('CONTACT'))}>
              <CaretLeft />
            </IconButton>
            <Typography variant='subtitle2'>Starred Messages</Typography>
          </Stack>
        </Box>

        {/* {Body} */}
        <Stack
          height={'100%'}
          p={3}
          spacing={3}
          position={'relative'}
          flexGrow={1}
          sx={{ overflowY: 'scroll' }}
        >
          <ChatMessages menu={false} />
        </Stack>
      </Stack>
    </Box>
  );
}
