import {
     Box,
     Button,
     Paper,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow, } from '@mui/material'
import React, { useState } from 'react'
import { EmpData } from './Data';
import AddOperation from './AddOperation';
const createData = [
    {
       id: "1",
       name : "Jhon Smith",
       branch : "IT",
       phone: "9967239648",
       email: "JhonSmith@gmail.com"
    },
    {
        id: "2",
        name : "Tyson Jha",
        branch : "EXTC",
        phone: "3972998045",
        email: "tysonjha@gmail.com"
     },
     {
        id: "3",
        name : "Akif Saif",
        branch : "IT",
        phone: "9922998045",
        email: "akifsaif@gmail.com"
     },
     {
        id: "4",
        name : "Lia Taures",
        branch : "CS",
        phone: "94972998045",
        email: "JhonSmith@gmail.com"
     },
     {
        id: "5",
        name : "Jhon Smith",
        branch : "IT",
        phone: "9967239648",
        email: "liataures@gmail.com"
     },
]
const MainBoard = () => {
  const [userList, setUserList] = useState<EmpData[]>(createData);
  const [addPopup, setAddPopup] = useState(false);
  const [open, setOpen] = useState(false);
  
  const handleAddClosePopup = () => {
   setAddPopup(false);
 };
 const handleClickOpen = () => {
   setOpen(true);
 };
 const handleClose = () => {
   setOpen(false);
 };
  const addEmployee = (data: EmpData) => {
   setUserList([...userList , data])
   handleClose();
  }
  return (
 <Box sx = {{
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column"

 }}>
 <Box  sx={{
   display: "flex",
   justifyContent: "flex-start",
   alignItems: "center",
   marginBottom: "10px",
   alignSelf: "flex-start"
 }}>
  <AddOperation addEmployee ={addEmployee} openPopup = {addPopup}
  setOpenPopup={setAddPopup}
  onBackBtnClickHnd={handleAddClosePopup}
  onSubmitClickHnd={addEmployee}
  />
 </Box>

 {/* <Box>
  <Button> Edit </Button>

 </Box>

 <Box>
  <Button> Delete </Button>

 </Box> */}
<TableContainer component= {Paper}>
<Table>
<TableHead>
<TableRow> 
<TableCell> Name</TableCell>
<TableCell> Branch</TableCell>
<TableCell> Phone No</TableCell>
<TableCell> email</TableCell>
<TableCell> Status</TableCell>
</TableRow>
</TableHead>
<TableBody>
   { createData.map((data) => (

  <TableRow key={data.id}> 
  <TableCell> {data.name}</TableCell>
  <TableCell> {data.branch}</TableCell>
  <TableCell> {data.phone}</TableCell>
  <TableCell> {data.email}</TableCell>
  <TableCell>  
<Box> 
   <Button> Edit </Button>
   <Button> Delete </Button>

</Box>
  </TableCell>
   </TableRow>

   ))

   }
</TableBody>
</Table>
</TableContainer>
</Box>
  )
}

export default MainBoard