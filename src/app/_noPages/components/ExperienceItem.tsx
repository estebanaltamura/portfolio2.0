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
        marginTop: index > 0 ? '35px' : '0px',
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
          marginTop: '3px',
        }}
      ></Box>
      {index < length - 1 && (
        <Box
          sx={{
            position: 'absolute',
            width: '1px',
            height: '88px',
            top: '18px',
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
            lineHeight: '18px',
            fontSize: '16px',
            fontWeight: '700',
            marginTop: '2px',
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            lineHeight: '18px',
            fontSize: '13px',
            fontWeight: '300',
            marginTop: '2px',
          }}
        >
          {period}
        </Typography>

        <Typography
          sx={{
            lineHeight: '22px',
            fontSize: '13px',
            fontWeight: '400',
            marginTop: '4px',
          }}
        >
          {role}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceItem;
