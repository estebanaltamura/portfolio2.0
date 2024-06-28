'use client';

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Vimeo from '@vimeo/player';

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
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<HTMLVideoElement | null>(
    null
  );

  const updateViewportCenter = (videos: HTMLVideoElement[]) => {
    const y = window.innerHeight / 2 + window.scrollY;

    videos.forEach((video) => {
      const rect = video.getBoundingClientRect();
      const videoY = rect.top + window.scrollY;

      if (Math.abs(videoY - y) < 50) {
        if (playingVideo !== video) {
          if (playingVideo) {
            playingVideo.pause();
          }
          video.play();
          setPlayingVideo(video);
        }
      }
    });
  };

  useEffect(() => {
    if (window) setIsWindowLoaded(true);
  });

  useEffect(() => {
    if (isWindowLoaded) {
      const videos = Array.from(document.getElementsByTagName('video'));

      const handleScrollOrResize = () => updateViewportCenter(videos);

      updateViewportCenter(videos);
      window.addEventListener('scroll', handleScrollOrResize);
      window.addEventListener('resize', handleScrollOrResize);
      return () => {
        window.removeEventListener('scroll', handleScrollOrResize);
        window.removeEventListener('resize', handleScrollOrResize);
      };
    }
  }, [isWindowLoaded]);

  if (!isWindowLoaded) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
        width: '100%',
        maxHeight: height,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <video
        autoPlay
        controls
        muted
        src={src}
        style={{
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          border: 'none',
        }}
      ></video>
      {widthImageDescription && (
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

export default ExperienceDetailVideo;
