import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { DownloadSimple, Image } from 'phosphor-react';
import { Link } from 'react-router-dom';

type ChatProps = {
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

function Timeline({ chat }: { chat: ChatProps }) {
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

function TextMessage({ chat }: { chat: ChatProps }) {
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
    </Stack>
  );
}

function ImageMessage({ chat }: { chat: ChatProps }) {
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
    </Stack>
  );
}

function ReplyMessage({ chat }: { chat: ChatProps }) {
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
    </Stack>
  );
}

function LinkMessage({ chat }: { chat: ChatProps }) {
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
    </Stack>
  );
}

function DocMessage({ chat }: { chat: ChatProps }) {
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
    </Stack>
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
