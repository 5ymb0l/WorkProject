import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { EmpData } from './Data';

interface  Props{
  openPopup : boolean ;
  setOpenPopup : (param : boolean) => void;
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: EmpData)=> void;
  addEmployee:(data:EmpData)=>void
}

const AddOperation = (props : Props) => {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const {openPopup , setOpenPopup, onBackBtnClickHnd, onSubmitClickHnd, addEmployee} = props
  const onSubmitBtnClickHnd = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const resetForm = () => {
      setName("");
      setBranch("");
      setPhone("")
      setEmail("")
    }
    const data: EmpData = {
      id: new Date().toJSON().toString(),
      name:name,
      branch: branch,
      phone: phone,
      email: email,
     };
     addEmployee(data)
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
    resetForm();
     };
  
  
  return (
    <Box>
      <Button   variant="outlined"
      onClick={() => {
        setOpenPopup(true);
      }}
      sx ={{ 
 backgroundColor: "white",
 borderRadius: "50px",
 color: " #002F71",
 fontStyle: "normal",
 fontWeight: 600,
 fontSize: "14px",
 textTransform: "none",
}} > Add </Button>
    <Dialog
    open={openPopup}
 
  >
  
    <DialogContent>
     <Box onSubmit= {onSubmitBtnClickHnd}>
     <Box
        sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Button
                      sx={{
                        color: "#002F71",
                        textAlign: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Poppins, Arial",
                        fontSize: ".875rem",
                        fontWeight: "500",
                        lineHeight: "18px",
                        display: "flex",
                      }}
                      onClick={onBackBtnClickHnd}
                    >
                      {" "}
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        backgroundColor: "#1073ff",
                        border: "none",
                        borderRadius: "50px",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Poppins, Arial",
                        fontSize: ".875rem",
                        fontWeight: "500",
                        lineHeight: "18px",
                        display: "flex",
                      }}
                      onClick={onSubmitBtnClickHnd}
                    >
                      {" "}
                      Add{" "}
                    </Button>
                  </Stack>
                </Box>
     <TextField name="name"
        placeholder='Enter a Name'
        // value={values.name}
        // onChange={handleChange}
        // error={!!errors.name}
        // helperText={errors.name}
        margin='normal'
        variant="outlined" />
     <TextField   name="Branch"
        placeholder='Branch'
        // value={values.name}
        // onChange={handleChange}
        // error={!!errors.name}
        // helperText={errors.name}
        margin='normal'
        variant="outlined"/>  
     <TextField name="Phone"
        placeholder='Phone'
        // value={values.name}
        // onChange={handleChange}
        // error={!!errors.name}
        // helperText={errors.name}
        margin='normal'
        variant="outlined"/>  
     <TextField />  
     <TextField name="Email"
        placeholder='Email'
        // value={values.name}
        // onChange={handleChange}
        // error={!!errors.name}
        // helperText={errors.name}
        margin='normal'
        variant="outlined"/>  
     <TextField />  
    
     </Box>
    </DialogContent>
  
  </Dialog>
 </Box>
  )
}

export default AddOperation