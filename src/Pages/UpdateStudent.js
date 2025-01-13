import React, { useState, useEffect } from 'react';
import {  useParams , useNavigate} from 'react-router-dom'; 
import "./Layouts.css";
import Sidebar from "../component/Sidebar";
import {
  TextField, Button, Checkbox, FormControlLabel, FormControl, FormLabel,
  Radio, RadioGroup, Select, MenuItem, Typography, Box, TextareaAutosize, InputLabel
} from "@mui/material";

function Layouts() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    student_name: "",
    father_name: "",
    mother_name: "",
    dob: "",
    gender: "",
    division: "",
    district: "",
    address: "",
    religion: "",
    mobile_no: "",
    aadhar_no: "",
    pre_school_name: "",
    agree: false,
  });

 
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/studentdata/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data.data))
        .catch((error) => console.log('Error fetching data:', error));
    }
  }, [id]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.student_name || !formData.father_name) {
      alert('Please fill all required fields');
      return;
    }

  
    fetch(`http://localhost:3000/api/studentdata/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
      
        alert('Student data updated successfully');
        navigate('/analytics');
      
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        alert('Error updating student data');
      });
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

        {/* Student's Name */}
        <TextField
          label="Student's Name"
          name="student_name"
          value={formData.student_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        
        {/* Father's Name */}
        <TextField
          label="Father's Name"
          name="father_name"
          value={formData.father_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Mother's Name */}
        <TextField
          label="Mother's Name"
          name="mother_name"
          value={formData.mother_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Date of Birth */}
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleInputChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
        />

        {/* Gender */}
        <FormControl margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        {/* Division */}
        <Typography variant="h6" gutterBottom>
          Present Address
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="division-label">Please Enter Your Division</InputLabel>
          <Select
            labelId="division-label"
            name="division"
            value={formData.division}
            onChange={handleInputChange}
            label="Please Enter Your Division"
          >
            <MenuItem value="" disabled>Please Select</MenuItem>
            <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </Select>
        </FormControl>

        {/* District */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="district-label">Please Enter Your District</InputLabel>
          <Select
            labelId="district-label"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            label="Please Enter Your District"
          >
            <MenuItem value="" disabled>Please Select</MenuItem>
            <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </Select>
        </FormControl>

        {/* Address */}
        <TextareaAutosize
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          minRows={3}
          placeholder="Address"
          style={{ width: "100%", marginTop: "16px", padding: "8px" }}
        />

        {/* Religion */}
        <TextField
          label="Religion"
          name="religion"
          value={formData.religion}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Mobile Number */}
        <TextField
          label="Mobile No."
          name="mobile_no"
          value={formData.mobile_no}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Aadhaar Number */}
        <TextField
          label="Aadhaar No."
          name="aadhar_no"
          value={formData.aadhar_no}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Pre School Name */}
        <TextField
          label="Pre School Name"
          name="pre_school_name"
          value={formData.pre_school_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Agree Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleCheckboxChange}
            />
          }
          label="I hereby declare that I will obey all rules and regulations."
        />

        {/* Submit Button */}
        <Box textAlign="center" mt={2}>
        
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
         
        </Box>
      </Box>
    </div>
  );
}

export default Layouts;
