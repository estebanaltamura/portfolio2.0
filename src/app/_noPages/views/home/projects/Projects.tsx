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
        height: '500px',
        marginTop: '70px',
        padding: '4px 16px 24px 20px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          padding: '16px 32px 32px 32px',
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
          <img src='/icons/stackIcon.svg' alt='' />
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
          marginTop: '10px',
          paddingRight: '10px',
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
          '@media(min-width: 1200px)': {
            paddingRight: '27px',
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
                  width: '457px',
                  marginRight: '5px',
                }}
              >
                <Plumarii />
                <BuenosNegocios />
                <ActasItalianas />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '457px',
                  marginLeft: '5px',
                }}
              >
                <CryptoCard />
                <Chat />
              </Box>
            </>
          )}
          {!isDesktop && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                marginRight: '5px',
              }}
            >
              <Plumarii />
              <BuenosNegocios />
              <ActasItalianas />

              <CryptoCard />
              <Chat />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
