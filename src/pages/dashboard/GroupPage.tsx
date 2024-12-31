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
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';
import '../../assets/styles/Chats.scss';

export default function Groups() {
  const theme = useTheme();
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
              <Typography variant='h5'>Groups</Typography>
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
                Create New Group
              </Typography>
              <IconButton>
                <Plus style={{ color: theme.palette.primary.main }} size={22} />
              </IconButton>
            </Stack>
            <Divider />

            <Stack direction={'column'} className='chats-container' spacing={3}>
              {/* {Pinned Chats} */}
              <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                  Pinned
                </Typography>
                {ChatList.filter((chat) => chat.pinned).map((chat) => (
                  <ChatElement key={chat.id} {...chat} />
                ))}
              </Stack>

              {/* {All Chats except pinned} */}
              <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                  All Groups
                </Typography>
                {ChatList.filter((chat) => !chat.pinned).map((chat) => (
                  <ChatElement key={chat.id} {...chat} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Right section */}
        {/* TODO: Implement the conversation section */}
      </Stack>
    </>
  );
}
