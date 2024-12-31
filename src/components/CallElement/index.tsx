import { faker } from '@faker-js/faker';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { StyledBadge } from '../global/StyledBadge';
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from 'phosphor-react';

type CallLogElementProps = {
  id: number;
  img: string;
  name: string;
  time: string;
  online: boolean;
  incoming: boolean;
  missed: boolean;
};

function CallLogElement({
  img,
  online,
  incoming,
  missed,
}: CallLogElementProps) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          backgroundColor: '#fff',
        }}
        p={2}
      >
        <Stack
          direction={'row'}
          spacing={2}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
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
              <Typography variant='subtitle2'>
                {faker.person.fullName()}
              </Typography>
              <Stack direction={'row'} spacing={1} alignContent={'center'}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? 'red' : 'green'} />
                ) : (
                  <ArrowUpRight color={missed ? 'red' : 'green'} />
                )}
                <Typography variant='caption'>Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone size={22} color='green' />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}

type CallElementProps = {
  id: number;
  img: string;
  name: string;
  online: boolean;
};

function CallElement({ online }: CallElementProps) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          backgroundColor: '#fff',
        }}
        p={2}
      >
        <Stack
          direction={'row'}
          spacing={2}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction={'row'} spacing={2}>
            {online ? (
              <StyledBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar alt='Remy Sharp' src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar alt='Remy Sharp' src={faker.image.avatar()} />
            )}
            <Stack spacing={0.3} direction={'row'} alignItems={'center'}>
              <Typography variant='subtitle2'>
                {faker.person.fullName()}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <IconButton>
              <Phone size={22} color='green' />
            </IconButton>
            <IconButton>
              <VideoCamera size={22} color='green' />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export { CallElement, CallLogElement };
