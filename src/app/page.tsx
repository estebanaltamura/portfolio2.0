'use client';

import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Profile from './_noPages/views/home/profile/Profile';
import Stack from './_noPages/views/home/stack/Stack';
import WorkExperiences from './_noPages/views/home/workExperiences/WorkExperiences';

const Home = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Profile />
      {/* <Projects /> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 'fit-content',
          gap: '19px',
          marginTop: '60px',

          '@media(max-width: 1200px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
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
