'use client';

import { Box, Button, Typography } from '@mui/material';
import { experiences } from '@/JSONs/JSONprojects';
import ExperienceItem from '@/app/_noPages/components/ExperienceItem';
import { useState } from 'react';

const WorkExperiences = () => {
  const [isDownloadButtonHovered, setIsDownloadButtonHovered] =
    useState<boolean>(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '572px',
        height: '356px',
        padding: '16px',
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
          height: '59px',
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
          <Box sx={{ width: '16px', height: '16px' }}>
            <img src='/icons/experienceIcon.svg' alt='' />
          </Box>
          <Typography
            sx={{ fontSize: '16px', fontWeight: '600', marginTop: '2px' }}
          >
            Experiencia
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
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
            backgroundColor: '#6E65A7',
            '&:hover': {
              border: '1px solid #6E65A7',

              backgroundColor: '#252525 !important',
            },
          }}
        >
          {isDownloadButtonHovered ? (
            <img src='/icons/arrowDownloadButtonIcon.svg' alt='' />
          ) : (
            <a
              href={
                'https://drive.google.com/file/d/1X7VTxJ9HQAAyqZxnQPZNpxsI3RsJtpG7/view?usp=sharing'
              }
              download
              style={{ textDecoration: 'none' }}
            >
              <Typography
                sx={{
                  marginTop: '3px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                Descargar CV
              </Typography>
            </a>
          )}
        </Button>
      </Box>

      {/*Experiences container*/}
      <Box
        sx={{
          width: '476px',
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
              logoImgSrc={experience.logoImgSrc}
              name={experience.name}
              period={experience.period}
              role={experience.role}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkExperiences;
