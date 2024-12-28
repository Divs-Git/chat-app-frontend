import { faker } from '@faker-js/faker';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { ChatList } from '../../../data';
import { StyledBadge } from '../../../components/global/StyledBadge';
import './Chats.scss';

type ChatElementProps = {
  id: number;
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
};

function ChatElement({ img, name, msg, time, online }: ChatElementProps) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: '#fff',
      }}
      p={2}
    >
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={2}>
          {online ? (
            <StyledBadge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
            >
              <Avatar alt='Remy Sharp' src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt='Remy Sharp' src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant='subtitle2'>{name}</Typography>
            <Typography variant='caption'>{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={'center'}>
          <Typography sx={{ fontWeight: 600 }} variant='caption'>
            {time}
          </Typography>
          <Badge color='primary' badgeContent='2'></Badge>
        </Stack>
      </Stack>
    </Box>
  );
}

// Global search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    borderRadius: 20,
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
