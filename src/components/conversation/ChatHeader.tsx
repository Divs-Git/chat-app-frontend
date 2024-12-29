import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { StyledBadge } from '../global/StyledBadge';
import { faker } from '@faker-js/faker';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';

export default function ChatHeader() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f8faff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
      }}
      p={2}
    >
      <Stack
        alignItems={'center'}
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ width: '100%', height: '100%' }}
      >
        <Stack direction={'row'} spacing={2}>
          <Box>
            <StyledBadge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
            >
              <Avatar
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
              />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant='subtitle2'>
              {faker.person.fullName()}
            </Typography>
            <Typography variant='caption'>Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation={'vertical'} flexItem={true} />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
