import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import { StyledBadge } from '../global/StyledBadge';
import { faker } from '@faker-js/faker';

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

export default function ChatElement({
  img,
  name,
  msg,
  time,
  online,
}: ChatElementProps) {
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
