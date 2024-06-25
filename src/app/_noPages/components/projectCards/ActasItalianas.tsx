import { Box } from '@mui/material';
import Link from 'next/link';

const ActasItalianas = () => {
  return (
    <Link href='project-detail/actas'>
      <Box
        sx={{
          width: '100%',
          maxHeight: '175px',
          borderRadius: '10px',
          backgroundColor: '#494949',
          marginBottom: '10px',
        }}
      >
        <img
          src='/cardCovers/actasCover.svg'
          alt=''
          style={{ width: '100%' }}
        />
      </Box>
    </Link>
  );
};

export default ActasItalianas;
