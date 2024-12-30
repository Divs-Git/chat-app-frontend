import { faker } from '@faker-js/faker';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from 'phosphor-react';
import React, { useState } from 'react';
import KeyboardShortcuts from '../../sections/settings/KeyboardShortcutsDialog';

export default function Settings() {
  const [openKeyboardShortcuts, setOpenKeyboardShortcuts] =
    useState<boolean>(false);

  const handleOpenShortcuts = () => {
    setOpenKeyboardShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenKeyboardShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: 'Notification',
      onClick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: 'Privacy',
      onClick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: 'Security',
      onClick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: 'Theme',
      onClick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: 'Chat Wallpaper',
      onClick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: 'Request Account Info',
      onClick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: 'Keyboard Shortcuts',
      onClick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: 'Help',
      onClick: () => {},
    },
  ];

  return (
    <>
      <Stack direction={'row'} width={'100%'}>
        {/* {Left Panel} */}
        <Box
          sx={{
            overflowY: 'auto',
            height: '100vh',
            width: 360,
            backgroundColor: '#f8faff',
            boxShadow: '0 0 2px rgba(0,0,0,0.25)',
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <IconButton>
                <CaretLeft size={24} color='#4b4b4b' />
              </IconButton>
              <Typography variant='h6' fontWeight={600}>
                Settings
              </Typography>
            </Stack>

            {/* Profile Section */}
            <Stack direction={'row'} spacing={3}>
              <Avatar
                sx={{ height: 56, width: 56 }}
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
              />
              <Stack spacing={0.5}>
                <Typography variant='subtitle1' fontWeight={600}>
                  {faker.person.fullName()}
                </Typography>
                <Typography variant='body2'>{faker.lorem.words()}</Typography>
              </Stack>
            </Stack>

            {/* List of settings option */}
            <Stack spacing={2}>
              {list.map((el) => (
                <React.Fragment key={el.key}>
                  <Stack spacing={2} sx={{ cursor: 'pointer' }}>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      spacing={2}
                      onClick={el.onClick}
                    >
                      {el.icon}
                      <Typography variant='body2'>{el.title}</Typography>
                    </Stack>
                  </Stack>
                  {el.key !== list.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* {Right Panel} */}
      </Stack>

      {openKeyboardShortcuts && (
        <KeyboardShortcuts
          open={openKeyboardShortcuts}
          handleClose={handleCloseShortcuts}
        />
      )}
    </>
  );
}
