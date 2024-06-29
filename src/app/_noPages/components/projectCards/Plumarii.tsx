import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const Plumarii = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const clickHandler = () => {
    router.push('/');
  };

  return (
    <img
      onClick={clickHandler}
      src={
        isDesktop
          ? '/cardCovers/plumarii/plumariiCoverDesktop.png'
          : '/cardCovers/plumarii/plumariiCoverMobile.png'
      }
      alt=''
      style={{
        height: isDesktop ? '141px' : '183px',
        width: isDesktop ? '457px' : '342px',
        margin: '0',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
    />
  );
};

export default Plumarii;
