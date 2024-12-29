import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { ToggleSideDrawer } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import { AntSwitch } from './global/AntSwitch';

export default function Contact() {
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
          <Stack
            direction={'row'}
            sx={{ height: '100%' }}
            p={2}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant='subtitle2'>Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSideDrawer())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* {Body} */}
        <Stack
          height={'100%'}
          p={3}
          spacing={2}
          position={'relative'}
          flexGrow={1}
          sx={{ overflowY: 'scroll' }}
        >
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.person.fullName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant='subtitle1' fontWeight={600}>
                {faker.person.fullName()}
              </Typography>
              <Typography variant='body2' fontWeight={500}>
                {faker.phone.number()}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
          >
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant='overline'>Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant='overline'>Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant='subtitle1' fontWeight={600}>
              About
            </Typography>
            <Typography variant='body2'>{faker.lorem.paragraph()}</Typography>
          </Stack>
          <Divider />
          <Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Typography variant='subtitle1'>Media, Links & Docs</Typography>
              <Button endIcon={<CaretRight />}>401</Button>
            </Stack>
            <Stack
              direction={'row'}
              spacing={2}
              alignItems={'center'}
              paddingBottom={2}
            >
              {[1, 2, 3, 4].map((el, index) => (
                <Box key={index}>
                  <img
                    src={faker.image.url()}
                    alt={faker.name.fullName()}
                    width={64}
                    height={64}
                  />
                </Box>
              ))}
            </Stack>
            <Divider />
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Star size={21} />
              <Typography variant='subtitle2'>Starred Messages</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Bell size={21} />
              <Typography variant='subtitle2'>Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography variant='subtitle1'>1 group in common</Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
            <Stack>
              <Typography variant='subtitle2'>Company</Typography>
              <Typography variant='caption'>Owl, Monkey, You</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button startIcon={<Prohibit />} fullWidth variant='outlined'>
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth variant='outlined'>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
