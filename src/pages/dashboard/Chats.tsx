import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { ChatList } from '../../data';
import {
  Search,
  SearchIconWrapper,
  SearchInputBase,
} from '../../components/global/Search';
import ChatElement from '../../components/ChatElement';
import '../../assets/styles/Chats.scss';

export default function Chats() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 360,
        backgroundColor: '#f8faff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography variant='h5'>Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack sx={{ width: '100%' }}>
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

        <Stack spacing={1}>
          <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack direction={'column'} className='chats-container'>
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
              All Chats
            </Typography>
            {ChatList.filter((chat) => !chat.pinned).map((chat) => (
              <ChatElement key={chat.id} {...chat} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
