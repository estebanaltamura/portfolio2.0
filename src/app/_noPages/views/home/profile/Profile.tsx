'use client';

import {
  Box,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Profile = () => {
  const [isCopyingEmailHeader, setIsCopyingEmailHeader] = useState(false);
  const [isDownloadingCV, setIsDownloadingCV] = useState<boolean>(false);

  const isDesktop = useMediaQuery('(min-width:600px)');

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

  const downloadCVClickHandler = () => {
    setIsDownloadingCV(true);
    const timeOut = setTimeout(() => {
      setIsDownloadingCV(false);

      clearTimeout(timeOut);
    }, 3500);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'left',
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
            fontSize: isDesktop ? '17px' : '16px',
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
            fontSize: isDesktop ? '17px' : '16px',
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
            gap: '22px',
            marginTop: isDesktop ? '20px' : '20px',
            '@media(min-width: 1200px)': {
              gap: '17px',
            },
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
              {isDesktop ? 'Disponible para nuevos proyectos' : 'Disponible'}
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
              top: '0px',
              display: 'flex',
              width: 'fit-content',
              gap: '22px',
              alignItems: 'center',
              '@media(min-width: 1200px)': {
                gap: '17px',
              },
            }}
          >
            <a
              style={{ position: 'relative', bottom: '1px' }}
              href='https://www.linkedin.com/in/andres-altamura/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CustomTooltip
                title='Ir a LinkedIn'
                classes={{ tooltip: tooltipClasses.tooltip }}
                sx={{
                  [`& .${tooltipClasses.tooltip}`]: {
                    fontSize: '14px',
                    color: '#BEBABA',
                  },
                }}
              >
                <Box sx={{ width: '20px', height: '20px', cursor: 'pointer' }}>
                  <img
                    src='/icons/profileIcons/linkedinIcon.svg'
                    alt=''
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </Box>
              </CustomTooltip>
            </a>
            <a
              href='https://github.com/estebanaltamura/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CustomTooltip
                title='Ir a Github'
                classes={{ tooltip: tooltipClasses.tooltip }}
                sx={{
                  [`& .${tooltipClasses.tooltip}`]: {
                    fontSize: '14px',
                    color: '#BEBABA',
                  },
                }}
              >
                <Box sx={{ width: '19px', height: '19px', cursor: 'pointer' }}>
                  <img
                    src='/icons/profileIcons/githubIcon.svg'
                    alt=''
                    style={{ width: '19px', height: '19px' }}
                  />
                </Box>
              </CustomTooltip>
            </a>

            <Box sx={{ position: 'relative' }} onClick={mailClickHandler}>
              {isCopyingEmailHeader && !isDesktop && (
                <Box
                  sx={{
                    position: 'absolute',
                    color: 'white',
                    top: '25px',
                    left: '-4px',
                    fontSize: '14px',
                    marginTop: '6px',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#4E4E4E',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-8px',
                      left: '20%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderBottom: '13px solid #4E4E4E',
                    },
                  }}
                >
                  Copiado!
                </Box>
              )}

              <CopyToClipboard text='esteban.altamura@gmail.com'>
                <CustomTooltip
                  title={isCopyingEmailHeader ? 'Mail copiado!' : 'Copiar mail'}
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
                      src='/icons/profileIcons/mailIcon.svg'
                      alt=''
                      style={{ width: '20px', height: '20px' }}
                    />
                  </Box>
                </CustomTooltip>
              </CopyToClipboard>
            </Box>

            <CustomTooltip
              title='Ir a Whatsapp'
              classes={{ tooltip: tooltipClasses.tooltip }}
              sx={{
                [`& .${tooltipClasses.tooltip}`]: {
                  fontSize: '14px',
                  color: '#BEBABA',
                },
              }}
            >
              <Box
                sx={{ width: '19px', height: '19px', cursor: 'pointer' }}
                onClick={whatsappClickHandler}
              >
                <img
                  src='/icons/profileIcons/whatsappIcon.svg'
                  alt=''
                  style={{ width: '19px', height: '19px' }}
                />
              </Box>
            </CustomTooltip>

            <a href='https://drive.google.com/uc?export=download&id=1X7VTxJ9HQAAyqZxnQPZNpxsI3RsJtpG7'>
              <CustomTooltip
                title='Descargar cv'
                classes={{ tooltip: tooltipClasses.tooltip }}
                sx={{
                  [`& .${tooltipClasses.tooltip}`]: {
                    fontSize: '14px',
                    color: '#BEBABA',
                  },
                }}
              >
                <Box
                  onClick={downloadCVClickHandler}
                  sx={{
                    position: 'relative',
                    top: '1px',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                  }}
                >
                  {isDownloadingCV && !isDesktop && (
                    <Box
                      sx={{
                        position: 'absolute',
                        marginTop: '8px',
                        color: 'white',
                        top: '25px',
                        left: '-78px',
                        fontSize: '14px',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        backgroundColor: '#4E4E4E',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '-8px',
                          left: '80%',
                          transform: 'translateX(-50%)',
                          borderLeft: '5px solid transparent',
                          borderRight: '5px solid transparent',
                          borderBottom: '13px solid #4E4E4E',
                        },
                      }}
                    >
                      Descargando...
                    </Box>
                  )}

                  <img
                    src='/icons/profileIcons/cvIcon.svg'
                    alt=''
                    style={{ width: '23px', height: '23px' }}
                  />
                </Box>
              </CustomTooltip>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
