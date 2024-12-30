import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { DotsThreeVertical, DownloadSimple, Image } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Message_options } from '../../data/constants';
import { MouseEvent, useState } from 'react';

interface ChatProps {
  chat: {
    type: string;
    text?: string;
    message?: string;
    subtype?: string;
    img?: string;
    incoming?: boolean;
    outgoing?: boolean;
    preview?: string;
    reply?: string;
  };

  menu?: boolean;
}

function Timeline({ chat }: ChatProps) {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Divider sx={{ width: '46%' }} />
      <Typography variant={'caption'} color={theme.palette.text.secondary}>
        {chat.text}
      </Typography>
      <Divider sx={{ width: '46%' }} />
    </Stack>
  );
}

function TextMessage({ chat, menu }: ChatProps) {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={chat.incoming ? 'flex-start' : 'flex-end'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Typography
          variant='body2'
          color={chat.incoming ? theme.palette.text.primary : 'white'}
        >
          {chat.message}
        </Typography>
      </Box>
      {/* {Message Options} */}
      {menu && <MessageOptions />}
    </Stack>
  );
}

function ImageMessage({ chat, menu }: ChatProps) {
  const theme = useTheme();

  return (
    <Stack
      direction={'row'}
      justifyContent={chat.incoming ? 'flex-start' : 'flex-end'}
    >
      {' '}
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={1}>
          <img
            src={chat.img}
            alt={chat.message}
            style={{
              width: 210,
              height: 210,
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          <Typography
            variant='body2'
            color={chat.incoming ? theme.palette.text.primary : 'white'}
          >
            {chat.message}
          </Typography>
        </Stack>
      </Box>
      {/* {Message Options} */}
      {menu && <MessageOptions />}
    </Stack>
  );
}

function ReplyMessage({ chat, menu }: ChatProps) {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={chat.incoming ? 'flex-start' : 'flex-end'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'column'}
            spacing={3}
            alignItems={'center'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant='body2' color={theme.palette.text.primary}>
              {chat.message}
            </Typography>
          </Stack>
          <Typography
            variant='body2'
            color={chat.incoming ? theme.palette.text.primary : 'white'}
          >
            {chat.reply}
          </Typography>
        </Stack>
      </Box>
      {/* {Message Options} */}
      {menu && <MessageOptions />}
    </Stack>
  );
}

function LinkMessage({ chat, menu }: ChatProps) {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={chat.incoming ? 'flex-start' : 'flex-end'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems={'flex-start'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={chat.preview}
              alt={chat.message}
              style={{
                width: 210,
                height: 210,
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
            <Stack spacing={2}>
              <Typography variant='subtitle2'>Creating Chat App</Typography>
              <Typography
                variant='subtitle2'
                component={Link}
                color={theme.palette.primary.main}
                to='//https://www.youtube.com'
                target='_blank'
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant='body2'
              color={chat.incoming ? theme.palette.text.primary : 'white'}
            >
              {chat.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* {Message Options} */}
      {menu && <MessageOptions />}
    </Stack>
  );
}

function DocMessage({ chat, menu }: ChatProps) {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={chat.incoming ? 'flex-start' : 'flex-end'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content',
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'row'}
            spacing={3}
            alignItems={'center'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant='caption'>Document.pdf</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant='body2'
            color={chat.incoming ? theme.palette.text.primary : 'white'}
          >
            {chat.message}
          </Typography>
        </Stack>
      </Box>
      {/* {Message Options} */}
      {menu && <MessageOptions />}
    </Stack>
  );
}

function MessageOptions() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ height: 30, width: 30 }}
      >
        <DotsThreeVertical size={20} />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((option, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {option.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
}

export {
  Timeline,
  TextMessage,
  ImageMessage,
  ReplyMessage,
  LinkMessage,
  DocMessage,
};
