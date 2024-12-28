import { faker } from '@faker-js/faker';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { StyledBadge } from '../global/StyledBadge';
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from 'phosphor-react';
import { StyledInput } from '../global/StyledInput';

export default function Conversation() {
  const theme = useTheme();

  return (
    <>
      <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
        {/* {Chat Header} */}
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

        {/* {Msg Body} */}
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
          }}
        ></Box>
        {/* {Chat Input} */}
        <Box
          p={2}
          sx={{
            width: '100%',
            backgroundColor: '#f8faff',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Stack direction={'row'} spacing={3} alignItems={'center'}>
            <StyledInput
              fullWidth={true}
              placeholder='Write a message...'
              variant='filled'
              slotProps={{
                input: {
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position='end'>
                      <IconButton>
                        <LinkSimple />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton>
                        <Smiley />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Box
              sx={{
                height: 48,
                width: 48,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <Stack
                sx={{ height: '100%', width: '100%' }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <IconButton>
                  <PaperPlaneTilt color='white' />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
