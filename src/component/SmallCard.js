import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
 


const SmallCard = ({ earnings, profit, expense }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{
        padding: 2,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#1e1e2f',
        color: 'white',
        borderRadius: '10px'
        
      }}
    >
     
      <Box sx={{ textAlign: 'center'  }}>
        <Typography variant="subtitle1" color="textSecondary">
          Earnings
        </Typography>
        <Typography variant="h5">${earnings}</Typography>
        
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle1" color="textSecondary">
          Profit
        </Typography>
        <Typography variant="h5">${profit}</Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle1" color="textSecondary">
          Expense
        </Typography>
        <Typography variant="h5">${expense}</Typography>
      </Box>
       
    </Paper>
  );
};

export default SmallCard;
