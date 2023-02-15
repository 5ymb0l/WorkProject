import React, { useState } from 'react';
import { TextField, Button, Box, Paper, InputAdornment, Typography, Link, TextFieldProps, styled, OutlinedInputProps,  } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
interface FormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const initialFormValues: FormValues = {
  name: '',
  email: '',
  password: '',
  phone: ''
};
const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    // '&:hover': {
    //   backgroundColor: 'transparent',
    // },
    // '&.Mui-focused': {
    //   backgroundColor: 'transparent',
    //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
    //   borderColor: theme.palette.primary.main,
    // },
  },
}));

const Form = () => {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormValues>(initialFormValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const validateForm = () => {
    let newErrors: FormValues = { ...initialFormValues };
    if (!values.name) {
      newErrors.name = 'Name is required';
    }
    if (!values.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!values.password) {
      newErrors.password = 'Password is required';
    }
    if (!values.phone) {
      newErrors.phone = 'Phone no is required'
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === '');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', values);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <Box sx={{
      display : "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
   
     }}>
   <Paper sx={{
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth : "300px",
    minHeight : "700px"
        // backgroundColor: "lightblue",
}} elevation={2}>
    <form   style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          
        }}onSubmit={handleSubmit}>
         
         <Typography sx = {{
          fontSize : "26px",
          fontWeight: 600,
          fontFamily: "Inter",
          fontStyle: "normal",
          lineHeight: 0.7,
          paddingTop : "10px"

         }}> Let's Get Started! </Typography> 
         <Typography sx = {{
          fontSize : "13px",
          fontWeight: 200,
          fontFamily: "Inter",
          fontStyle: "normal",
         }}> Create a GradeCheck account to get all features</Typography>

         <Box sx = {{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         flexDirection: "column",
         marginTop:"20px"

         }}>
      <TextField
        // label=" Enter a Name"
        name="name"
        placeholder='Enter a Name'
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        margin='normal'
        variant="outlined"
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
            <PersonIcon/>
            </InputAdornment>
          )
        }}
      />
      <TextField
      
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        margin='normal'
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
            <EmailIcon/>
            </InputAdornment>
          )
        }}

      />
       <TextField
    
        name="phone"
        placeholder="Phone"
        value={values.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        margin='normal'
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
            <PhoneAndroidIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        margin='normal'
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
            <LockOpenIcon/>
            </InputAdornment>
          )
        }}
      />
        <TextField
        name= " Confirm Password"
        placeholder= "Confirm Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        margin='normal'
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
            <LockOpenIcon/>
            </InputAdornment>
          )
        }}
      />
      {/* <CustomTextField
       
        defaultValue="Enter a name"
        // value={values.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        variant="filled"
        style={{ marginTop: 11 }}
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
             <LockOpenIcon/>
            </InputAdornment>
          )
        }}
      /> */}

      <Box  sx={{
         paddingTop: "20px"
      }}>

      <Button 
        sx = {{
          backgroundColor : "#137BA6",
          width: "255px",
           

        }}
        type="submit" variant="contained" >
        Create
      </Button>
      </Box>
         </Box>
         <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "15px"
          
        }} gap={0.5}>
        <Typography> Already have an account ?
 </Typography>
 <Link href='https://www.youtube.com/' underline="none">
  {' Login here'}
</Link>

         </Box>
    </form>
    </Paper> 

</Box>
  );
};

export default Form;






