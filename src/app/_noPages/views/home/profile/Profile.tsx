import { Box, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <Typography
        className='russoFont'
        sx={{ fontSize: '45px', lineHeight: '50px', color: 'white' }}
      >
        Andrés Altamura
      </Typography>
      <Typography
        className='interFont'
        sx={{
          fontSize: '17px',
          lineHeight: '20px',
          marginTop: '6  px',
          color: 'white',
        }}
      >
        Desarrollador frontend
      </Typography>
      <Typography
        className='interFont'
        sx={{
          fontSize: '17px',
          lineHeight: '20px',
          marginTop: '7px',
          color: 'white',
        }}
      >
        Referente tecnológico en Koi ventures
      </Typography>
      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          height: '30px',
          gap: '26px',
          marginTop: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            height: '30px',
            padding: '0px 16px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #79B37F',
            borderRadius: '100px',
          }}
        >
          <Typography
            sx={{ fontSize: '12px', color: 'white' }}
            className='interFont'
          >
            Disponible para nuevos proyectos
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            gap: '17px',
            alignItems: 'center',
          }}
        >
          <img
            src='/icons/githubIcon.svg'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
          <img
            src='/icons/linkedinIcon.svg'
            alt=''
            style={{ width: '20px', height: '20px', marginBottom: '3px' }}
          />
          <img
            src='/icons/mailIcon.svg'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
          <img
            src='/icons/whatsappIcon.svg'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
