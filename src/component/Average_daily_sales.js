import React from 'react'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
function Average_daily_sales() {
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
                  $28,450
                </Typography>
                <Stack direction="row" sx={{ width: '100%' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                      data={[3, 5, 7, 4, 6]}
                      height={100}
                      curve="natural"
                      area
                    />
                  </Box>
                </Stack>
              </CardContent>
              
            </Card>
            
    </div>
  )
}

export default Average_daily_sales