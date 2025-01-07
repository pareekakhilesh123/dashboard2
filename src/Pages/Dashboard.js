import React from 'react';
import Sidebar from '../component/Sidebar';
import './Dashboard.css';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SmallCard from '../component/SmallCard';
import SupportTrackerCard from '../component/SupportTrackerCard';
import { BarChart } from '@mui/x-charts/BarChart';
import Website_Analytics from '../component/Website_Analytics';
import Average_daily_sales from '../component/Average_daily_sales';
import Sales_overview from '../component/Sales_overview';

function Dashboard() {
  return (
    <div className="sideNav">
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />
        <Box sx={{ width: '100%', paddingTop: 2 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>

          {/* Main Content */}
          <Box
            sx={{
              display: 'flex',
              // flexWrap: 'wrap',
              gap:'20px',
              
            }}
          >
            {/* Card 1: Website Analytics */}
            <Website_Analytics />

            {/* Card 2: Average Daily Sales */}
            <Average_daily_sales />

            {/* Card 3: Sales Overview */}
            <Sales_overview />

            {/* Card 4: Earning Reports */}
            {/* <Card
              sx={{
                maxWidth: 400,
                background: 'blue',
                borderRadius: '16px',
                color: '#fff',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                overflow: 'visible',
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Earning Reports
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                  Weekly Earnings Overview
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="h2" fontWeight="bold">
                    $468
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="success.main"
                  >
                    +4.2%
                  </Typography>
                  <Box sx={{ marginTop: 1 }}>
                    <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                      You are informed of this week compared to last week
                    </Typography>
                  </Box>
                </Box>
              </CardContent> */}

              {/* <BarChart
                xAxis={[
                  {
                    scaleType: 'band',
                    data: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                  },
                ]}
                series={[{ data: [4, 3, 5, 2, 10, 5, 2] }]}
                height={300}
                width={250}
                borderRadius={10}
              />
              <SmallCard earnings={545.69} profit={256.34} expense={74.19} />
            </Card> */}

            {/* Card 5: Support Tracker */}
            {/* <SupportTrackerCard /> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
