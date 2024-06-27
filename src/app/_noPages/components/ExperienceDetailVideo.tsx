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
  const [playingIframe, setPlayingIframe] = useState<HTMLIFrameElement | null>(
    null
  );

  const updateViewportCenter = (iframes: HTMLIFrameElement[]) => {
    const y = window.innerHeight / 2 + window.scrollY;

    iframes.forEach((iframe) => {
      const rect = iframe.getBoundingClientRect();
      const iframeY = rect.top + window.scrollY;

      if (Math.abs(iframeY - y) < 50) {
        if (playingIframe !== iframe) {
          if (playingIframe) {
            const prevPlayer = new Vimeo(playingIframe);
            prevPlayer.pause();
          }
          const newPlayer = new Vimeo(iframe);
          newPlayer.play();
          setPlayingIframe(iframe);
        }
      }
    });
  };

  useEffect(() => {
    if (window) setIsWindowLoaded(true);
  });

  useEffect(() => {
    if (isWindowLoaded) {
      const iframes = Array.from(document.getElementsByTagName('iframe'));

      iframes.forEach((iframe) => {
        if (iframe.src.includes('player.vimeo.com')) {
          const player = new Vimeo(iframe);

          player.setVolume(0);
          player.setLoop(true);
        }
      });

      const handleScrollOrResize = () => updateViewportCenter(iframes);

      updateViewportCenter(iframes);
      console.log(iframes);
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
        height: 'fit-content',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <iframe
        src={src}
        style={{
          width: width,
          maxWidth: '100%',
          height: height,
          border: 'none',
        }}
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
