'use client';

import {
  Box,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Profile = () => {
  const [isCopyingEmailHeader, setIsCopyingEmailHeader] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  const copyEmailAddressHeaderClickHandler = () => {
    setIsCopyingEmailHeader(true);

    const timeOut = setTimeout(() => {
      setIsCopyingEmailHeader(false);
      clearTimeout(timeOut);
    }, 1500);
  };

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      arrow
      {...props}
      classes={{ popper: className }}
      enterDelay={300}
    />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
      backgroundColor: '#4E4E4E',
    },
  });

  const gitHubClickHandler = () => {
    // TO DO
  };

  const linkedinClickHandler = () => {
    // TO DO
  };

  const mailClickHandler = () => {
    copyEmailAddressHeaderClickHandler();
  };

  const whatsappClickHandler = () => {
    const phoneNumber = '+34687080377';
    const message = 'Hola, he visto tu linkedin y quiero hablar contigo.';
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Añade el listener de eventos
    window.addEventListener('resize', handleResize);

    // Limpia el listener de eventos al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'left',
        '@media(max-width: 1200px)': {
          justifyContent: 'center',
        },
      }}
    >
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
            marginTop: '6px',
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
            gap: '15px',
            marginTop: width && width < 600 ? '15px' : '18px',
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
              {width && width < 600
                ? 'Disponible'
                : 'Disponible para nuevos proyectos'}
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
            <a
              href='https://github.com/estebanaltamura/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CustomTooltip
                title='Ir a Git hub'
                classes={{ tooltip: tooltipClasses.tooltip }}
                sx={{
                  [`& .${tooltipClasses.tooltip}`]: {
                    fontSize: '14px',
                    color: '#BEBABA',
                  },
                }}
              >
                <Box
                  sx={{ width: '20px', height: '20px', cursor: 'pointer' }}
                  onClick={gitHubClickHandler}
                >
                  <img
                    src='/icons/githubIcon.svg'
                    alt=''
                    style={{ width: '20px', height: '20px' }}
                  />
                </Box>
              </CustomTooltip>
            </a>
            <a
              href='https://www.linkedin.com/in/andres-altamura/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CustomTooltip
                title='Ir a Linkedin'
                classes={{ tooltip: tooltipClasses.tooltip }}
                sx={{
                  [`& .${tooltipClasses.tooltip}`]: {
                    fontSize: '14px',
                    color: '#BEBABA',
                  },
                }}
              >
                <Box
                  sx={{ width: '20px', height: '20px', cursor: 'pointer' }}
                  onClick={linkedinClickHandler}
                >
                  <img
                    src='/icons/linkedinIcon.svg'
                    alt=''
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </Box>
              </CustomTooltip>
            </a>

            <Box onClick={mailClickHandler}>
              <CopyToClipboard text='esteban.altamura@gmail.com'>
                <CustomTooltip
                  title={
                    isCopyingEmailHeader
                      ? 'Correo copiado!'
                      : 'Clickea para copiar mi mail en el portapapeles'
                  }
                  classes={{ tooltip: tooltipClasses.tooltip }}
                  sx={{
                    [`& .${tooltipClasses.tooltip}`]: {
                      fontSize: '14px',
                      color: '#BEBABA',
                    },
                  }}
                >
                  <Box
                    sx={{ width: '20px', height: '20px', cursor: 'pointer' }}
                  >
                    <img
                      src='/icons/mailIcon.svg'
                      alt=''
                      style={{ width: '20px', height: '20px' }}
                    />
                  </Box>
                </CustomTooltip>
              </CopyToClipboard>
            </Box>

            <CustomTooltip
              title='Contactar por Whatsapp'
              classes={{ tooltip: tooltipClasses.tooltip }}
              sx={{
                [`& .${tooltipClasses.tooltip}`]: {
                  fontSize: '14px',
                  color: '#BEBABA',
                },
              }}
            >
              <Box
                sx={{ width: '20px', height: '20px', cursor: 'pointer' }}
                onClick={whatsappClickHandler}
              >
                <img
                  src='/icons/whatsappIcon.svg'
                  alt=''
                  style={{ width: '20px', height: '20px' }}
                />
              </Box>
            </CustomTooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
