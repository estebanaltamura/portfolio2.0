import { Box } from '@mui/material';
import Link from 'next/link';

const Plumarii = () => {
  return (
    <Link href='project-detail/plumarii'>
      <Box
        sx={{
          width: '100%',
          maxHeight: '233px',
          borderRadius: '10px',
          backgroundColor: '#494949',
          marginBottom: '10px',
        }}
      >
        <img
          src='/cardCovers/plumariiCover.svg'
          alt=''
          style={{ width: '100%' }}
        />
      </Box>
    </Link>
  );
};

export default Plumarii;
