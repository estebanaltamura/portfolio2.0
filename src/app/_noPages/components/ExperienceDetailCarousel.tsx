'use client';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';

interface IExperienceDetailImageProps {
  srcImages: string[];
  width?: string;
  height?: string;
  marginBottom?: number;
  marginTop?: number;
  imageDescription?: string[];
  widthImageDescription?: string;
  interval?: number;
}

const ExperienceDetailCarousel: React.FC<IExperienceDetailImageProps> = ({
  srcImages,
  width = 'auto',
  height = 'auto',
  marginBottom = 10,
  marginTop = 10,
  imageDescription,
  widthImageDescription,
  interval = 2500,
}) => {
  return (
    <Carousel
      interval={interval}
      indicators={false}
      navButtonsAlwaysInvisible={true}
      sx={{
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        maxWidth: width,
      }}
    >
      {srcImages.map((item, index) => (
        <>
          <Paper
            key={index}
            sx={{
              width: '100%',
              height: '100%',
              margin: '0 auto',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
            }}
          >
            <img
              src={item}
              alt={imageDescription ? imageDescription[index] : 'An image'}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </Paper>

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
              {imageDescription[index]}
            </Typography>
          )}
        </>
      ))}
    </Carousel>
  );
};

export default ExperienceDetailCarousel;
