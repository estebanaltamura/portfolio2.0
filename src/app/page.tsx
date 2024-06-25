'use client';

import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Profile from './_noPages/views/home/profile/Profile';
import Stack from './_noPages/views/home/stack/Stack';
import WorkExperiences from './_noPages/views/home/workExperiences/WorkExperiences';
import Projects from './_noPages/views/home/projects/Projects';

const Home = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);

  return (
    <>
      <Profile />
      <Projects />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 'fit-content',
          gap: '35px',
          marginTop: '35px',

          '@media(max-width: 1200px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '35px',
          },
        }}
      >
        <WorkExperiences />
        <Stack />
      </Box>
    </>
  );
};

export default Home;
