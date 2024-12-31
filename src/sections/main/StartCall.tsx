import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import {
  Search,
  SearchIconWrapper,
  SearchInputBase,
} from '../../components/global/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement';
import { MEMBERS_LIST } from '../../data';

interface DialogProps {
  open: boolean;
  handleClose: () => void;
}

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function StartCall({ open, handleClose }: DialogProps) {
  return (
    <Dialog
      fullWidth
      maxWidth={'xs'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
      onClose={handleClose}
    >
      {/* Title */}
      <DialogTitle>Start Call</DialogTitle>
      <DialogContent>
        <Stack width={'100%'} mb={2}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='#709CE6' />
            </SearchIconWrapper>
            <SearchInputBase
              placeholder='Search... '
              inputProps={{ 'aria-label': 'search' }}
            ></SearchInputBase>
          </Search>
        </Stack>

        {/* List */}
        {MEMBERS_LIST.map((member) => (
          <CallElement key={member.id} {...member} />
        ))}
      </DialogContent>
    </Dialog>
  );
}
