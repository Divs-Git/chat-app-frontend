import { styled, TextField } from '@mui/material';

export const StyledInput = styled(TextField)(() => ({
  '& .MuiInputBase-input': {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '12px',
  },
}));
