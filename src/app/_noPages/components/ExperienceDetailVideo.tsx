import { Box, Typography } from '@mui/material';

interface IExperienceDetailVideoProps {
  src: string;
  width: number;
  marginBottom: number;
  marginTop: number;
  imageDescription: string;
}

const ExperienceDetailVideo: React.FC<IExperienceDetailVideoProps> = ({
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
      <iframe src={src} style={{ height: '500px', border: 'none' }}></iframe>
      <Typography
        sx={{
          color: 'white',
          fontSize: '11px',
          marginTop: '2px',
          textAlign: 'center',
          fontStyle: 'italic',
          padding: '0 10px',
        }}
      >
        {imageDescription}
      </Typography>
    </Box>
  );
};

export default ExperienceDetailVideo;
