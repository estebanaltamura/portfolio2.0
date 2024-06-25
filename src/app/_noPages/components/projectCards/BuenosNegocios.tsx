import { Box } from '@mui/material';
import Link from 'next/link';

const BuenosNegocios = () => {
  return (
    <Link href='project-detail/buenosNegocios'>
      <Box
        sx={{
          width: '100%',
          maxHeight: '133px',
          borderRadius: '10px',
          backgroundColor: '#494949',
          marginBottom: '10px',
        }}
      >
        <img
          src='/cardCovers/buenosNegociosCover.svg'
          alt=''
          style={{ width: '100%' }}
        />
      </Box>
    </Link>
  );
};

export default BuenosNegocios;
