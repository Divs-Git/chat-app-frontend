import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from '@mui/material';
import { StyledInput } from '../global/StyledInput';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

type ChatInputProps = {
  setOpenPicker: (value: (prev: boolean) => boolean) => void;
};

function ChatInput({ setOpenPicker }: ChatInputProps) {
  return (
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
              <IconButton
                onClick={() => setOpenPicker((prev: boolean) => !prev)}
              >
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default function ChatFooter() {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);

  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        backgroundColor: '#f8faff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack direction={'row'} spacing={3} alignItems={'center'}>
        <Stack width={'100%'}>
          {/* {Chat Input} */}
          <Box
            sx={{
              display: openPicker ? 'inline' : 'none',
              zIndex: 10,
              position: 'fixed',
              bottom: 81,
              right: 90,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>

          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
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
  );
}
