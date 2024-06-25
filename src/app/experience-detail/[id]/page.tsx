'use client';
import { experiences } from '@/JSONs/JSONprojects';
import { Box, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';

const ExperienceDetail = () => {
  const router = useRouter();
  const params = useParams();
  const id: string | string[] = params.id;

  const backToHomeButtonHandler = () => {
    router.push('/');
  };

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

  console.log(experience);

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
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
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
            marginTop: '2px',
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
            console.log(detail.slice(0, 4));
            console.log(detail.slice(4));
            if (detail.slice(0, 4) === 'src:')
              return (
                <img
                  key={index}
                  src={detail.slice(4)}
                  alt=''
                  style={{ width: '100%', margin: '25px 0 10px 0' }}
                />
              );
            return (
              <Typography
                key={index}
                variant='body1'
                sx={{
                  fontSize: '16px',
                  color: '#bababa',
                  lineHeight: '23px',
                  marginTop: '50px',
                }}
              >
                {detail}
              </Typography>
            );
          })}
      </Box>
    </Box>
  );
};

export default ExperienceDetail;

//http://localhost:3000/experience-detail/456
