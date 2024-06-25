'use client';
import { experiences } from '@/JSONs/JSONprojects';
import ExperienceDetailImage from '@/app/_noPages/components/ExperienceDetailImage';
import ExperienceDetailVideo from '@/app/_noPages/components/ExperienceDetailVideo';
import { Box, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ExperienceDetail = () => {
  const router = useRouter();
  const params = useParams();
  const id: string | string[] = params.id;

  const backToHomeButtonHandler = () => {
    router.push('/');
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (!id || typeof id !== 'string') {
    router.push('/not-found');

    return;
  }

  const isKnownId = experiences.map((experience) => experience.id).includes(id);

  if (!isKnownId) {
    router.push('/not-found');

    return;
  }

  const experience = experiences.find((experience) => {
    return experience.id === id;
  });

  if (!experience) {
    router.push('/error');

    return;
  }

  const period = experience.period;
  const name = experience.name;
  const role = experience.role;
  const details = experience.details;

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        top: '-30px',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {/*Details*/}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '672px',
          marginTop: '60px',
          '@media(min-width: 1200px)': {
            marginTop: '0px',
          },
        }}
      >
        {/*Back button*/}
        <Box
          onClick={backToHomeButtonHandler}
          sx={{
            display: 'flex',
            position: 'absolute',
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            top: '-50px',
            left: '0px',
            borderRadius: '100px',
            border: '1px solid #8C8C8C',
            cursor: 'pointer',
            '@media(min-width: 1200px)': {
              top: '20px',
              left: '-160px',
            },
          }}
        >
          <svg
            width='17'
            height='17'
            color='white'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m12 19-7-7 7-7'></path>
            <path d='M19 12H5'></path>
          </svg>
        </Box>

        <Typography
          variant='h1'
          sx={{
            fontSize: '30px',
            color: 'white',
            fontWeight: '600',
            marginTop: '25px',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '14px',
            color: '#8C8C8C',
            marginTop: '0px',
          }}
        >
          {period}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '17px',
            color: 'white',
            marginTop: '8px',
            fontWeight: '600',
          }}
        >
          {role}
        </Typography>
        {details &&
          details.map((detail, index) => {
            if (typeof detail === 'string') {
              return (
                <Typography
                  key={index}
                  variant='body1'
                  sx={{
                    fontSize: '16px',
                    color: '#bababa',
                    lineHeight: '25px',
                    marginTop: index === 0 ? '40px' : '20px',
                  }}
                >
                  {detail}
                </Typography>
              );
            }
            if (detail.type === 'image') {
              return (
                <ExperienceDetailImage
                  key={index}
                  src={detail.src}
                  width={detail.width}
                  imageDescription={detail.imageDescription}
                  marginTop={detail.marginTop}
                  marginBottom={detail.marginBottom}
                />
              );
            }

            if (detail.type === 'video') {
              return (
                <ExperienceDetailVideo
                  key={index}
                  src={detail.src}
                  width={detail.width}
                  imageDescription={detail.imageDescription}
                  marginTop={detail.marginTop}
                  marginBottom={detail.marginBottom}
                />
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default ExperienceDetail;

//http://localhost:3000/experience-detail/456
