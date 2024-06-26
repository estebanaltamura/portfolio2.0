import { Box, Typography } from '@mui/material';

interface IExperienceDetailVideoProps {
  src: string;
  width?: string;
  height?: string;
  marginBottom?: number;
  marginTop?: number;
  imageDescription?: string;
  widthImageDescription?: string;
}

const ExperienceDetailVideo: React.FC<IExperienceDetailVideoProps> = ({
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
      <iframe
        src={src}
        style={{ width: width, height: height, border: 'none' }}
      ></iframe>
      {widthImageDescription && (
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

export default ExperienceDetailVideo;
