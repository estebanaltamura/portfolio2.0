import { Box } from '@mui/material';
import Link from 'next/link';

const Chat = () => {
  return (
    <Link href='project-detail/chat'>
      <Box
        sx={{
          width: '100%',
          maxHeight: '226px',
          borderRadius: '10px',
          backgroundColor: '#494949',
          marginBottom: '10px',
        }}
      >
        <img src='/cardCovers/chatCover.svg' alt='' style={{ width: '100%' }} />
      </Box>
    </Link>
  );
};

export default Chat;
