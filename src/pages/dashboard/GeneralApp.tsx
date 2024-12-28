import { Box, Stack } from '@mui/material';
import Chats from './Chats/Chats';
import Conversation from '../../components/conversation/Conversation';

export default function GeneralApp() {
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* {Chats} */}
        <Chats />
        <Box
          sx={{
            height: '100%',
            width: 'calc(100vw - 360px - 80px)',
          }}
        >
          {/* {Conversation} */}
          <Conversation />
        </Box>
      </Stack>
    </>
  );
}
