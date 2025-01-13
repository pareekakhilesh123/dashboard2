import React from 'react'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import   { useState, useEffect } from 'react';

import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
function Average_daily_sales() {
   const [averagesalesData, setData] = useState({});
   useEffect(() => {
       fetch('http://localhost:3000/api/averagesales' ) 
         .then((response) => response.json())
         .then((data) => setData(data))
         .catch((error) => console.error('Error fetching data:', error));
     }, []);
  return (
    <div> 
  
     <Card
              sx={{
                 width:'400px',
                background: '#1a1a2e',
                borderRadius: '16px',
                color: '#fff',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
               padding: 2
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Average Daily Sales
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  ${averagesalesData.sale}
                </Typography>
                {/* <Stack direction="row" sx={{ width: '100%' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                      data={averagesalesData.data}
                      height={100}
                      curve="natural"
                      area
                    />
                  </Box>
                </Stack> */}
              </CardContent>
              
            </Card>
            
    </div>
  )
}

export default Average_daily_sales