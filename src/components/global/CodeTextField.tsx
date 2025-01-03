import { styled, TextField } from '@mui/material';

const CodeTextField = styled(TextField)({
  '& input[type="number"]': {
    MozAppearance: 'textfield', // For Firefox
    WebkitAppearance: 'none', // For Webkit-based browsers (Chrome, Safari)
    appearance: 'none', // For modern browsers
  },
  '& input[type="number"]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type="number"]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
});

export default CodeTextField;
