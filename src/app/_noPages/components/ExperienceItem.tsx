'use client';

import { IExperiences } from '@/JSONs/JSONprojects';
import { Avatar, Box, Typography } from '@mui/material';
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

  const experienceDetailClickHandler = () => {
    router.push(`/experience-detail/${id}`);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '48px',
        marginTop: index > 0 ? '33px' : '0px',
        cursor: 'pointer',
        alignItems: 'center',
      }}
      onClick={experienceDetailClickHandler}
    >
      <Box
        sx={{
          width: '15px',
          height: '15px',
          borderRadius: '100px',
          backgroundColor: '#6E65A7',
          marginBottom: '22px',
        }}
      ></Box>
      {index < length - 1 && (
        <Box
          sx={{
            position: 'absolute',
            width: '1px',
            height: '65px',
            top: '21px',
            left: '7px',
            backgroundColor: '#BABEBE',
          }}
        ></Box>
      )}

      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginLeft: '17px' }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              lineHeight: '24px',
              fontSize: '14px',
              fontWeight: '700',
              marginTop: '1px',
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              lineHeight: '24px',
              fontSize: '14px',
              fontWeight: '700',
              margin: '0px 4px',
            }}
          >
            |
          </Typography>

          <Typography
            sx={{
              lineHeight: '24px',
              fontSize: '14px',
              fontWeight: '400',
              marginTop: '1px',
            }}
          >
            {period}
          </Typography>
        </Box>

        <Typography
          sx={{
            lineHeight: '24px',
            fontSize: '14px',
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
