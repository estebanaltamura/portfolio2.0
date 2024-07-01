import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const ActasItalianas = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const clickHandler = () => {
    router.push('/project-detail/actas-italianas-express');
  };

  return (
    <img
      onClick={clickHandler}
      src={
        isDesktop
          ? '/cardCovers/actasItalianasExpress/actasItalianasExpressCoverDesktop.png'
          : '/cardCovers/actasItalianasExpress/actasItalianasExpressCoverMobile.png'
      }
      alt=''
      style={{
        height: isDesktop ? '234px' : '',
        width: isDesktop ? '473.5px' : '100%',
        margin: '0',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
    />
  );
};

export default ActasItalianas;
