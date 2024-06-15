import { Box } from '@mui/material';
import { headerHeight } from '../../config/layoutConfig';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: `${headerHeight}px`,
        backgroundColor: 'black',
      }}
    >
      HEADER
    </Box>
  );
};

export default Header;
