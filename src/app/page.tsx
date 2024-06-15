import { Box } from '@mui/material';
import Profile from './_noPages/views/home/profile/Profile';
import Projects from './_noPages/views/home/projects/Projects';
import WorkExperiences from './_noPages/views/home/workExperiences/WorkExperiences';
import Stack from './_noPages/views/home/stack/Stack';

const Home = () => {
  return (
    <>
      <Profile />
      <Projects />
      <Box
        sx={{
          display: 'flex',
          maxWidth: '100%',
          gap: '19px',
          marginTop: '60px',
        }}
      >
        <WorkExperiences />
        <Stack />
      </Box>
    </>
  );
};

export default Home;
