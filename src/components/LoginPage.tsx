
import { Box,  Paper, TextField } from "@mui/material";
import Button from "@mui/material/Button/Button";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import React, { useState } from "react";

export interface DataPass{
  name:string;
  email:string;
  password:string;
  phone:string;
}
const initialFormError : DataPass = {
    name: "",
    email:"",
    password:"" ,
    phone:""
}
export const LoginPage = () => {
    const [formData, setFormData] = useState <DataPass>(initialFormError);
    const [errors , setErrors] = useState <DataPass> (initialFormError)
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = event.target
    setFormData({
      ...formData,
     [name] : value
    });
  }
    const validate = () => {
    let newErrors: DataPass = {...initialFormError}

      if (!formData.name) {
        newErrors.name = "Name is required"
      }
      
      if (!formData.email.includes("@")){
        newErrors.email = "Email is invalid"
      } 
      else if (!/\S+@\S+\.\S+/.test(formData.email))
      
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length< 6) {
        newErrors.password = " Password must be 6 charachters"
      }
      if (!formData.phone) {
        newErrors.phone = "Mobile number is required";
       } else if(!/^\d{10}$/.test(formData.phone)) {
         newErrors.phone = "Mobile number must be 10 digits";  
       }

       setErrors(newErrors);
       return Object.values(newErrors).every((val) => val === '');
      };
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if (validate()) {
          console.log('Form is valid:', formData);
        } else {
          console.log('Form is invalid');
        }
      }
      return (
     
        <Box sx={{
          display : "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%"
         }}>
       <Paper sx={{
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth : 500,
        backgroundColor: ""
       }}>

      <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        
        <TextField 
         label="name" 
         name="name"
         value={formData.name} 
         onChange={handleChange}
         error = {!!errors.name}
         helperText = {errors.name}
        />
      
       <TextField 
        label="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error = {!!errors.email}
        helperText = {errors.email}
        />
    
        <TextField 
        label="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error ={!!errors.password}
        helperText ={errors.password}
        />
    
        <TextField
          label="phone"
          value={formData.phone}
          onChange={handleChange}
          error = {!!errors.phone}
          helperText = {errors.phone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />
     
     
      <Button type="submit">Login</Button>
    </form>
       </Paper> 

        </Box>
         );
};

export default LoginPage;