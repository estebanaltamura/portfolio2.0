import { Box, Typography } from '@mui/material';
import { stack } from '@/JSONs/JSONprojects';

const Stack = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '421px',
        height: 'fit-content',
        padding: '16px 16px 35px 16px',
        border: '1px solid #494949',
        borderRadius: '20px',
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
          paddingLeft: '10px',
        }}
      >
        <Box sx={{ width: '20px', height: '20px' }}>
          <img src='/icons/stackIcon.svg' alt='' />
        </Box>
        <Typography
          sx={{
            fontSize: '16px',
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
          maxWidth: '342px',
          height: 'fit-content',
          gap: '10px',
          marginTop: '25px',
        }}
      >
        {stack.map((stackItem, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: stackItem.doubleWidth
                  ? 'calc(50% - 6px)'
                  : 'calc(25% - 8px)', // Ajusta el ancho para 4 iconos por fila
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.3)', // Borde con color fijo

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
