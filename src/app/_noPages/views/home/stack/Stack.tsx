import { Box, Typography } from '@mui/material';
import { stack } from '@/JSONs/JSONprojects';

const Stack = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '467px',
        height: 'fit-content',
        padding: '16px 24px 40px 24px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          padding: '16px 32px 40px 32px',
        },
      }}
    >
      {/*Header*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '55px',
          gap: '11px',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '20px', height: '20px' }}>
          <img src='/icons/stackIcon.svg' alt='' />
        </Box>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginTop: '2px',
          }}
        >
          Stack
        </Typography>
      </Box>
      {/*Stack grid*/}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '401px',
          height: 'fit-content',
          gap: '10px',
          marginTop: '12px',
        }}
      >
        {stack.map((stackItem, index) => {
          return (
            <Box
              key={index}
              sx={{
                height: '81px',
                width: stackItem.doubleWidth ? '40.7%' : '26%',
                padding: '11px',
                borderRadius: '8px',
                boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '@media(min-width: 380px)': {
                  padding: '13px',
                },
                '@media(min-width: 1200px)': {
                  width: stackItem.doubleWidth ? '165px' : '108px',
                },
                '&:hover': {
                  animation: 'pulse 0.65s',
                  boxShadow: '0 0 0 0.3em transparent',
                },
              }}
            >
              <img
                src={stackItem.iconSrc}
                alt=''
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Stack;
