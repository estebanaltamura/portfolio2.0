'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

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
  return (
    <Link href={`/experience-detail/${id}`}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          maxWidth: '100%',
          height: '82px',
          marginTop: index > 0 ? '22px' : '0px',
          cursor: 'pointer',
          borderRadius: '10px',
          border: '1px solid #6E65A7',
          '&:hover': {
            backgroundColor: '#333238',
          },
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginLeft: '17px' }}
        >
          <Typography
            sx={{
              lineHeight: '18px',
              fontSize: '16px',
              fontWeight: '700',
              marginTop: '3px',
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              lineHeight: '18px',
              fontSize: '12px',
              fontWeight: '300',
              marginTop: '3px',
            }}
          >
            {period}
          </Typography>

          <Typography
            sx={{
              lineHeight: '22px',
              fontSize: '13px',
              fontWeight: '400',
            }}
          >
            {role}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '34px',
            right: '15px',
          }}
        >
          <Typography
            sx={{
              lineHeight: '15px',
              fontSize: '11px',
              fontWeight: '400',
              marginRight: '10px',
            }}
          >
            Ver detalle
          </Typography>
          <img src='/icons/experienceItemIcon.svg' alt='' />
        </Box>
      </Box>
    </Link>
  );
};

export default ExperienceItem;
