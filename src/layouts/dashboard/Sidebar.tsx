import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from '@mui/material';
import Logo from '../../assets/logo/chat-icon.webp';
import { Nav_Buttons, Profile_Menu } from '../../data/constants';
import { Gear } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import { faker } from '@faker-js/faker';
import { AntSwitch } from '../../components/global/AntSwitch';

export default function Sidebar() {
  const theme = useTheme();
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
          <IconButton
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Avatar src={faker.image.avatar()} />
          </IconButton>

          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((option, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  <Stack
                    sx={{ width: '100%' }}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <span>{option.title}</span>
                    {option.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}
