'use client';

import { experiences } from '@/JSONs/JSONprojects';
import ExperienceItem from '@/app/_noPages/components/ExperienceItem';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { MutableRefObject, useRef, useState } from 'react';

const WorkExperiences = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const workExperiencesRef = useRef<HTMLDivElement | null>(null);

  const [isDownloadButtonHovered, setIsDownloadButtonHovered] =
    useState<boolean>(false);
  const [isDownloadingCV, setIsDownloadingCV] = useState<boolean>(false);

  const downloadCVClickHandler = () => {
    setIsDownloadingCV(true);
    const timeOut = setTimeout(() => {
      setIsDownloadingCV(false);

      workExperiencesRef?.current?.click();
      clearTimeout(timeOut);
    }, 3500);
  };

  return (
    <Box
      ref={workExperiencesRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '529px',
        height: '478px',
        padding: '16px 16px 40px 16px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
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
          href='https://drive.google.com/uc?export=download&id=1X7VTxJ9HQAAyqZxnQPZNpxsI3RsJtpG7
'
          onClick={downloadCVClickHandler}
        >
          <Button
            onMouseEnter={() => isDesktop && setIsDownloadButtonHovered(true)}
            onMouseLeave={() => isDesktop && setIsDownloadButtonHovered(false)}
            sx={{
              display: 'flex',
              width: '122px',
              height: '30px',
              padding: '8px 16px',
              alignItems: 'center',
              borderRadius: '20px',
              border:
                isDownloadButtonHovered || isDownloadingCV
                  ? '1px solid #6E65A7'
                  : '',
              backgroundColor:
                isDownloadButtonHovered || isDownloadingCV
                  ? '#252525'
                  : '#6E65A7',
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
          maxWidth: '476px',
          height: '345px',
          marginTop: '20px',
          overflow: 'auto',
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
