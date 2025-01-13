import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import   { useState, useEffect } from 'react';

function WebsiteAnalytics() {
  const [analyticsData, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/analytics' ) 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <Box
     
    >
      <Card
        sx={{
          width: '400px',
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          borderRadius: '16px',
          color: '#fff',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
          padding: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Website Analytics
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
            Total {analyticsData.conversionRate} Conversion Rate
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              Spending
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'space-between',
                textAlign: 'center',
              }}
            >
              {[
                { label: 'Spend', value:  analyticsData.spend },
                { label: 'Order Size', value:  analyticsData.orderSize },
                { label: 'Order', value:  analyticsData.order },
                { label: 'Items', value: analyticsData.items  },
              ].map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.value}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default WebsiteAnalytics;
