import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from '@mui/material';
import { StyledInput } from '../global/StyledInput';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';

export default function ChatFooter() {
  const theme = useTheme();
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
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
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
