import React, { useState , useEffect } from 'react';
import "./Layouts.css";
import Sidebar from "../component/Sidebar";
import {
  TextField, Button, Checkbox, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Select, MenuItem, Typography, Box, TextareaAutosize, InputLabel
} from "@mui/material";

function Layouts() {
  
  const [formData, setFormData] = useState({
    student_name: '',
    father_name: '',
    mother_name: '',
    dob: '',
    gender: '',
    division: '',
    district: '',
    address: '',
   religion: '',
    mobile_no: '',
    aadhar_no: '',
    pre_school_name: '',
    agree: false
  });

 

  const handleSubmit = (e) => {
   
    e.preventDefault();
    console.log(formData)
    fetch("http://localhost:3000/api/studentdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then((result)=>{
      // console.warn("result", result);
      result.json().then((resp)=>{
        console.warn("res" ,resp);
        
      })
      

    }

     
      
    )
    
  };

  return (
    <div>
      <Sidebar />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: '50%', mx: "auto", p: 3, boxShadow: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" gutterBottom align="center">
          School Admission Form
        </Typography>

        <TextField
          label="Student's Name"
          name="student_name"
          value={formData.student_name}
          onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Father's Name"
          name="father_name"
          value={formData.father_name}
          onChange={(e) => setFormData({ ...formData, father_name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mother's Name"
          name="mother_name"
          value={formData.mother_name}
          onChange={(e) => setFormData({ ...formData, mother_name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
        />

        <FormControl margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup row name="gender" value={formData.gender}  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}  >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <Typography variant="h6" gutterBottom>
          Present Address
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="division-label">Please Enter Your Division</InputLabel>
          <Select
            labelId="division-label"
            name="division"
            value={formData.division}
            onChange={(e) => setFormData({ ...formData, division: e.target.value })}
            label="Please Enter Your Division"
          >
            <MenuItem value="" disabled>Please Select</MenuItem>
            <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="district-label">Please Enter Your District</InputLabel>
          <Select
            labelId="district-label"
            name="district"
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            label="Please Enter Your District"
          >
            <MenuItem value="" disabled>Please Select</MenuItem>
            <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </Select>
        </FormControl>

        <TextareaAutosize
          name="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          minRows={3}
          placeholder="Address"
          style={{ width: "100%", marginTop: "16px", padding: "8px" }}
        />

       

        <TextField
          label="Religion"
          name="religion"
          value={formData.religion}
          onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mobile No."
          name="mobile_no"
          value={formData.mobile_no}
            onChange={(e) => setFormData({ ...formData, mobile_no: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Aadhaar No."
          name="aadhar_no"
          value={formData.aadhar_no}
            onChange={(e) => setFormData({ ...formData, aadhar_no: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pre School Name"
          name="pre_school_name"
          value={formData.pre_school_name}
            onChange={(e) => setFormData({ ...formData, pre_school_name: e.target.value })}
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          control={<Checkbox name="agree" checked={formData.agree}  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}  />}
          label="I hereby declare that I will obey all rules and regulations."
        />

        <Box textAlign="center" mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Layouts;
