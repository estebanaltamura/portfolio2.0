import { Box, Typography } from '@mui/material';

interface IExperienceDetailImageProps {
  src: string;
  width?: string;
  height?: string;
  marginBottom?: number;
  marginTop?: number;
  imageDescription?: string;
  widthImageDescription?: string;
}

const ExperienceDetailImage: React.FC<IExperienceDetailImageProps> = ({
  src,
  width = 'auto',
  height = 'auto',
  marginBottom = 10,
  marginTop = 10,
  imageDescription,
  widthImageDescription,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <img
        src={src}
        alt={imageDescription ? imageDescription : 'An image'}
        style={{ height: height, width: width }}
      />
      {imageDescription && (
        <Typography
          sx={{
            width: widthImageDescription ? widthImageDescription : 'auto',
            color: 'white',
            fontSize: '11px',
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
