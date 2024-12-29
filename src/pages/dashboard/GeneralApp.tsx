import { Box, Stack } from '@mui/material';
import Chats from './Chats/Chats';
import Conversation from '../../components/conversation/Conversation';
import Contact from '../../components/contact';

export default function GeneralApp() {
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* {Chats} */}
        <Chats />

        {/* {Conversation} */}
        <Box
          sx={{
            height: '100%',
            width: 'calc(100vw - 360px - 80px - 360px)',
            backgroundColor: ' #F5F5F5',
          }}
        >
          <Conversation />
        </Box>

        {/* {Contact} */}
        <Contact />
      </Stack>
    </>
  );
}
