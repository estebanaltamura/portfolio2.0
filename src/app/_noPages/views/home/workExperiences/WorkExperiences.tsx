'use client';

import { experiences } from '@/JSONs/JSONprojects';
import ExperienceItem from '@/app/_noPages/components/ExperienceItem';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const WorkExperiences = () => {
  const [isDownloadButtonHovered, setIsDownloadButtonHovered] =
    useState<boolean>(false);

  const handleDownload = () => {
    fetch(
      'https://drive.google.com/file/d/1X7VTxJ9HQAAyqZxnQPZNpxsI3RsJtpG7/view?usp=sharing'
    )
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        console.log(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CV_Andres_Altamura_Front-End_React.pdf'); // Reemplaza con el nombre de tu archivo
        document.body.appendChild(link);
        link.click();
        link?.parentNode?.removeChild(link);
      })
      .catch((err) => console.error('Error al descargar el archivo:', err));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '385px',
        padding: '16px 16px 32px 16px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/*Header*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '55px',
          padding: '2px 10px',
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
            sx={{ fontSize: '16px', fontWeight: '600', marginTop: '2px' }}
          >
            Experiencia
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <a
          href='https://drive.google.com/uc?export=download&id=1X7VTxJ9HQAAyqZxnQPZNpxsI3RsJtpG7
'
          onClick={() => setIsDownloadButtonHovered(false)}
        >
          <Button
            onMouseEnter={() => setIsDownloadButtonHovered(true)}
            onMouseLeave={() => setIsDownloadButtonHovered(false)}
            sx={{
              display: 'flex',
              width: '143px',
              height: '38px',
              padding: '8px 16px',
              alignItems: 'center',
              borderRadius: '20px',
              border: isDownloadButtonHovered ? '1px solid #6E65A7' : '',
              backgroundColor: isDownloadButtonHovered ? '#252525' : '#6E65A7',
            }}
          >
            {isDownloadButtonHovered ? (
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
                Descargar CV
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
          height: '257px',
          marginTop: '25px',
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
