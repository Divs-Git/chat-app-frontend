import { Box, Stack } from '@mui/material';
import { Chat_History } from '../../data';
import {
  DocMessage,
  ImageMessage,
  LinkMessage,
  ReplyMessage,
  TextMessage,
  Timeline,
} from './ChatMessageTypes';

export default function ChatMessages() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((chat, index) => {
          switch (chat.type) {
            case 'divider':
              // Timeline
              return <Timeline key={index} chat={chat} />;
            case 'msg':
              switch (chat.subtype) {
                case 'img':
                  return <ImageMessage key={index} chat={chat} />;
                case 'doc':
                  return <DocMessage key={index} chat={chat} />;
                case 'link':
                  return <LinkMessage key={index} chat={chat} />;
                case 'reply':
                  return <ReplyMessage key={index} chat={chat} />;
                default:
                  // text messag
                  return <TextMessage key={index} chat={chat} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}
