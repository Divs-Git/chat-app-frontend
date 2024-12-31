import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Search,
  SearchIconWrapper,
  SearchInputBase,
} from '../../components/global/Search';
import { MagnifyingGlass, Phone } from 'phosphor-react';
import { CallLogs } from '../../data';
import '../../assets/styles/Chats.scss';
import { CallLogElement } from '../../components/CallElement';
import { useState } from 'react';
import StartCall from '../../sections/main/StartCall';

export default function CallPage() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* Left section */}
        <Box
          sx={{
            height: '100vh',
            backgroundColor: '#fafaff',
            width: 360,
            boxShadow: '0 0 2px rgba(0,0,0,0.25)',
          }}
        >
          <Stack p={3} spacing={2} maxHeight={'100vh'}>
            <Stack>
              <Typography variant='h5'>Calls</Typography>
            </Stack>
            <Stack width={'100%'}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color='#709CE6' />
                </SearchIconWrapper>
                <SearchInputBase
                  placeholder='Search... '
                  inputProps={{ 'aria-label': 'search' }}
                ></SearchInputBase>
              </Search>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Typography variant='subtitle2' component={Link} underline='none'>
                Start Conversation
              </Typography>
              <IconButton onClick={() => handleOpenDialog()}>
                <Phone
                  style={{ color: theme.palette.primary.main }}
                  size={22}
                />
              </IconButton>
            </Stack>
            <Divider />
            <Stack direction={'column'} className='chats-container' spacing={3}>
              {/* {Pinned Chats} */}
              <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                  Call Logs
                </Typography>

                {/* Call logs */}
                {CallLogs.map((call) => (
                  <CallLogElement key={call.id} {...call} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Right section */}
        {/* TODO: Implement the conversation section */}
      </Stack>

      {/* Start Call Dialog */}
      <StartCall open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
}
