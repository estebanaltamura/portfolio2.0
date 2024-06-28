import { Box, Typography, useMediaQuery } from '@mui/material';

interface IExperienceDetailImageProps {
  src: string;
  srcMobile?: string;
  width?: string;
  height?: string;
  marginBottom?: number;
  marginTop?: number;
  imageDescription?: string;
  widthImageDescription?: string;
}

const ExperienceDetailImage: React.FC<IExperienceDetailImageProps> = ({
  src,
  srcMobile,
  width = 'auto',
  height = 'auto',
  marginBottom = 10,
  marginTop = 10,
  imageDescription,
  widthImageDescription,
}) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
        width: 'fit-content',
        maxWidth: '100%',
        height: 'fit-content',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        borderRadius: '4px',
      }}
    >
      <img
        src={!isDesktop && srcMobile ? srcMobile : src}
        alt={imageDescription ? imageDescription : 'An image'}
        style={{
          height: height,
          width: width,
          maxWidth: '100%',
          borderRadius: '4px',
        }}
      />
      {imageDescription && (
        <Typography
          sx={{
            width: widthImageDescription ? widthImageDescription : 'auto',
            color: 'white',
            fontSize: '13px',
            margin: '4px auto 0 auto',
            textAlign: 'center',
            fontStyle: 'italic',
            padding: '0 10px',
          }}
        >
          {imageDescription}
        </Typography>
      )}
    </Box>
  );
};

export default ExperienceDetailImage;
