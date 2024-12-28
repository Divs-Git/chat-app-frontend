import { Avatar, Box, Divider, IconButton, Stack, Switch } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo/chat-icon.webp';
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

export default function DashboardLayout() {
  const theme = useTheme();

  const [selectedIcon, setSelectedIcon] = useState(0);
  console.log(theme);

  return (
    <>
      <Stack direction={'row'}>
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
            height: '100vh',
            width: 80,
          }}
        >
          <Stack
            direction={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            height={'100%'}
            sx={{ width: '100%' }}
            spacing={3}
          >
            <Stack alignItems={'center'} spacing={3}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.contrastText,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                  textAlign: 'center',
                }}
              >
                <img src={Logo} width={'46px'} alt='chat-app-logo' />
              </Box>

              <Stack
                spacing={3}
                sx={{ width: 'max-content' }}
                direction={'column'}
                alignItems={'center'}
              >
                {Nav_Buttons.map((el) =>
                  selectedIcon === el.index ? (
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                      key={el.index}
                    >
                      <IconButton
                        sx={{ width: 'max-content', color: 'white' }}
                        key={el.index}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => setSelectedIcon(el.index)}
                      sx={{ width: 'max-content', color: 'black' }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  )
                )}
                <Divider sx={{ width: '48px' }} />
                {selectedIcon === 3 ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ width: 'max-content', color: 'white' }}>
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{ width: 'max-content', color: 'black' }}
                    onClick={() => setSelectedIcon(3)}
                  >
                    <Gear />
                  </IconButton>
                )}
              </Stack>
            </Stack>
            <Stack spacing={4}>
              {/* {switch} */}
              <AntSwitch defaultChecked />
              <Avatar src={faker.image.avatar()} />
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    </>
  );
}
