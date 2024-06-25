import { Box } from '@mui/material';
import Link from 'next/link';

const CryptoCard = () => {
  return (
    <Link href='project-detail/buenosNegocios'>
      <Box
        sx={{
          width: '100%',
          height: 'fit-content',
          borderRadius: '10px',
          backgroundColor: '#494949',
          marginBottom: '10px',
        }}
      >
        <img
          src='/cardCovers/cryptoCover.svg'
          alt=''
          style={{ width: '100%' }}
        />
      </Box>
    </Link>
  );
};

export default CryptoCard;
