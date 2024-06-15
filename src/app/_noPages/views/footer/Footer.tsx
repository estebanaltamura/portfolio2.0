import { Box } from '@mui/material';
import { footerHeight } from '../../config/layoutConfig';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: `${footerHeight}px`,
        backgroundColor: 'black',
      }}
    >
      FOOTER
    </Box>
  );
};

export default Footer;
