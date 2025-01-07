import React from 'react'
import Sidebar from '../component/Sidebar';
import {
  TextField,Button,Checkbox,FormControlLabel,FormControl,FormLabel,Radio,RadioGroup,Select,MenuItem,Typography,Box,TextareaAutosize,InputLabel
} from "@mui/material";
import SignIn from './SignIn';



function Analytics() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };
  return (
    <div>
      <Sidebar />

      {/* <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width:'50%' , mx: "auto", p: 3, boxShadow: 3, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom align="center">
        School Admission Form
      </Typography>

      <TextField
        label="Student's Name"
        name="student_name"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Father's Name"
        name="father_name"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mother's Name"
        name="mother_name"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date of Birth"
        name="dob"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />

      <FormControl margin="normal">
        <FormLabel>Gender</FormLabel>
        <RadioGroup row name="gender">
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
          />
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
  defaultValue="" 
  label="Please Enter Your Division"
>
  <MenuItem value="" disabled>Please Select</MenuItem>
  <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
  <MenuItem value="B">B</MenuItem>
  <MenuItem value="C">C</MenuItem>
</Select>
    </FormControl>

    <FormControl fullWidth margin="normal">
  
  <InputLabel id="district-label">Please Enter Your district</InputLabel>

  <Select
  labelId="division-label"
  name="division"
  defaultValue=""  
  label="Please Enter Your Division"
>
  <MenuItem value="" disabled>Please Select</MenuItem>
  <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
  <MenuItem value="B">B</MenuItem>
  <MenuItem value="C">C</MenuItem>
</Select>
</FormControl>
 
      <TextareaAutosize
        name="address"
        minRows={3}
        placeholder="Address"
        style={{ width: "100%", marginTop: "16px", padding: "8px" }}
      />

      <Typography variant="h6" gutterBottom>
        Permanent Address
      </Typography>
      <FormControl fullWidth margin="normal">
  
  <InputLabel id="division-label">Please Enter Your Division</InputLabel>

  <Select
  labelId="division-label"
  name="division"
  defaultValue=""  
  label="Please Enter Your Division"
>
  <MenuItem value="" disabled>Please Select</MenuItem>
  <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
  <MenuItem value="B">B</MenuItem>
  <MenuItem value="C">C</MenuItem>
</Select>
</FormControl>

<FormControl fullWidth margin="normal">

<InputLabel id="district-label">Please Enter Your district</InputLabel>

<Select
  labelId="division-label"
  name="division"
  defaultValue=""  
  label="Please Enter Your Division"
>
  <MenuItem value="" disabled>Please Select</MenuItem>
  <MenuItem value="RAJASTHAN">RAJASTHAN</MenuItem>
  <MenuItem value="B">B</MenuItem>
  <MenuItem value="C">C</MenuItem>
</Select>
</FormControl>

 
      <TextareaAutosize
        name="present_address"
        minRows={3}
        placeholder="Address"
        style={{ width: "100%", marginTop: "16px", padding: "8px" }}
      />

      <TextField
        label="Religion"
        name="religion"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mobile No."
        name="mobile_no"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Aadhaar No."
        name="aadhar_no"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Pre School Name"
        name="pre_school_name"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={<Checkbox name="agree" />}
        label="I hereby declare that I will obey all rules and regulations."
      />

      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box> */}
   
    </div>
  )
}

export default Analytics