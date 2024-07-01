import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const BuenosNegocios = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const clickHandler = () => {
    router.push('/project-detail/buenos-negocios');
  };

  return (
    <img
      onClick={clickHandler}
      src={
        isDesktop
          ? '/cardCovers/buenosNegocios/buenosNegociosCoverDesktop.png'
          : '/cardCovers/buenosNegocios/buenosNegociosCoverMobile.png'
      }
      alt=''
      style={{
        height: isDesktop ? '554px' : '',
        width: isDesktop ? '473.5px' : '100%',
        margin: '0',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
    />
  );
};

export default BuenosNegocios;
