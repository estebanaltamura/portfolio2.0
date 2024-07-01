import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const Plumarii = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const clickHandler = () => {
    router.push('/project-detail/plumarii');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: isDesktop ? '141px' : '',
        width: isDesktop ? '473.5px' : '100%',
      }}
    >
      <Box sx={{ position: 'absolute', width: '200px' }}>
        <img src='/logo.png' alt='' style={{ width: '100%' }} />
      </Box>
      <img
        onClick={clickHandler}
        src={
          isDesktop
            ? '/cardCovers/plumarii/plumariiCoverDesktop.png'
            : '/cardCovers/plumarii/plumariiCoverMobile.png'
        }
        alt=''
        style={{
          height: isDesktop ? '141px' : '',
          width: isDesktop ? '473.5px' : '100%',
          margin: '0',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
};

export default Plumarii;
