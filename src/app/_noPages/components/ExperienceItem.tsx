'use client';

import { IExperiences } from '@/JSONs/JSONprojects';
import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

interface IExperienceItemProps {
  index: number;
  length: number;
  id: string;
  name: string;
  role: string;
  period: string;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({
  index,
  length,
  id,
  name,
  role,
  period,
}) => {
  const router = useRouter();
  const isDesktop = useMediaQuery('(min-width:600px)');

  const experienceDetailClickHandler = () => {
    router.push(`/experience-detail/${id}`);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '68px',
        marginTop: index > 0 ? '80px' : '0px',
        cursor: 'pointer',
      }}
      onClick={experienceDetailClickHandler}
    >
      <Box
        sx={{
          width: '15px',
          height: '15px',
          borderRadius: '100px',
          backgroundColor: '#6E65A7',
          marginTop: '6px',
        }}
      ></Box>
      {index < length - 1 && (
        <Box
          sx={{
            position: 'absolute',
            width: '1px',
            height: '133px',
            top: '21px',
            left: '7px',
            backgroundColor: '#BABEBE',
          }}
        ></Box>
      )}

      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginLeft: '17px' }}
      >
        <Typography
          sx={{
            lineHeight: '24px',
            fontSize: '16px',
            fontWeight: '700',
            marginTop: '1px',
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            lineHeight: '24px',
            fontSize: '13px',
            fontWeight: '400',
            marginTop: '1px',
          }}
        >
          {period}
        </Typography>

        <Typography
          sx={{
            lineHeight: '24px',
            fontSize: '13px',
            fontWeight: '400',
          }}
        >
          {role}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceItem;
