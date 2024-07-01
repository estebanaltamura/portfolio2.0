import ActasItalianas from '@/app/_noPages/components/projectCards/ActasItalianas';
import BuenosNegocios from '@/app/_noPages/components/projectCards/BuenosNegocios';
import Chat from '@/app/_noPages/components/projectCards/Chat';
import CryptoCard from '@/app/_noPages/components/projectCards/CryptoCard';
import Plumarii from '@/app/_noPages/components/projectCards/Plumarii';
import { Box, Typography, useMediaQuery } from '@mui/material';

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '467px',
        height: 'fit-content',
        maxHeight: isDesktop ? 'fit-content' : '473px',
        marginTop: '70px',
        padding: '10px 16px 24px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          padding: '16px 32px 32px 32px',
          maxWidth: '100%',
        },
      }}
    >
      {/*Header*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '55px',
          gap: '11px',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '20px', height: '20px' }}>
          <img src='/icons/projectIcon.svg' alt='' />
        </Box>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginTop: '2px',
          }}
        >
          Proyectos
        </Typography>
      </Box>
      {/*Projects*/}
      <Box
        sx={{
          display: 'block',
          width: '100%',
          height: 'fit-content',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8C8C8C',
            borderRadius: '20px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            '@media(min-width: 1200px)': {
              flexDirection: 'row',
            },
          }}
        >
          {isDesktop && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '473.5px',
                  marginRight: '4px',
                  gap: '10px',
                }}
              >
                <ActasItalianas />
                <Plumarii />
                <Chat />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '473.5px',
                  marginLeft: '4px',
                  gap: '10px',
                }}
              >
                <BuenosNegocios />
              </Box>
            </>
          )}
          {!isDesktop && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                paddingRight: '8px',
                gap: '10px',
              }}
            >
              <BuenosNegocios />
              <ActasItalianas />
              <Plumarii />
              <Chat />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
