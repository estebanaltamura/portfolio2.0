import { Box, Typography } from '@mui/material';

interface IExperienceDetailImageProps {
  src: string;
  width: number;
  marginBottom: number;
  marginTop: number;
  imageDescription: string;
}

const ExperienceDetailImage: React.FC<IExperienceDetailImageProps> = ({
  src,
  width = 100,
  marginBottom = 10,
  marginTop = 10,
  imageDescription,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: `${width}%`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <img src={src} alt={imageDescription} style={{ width: `${width}%` }} />
      <Typography
        sx={{
          color: 'white',
          fontSize: '12px',
          marginTop: '3px',
          textAlign: 'center',
        }}
      >
        {imageDescription}
      </Typography>
    </Box>
  );
};

export default ExperienceDetailImage;
