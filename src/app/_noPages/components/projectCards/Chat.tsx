import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const Chat = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const clickHandler = () => {
    router.push('/project-detail/chat');
  };

  return (
    <img
      onClick={clickHandler}
      src={
        isDesktop
          ? '/cardCovers/encryptedChat/encryptedChatDesktop.png'
          : '/cardCovers/encryptedChat/encryptedChatMobile.png'
      }
      alt=''
      style={{
        height: isDesktop ? '158px' : '',
        width: isDesktop ? '473.5px' : '100%',
        margin: '0',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
    />
  );
};

export default Chat;
