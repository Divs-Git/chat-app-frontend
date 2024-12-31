import { Box, Stack } from '@mui/material';
import Chats from './Chats';
import Conversation from '../../components/conversation/Conversation';
import Contact from '../../components/sidedrawer/Contact';
import { useSelector } from 'react-redux';
import SharedMessages from '../../components/sidedrawer/SharedMessages';
import StarredMessages from '../../components/sidedrawer/StarredMessages';

type SideDrawerType = 'CONTACT' | 'STARRED' | 'SHARED';

interface SideDrawerState {
  open: boolean;
  type: SideDrawerType;
}

interface AppState {
  sidedrawer: SideDrawerState;
}

interface StoreState {
  app: AppState;
  _persist: boolean;
}

export default function GeneralApp() {
  const { sidedrawer } = useSelector((store: StoreState) => store.app);
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* {Chats} */}
        <Chats />

        {/* {Conversation} */}
        <Box
          sx={{
            height: '100%',
            width: sidedrawer.open
              ? 'calc(100vw - 360px - 80px - 360px)'
              : 'calc(100vw - 360px - 80px)',
            backgroundColor: ' #F5F5F5',
          }}
        >
          <Conversation />
        </Box>

        {/* {Contact} */}
        {sidedrawer.open &&
          (() => {
            switch (sidedrawer.type) {
              case 'CONTACT':
                return <Contact />;
              case 'STARRED':
                return <StarredMessages />;
              case 'SHARED':
                return <SharedMessages />;
              default:
                return <></>;
            }
          })()}
      </Stack>
    </>
  );
}
