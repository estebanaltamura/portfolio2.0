'use client';

import { experiences } from '@/JSONs/JSONprojects';
import ExperienceItem from '@/app/_noPages/components/ExperienceItem';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { MutableRefObject, useRef, useState } from 'react';

const WorkExperiences = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const downloadCvButtonRef = useRef<HTMLButtonElement | null>(null);

  const [isDownloadButtonHovered, setIsDownloadButtonHovered] =
    useState<boolean>(false);
  const [isDownloadingCV, setIsDownloadingCV] = useState<boolean>(false);

  const downloadCVClickHandler = () => {
    setIsDownloadingCV(true);
    setTimeout(() => {
      setIsDownloadingCV(false);

      if (downloadCvButtonRef.current) {
        downloadCvButtonRef.current.blur();
      }
    }, 3500);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '467px',
        height: '383px',
        padding: '10px 16px 24px 16px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          maxWidth: '529px',
          padding: '10px 32px 24px 32px',

          height: '470px',
        },
      }}
    >
      {/*Header*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: '476px',
          minHeight: '55px',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '147px',
            height: '34px',
            gap: '11px',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '18px', height: '18px' }}>
            <img
              src='/icons/experienceIcon.svg'
              alt=''
              style={{ width: '18px', height: '18px' }}
            />
          </Box>
          <Typography
            sx={{ fontSize: '18px', fontWeight: '600', marginTop: '2px' }}
          >
            Experiencia
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <a
          href='https://drive.google.com/uc?export=download&id=1X7VTxJ9HQAAyqZxnQPZNpxsI3RsJtpG7'
          onClick={downloadCVClickHandler}
        >
          <Button
            ref={downloadCvButtonRef}
            onMouseEnter={() => isDesktop && setIsDownloadButtonHovered(true)}
            onMouseLeave={() => isDesktop && setIsDownloadButtonHovered(false)}
            sx={{
              display: 'flex',
              width: '122px',
              height: '30px',
              padding: '8px 16px',
              marginRight: '3px',
              alignItems: 'center',
              borderRadius: '20px',
              border:
                isDownloadButtonHovered || isDownloadingCV
                  ? '1px solid #6E65A7'
                  : '',
              backgroundColor:
                isDownloadButtonHovered || isDownloadingCV
                  ? '#252525 !important'
                  : '#6E65A7 !important',
            }}
          >
            {isDownloadButtonHovered && !isDownloadingCV ? (
              <img src='/icons/arrowDownloadButtonIcon.svg' alt='' />
            ) : (
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'white',
                  textTransform: 'none',
                }}
              >
                {isDownloadingCV ? 'Descargando...' : 'Descargar CV'}
              </Typography>
            )}
          </Button>
        </a>
      </Box>

      {/*Experiences container*/}
      <Box
        sx={{
          width: '100%',

          height: 'fit-content',
          paddingRight: '8px',
          marginTop: '20px',
          justifyContent: 'center',
          overflow: 'auto',
          '@media(min-width: 1200px)': {
            height: '345px',
            paddingRight: '32px',
          },
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
        <Box>
          {experiences.map((experience, index, length) => (
            <ExperienceItem
              key={index}
              index={index}
              length={experiences.length}
              id={experience.id}
              name={experience.name}
              role={experience.role}
              period={experience.period}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkExperiences;
