import React from "react";
import { Card, CardContent, Typography,    Box } from "@mui/material";
import Stack from '@mui/material/Stack';
// import { Gauge } from '@mui/x-charts/Gauge';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

const SupportTrackerCard = () => {


  return (
    
    <Card
      sx={{
        backgroundColor: "#1a1a2e",
        color: "#fff",
        borderRadius: 4,
        padding: 3,
         width: 450,
        maxHeight:450,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <CardContent>
       
        <Typography variant="h6" fontWeight="bold">
          Support Tracker
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Last 7 Days
        </Typography>

     
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ marginTop: 2, marginBottom: 1 }}
        >
          164
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Total Tickets
        </Typography>

        
        <Box sx={{ marginTop: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "#7b61ff",
                borderRadius: "50%",
                marginRight: 1,
              }}
            />
            <Typography variant="body2" sx={{ flex: 1 }}>
              New Tickets
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              142
            </Typography>
          </Box>
 
 {/* <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
     
       <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
     </Stack> */}
     <GaugeContainer
      width={200}
      height={200}
      startAngle={-110}
      endAngle={110}
      value={30}
      
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SupportTrackerCard;
