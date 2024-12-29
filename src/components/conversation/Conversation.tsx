import { Box, Stack } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

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
          }}
        ></Box>

        {/* {Chat Input} */}
        <ChatFooter />
      </Stack>
    </>
  );
}
