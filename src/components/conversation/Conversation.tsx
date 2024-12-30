import { Box, Stack } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatMessages from './ChatMessages';

export default function Conversation() {
  return (
    <>
      <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
        {/* {Chat Header} */}
        <ChatHeader />

        {/* {Msg Body} */}
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <ChatMessages menu={true} />
        </Box>

        {/* {Chat Input} */}
        <ChatFooter />
      </Stack>
    </>
  );
}
