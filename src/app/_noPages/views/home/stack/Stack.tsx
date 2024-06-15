import { Box } from '@mui/material';
import { stack } from '@/JSONs/JSONprojects';

const Stack = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '421px',
        height: '356px',
        padding: '15px 23px 48px 23px',
        border: '1px solid #494949',
        borderRadius: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
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
                  ? 'calc(50% - 6.66px)'
                  : 'calc(25% - 7.5px)', // Ajusta el ancho para 4 iconos por fila
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.3)', // Borde con color fijo
                '@media (min-width: 450px)': {
                  width: stackItem.doubleWidth
                    ? 'calc(50% - 6.66px)'
                    : 'calc(25% - 7.5px)', // Ajusta el ancho para 4 iconos por fila
                },
                '@media (min-width: 600px)': {
                  width: stackItem.doubleWidth
                    ? 'calc(40% - 7.5px)'
                    : 'calc(20% - 8px)', // Ajusta el ancho para 4 iconos por fila
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
