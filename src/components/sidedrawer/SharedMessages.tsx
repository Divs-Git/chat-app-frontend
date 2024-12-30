import {
  Box,
  Grid2,
  IconButton,
  Stack,
  Tab,
  Typography,
  useTheme,
} from '@mui/material';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { SetSideDrawerType } from '../../redux/slices/app';
import { CaretLeft } from 'phosphor-react';
import { Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { faker } from '@faker-js/faker';
import { SHARED_DOCS, SHARED_LINKS } from '../../data';
import { DocMessage, LinkMessage } from '../conversation/ChatMessageTypes';

export default function SharedMessages() {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
          {' '}
          <Stack
            direction={'row'}
            sx={{ height: '100%' }}
            p={2}
            alignItems={'center'}
          >
            <IconButton onClick={() => dispatch(SetSideDrawerType('CONTACT'))}>
              <CaretLeft />
            </IconButton>
            <Typography variant='subtitle2'>Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label='Media' />
          <Tab label='Links' />
          <Tab label='Docs' />
        </Tabs>
        {/* {Body} */}
        <Stack
          height={'100%'}
          p={3}
          spacing={value === 1 ? 1 : 3}
          position={'relative'}
          flexGrow={1}
          sx={{ overflowY: 'scroll' }}
        >
          {(() => {
            switch (value) {
              case 0:
                // Images

                return (
                  <Grid2 container spacing={2}>
                    {[1, 2, 3, 4, 5, 6].map((el, i) => (
                      <Grid2 size={3} key={i}>
                        <img src={faker.image.url()} width={64} height={64} />
                      </Grid2>
                    ))}
                  </Grid2>
                );
                break;
              case 1:
                // Links
                return SHARED_LINKS.map((el, i) => (
                  <LinkMessage key={i} chat={el} />
                ));
              case 2:
                // Docs
                return SHARED_DOCS.map((el, i) => (
                  <DocMessage key={i} chat={el} />
                ));
              default:
                return <></>;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}
