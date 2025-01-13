import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import   { useState, useEffect } from 'react';


function Sales_overview() {
  const [saleoverviewData, setData] = useState({});

     useEffect(() => {
         fetch('http://localhost:3000/api/saleoverview' ) 
           .then((response) => response.json())
           .then((data) => setData(data))
           .catch((error) => console.error('Error fetching data:', error));
       }, []);
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap', 
          gap: 2,
        }}
      >
        <Card
          sx={{
            width: 400,
            height: 250, 
            background: '#1a1a2e', 
            color: '#fff', 
            borderRadius: 4, 
            padding: 2, 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CardContent>
         
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Sales Overview
            </Typography>
          
            <Typography variant="h4" fontWeight="bold">
              $  {saleoverviewData.saleoverview}
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: '#00ff99',
                marginBottom: 2,
                fontWeight: 'bold',
              }}
            >
              +{saleoverviewData.increase}%
            </Typography>
          
            <BarChart
              series={[
                { data: [saleoverviewData.itemA], stack: 'A' },
                { data: [saleoverviewData.itemB], stack: 'A' },
              ]}
              width={300} 
              height={110} 
              layout="horizontal"
              leftAxis={null}
              bottomAxis={null}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Sales_overview;
