import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
import { baseUrl } from '../api';

export default function Add() {
  const navigate=useNavigate();
  const [formData,setFormData] = useState({
    title:"",
    amount:"",
    category:"",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit=async()=>{
    setIsLoading(true);
    //console.log(formData);
    try {
      const res=await axios.post(`${baseUrl}/api/expense/insert`,formData)
      //console.log(res);
      if (res.data.success) {
        toast.success(res.data.message)
        setTimeout(()=>{
        navigate("/");
        },2000);
      } else {
        toast.error(res.data.message)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }finally{
      setTimeout(()=>{
        setIsLoading(false);
    },2000);
  }};
  return (
   <Box>
    <Box sx=
    {{backgroundColor:"aqua", textAlign:"center"}}>
        <Typography variant='h4'>Add expenses Details</Typography>
        <Box sx={{backgroundColor:"",p:4,display:"flex",justifyContent:"center",alignItems:"center"}}/>
      
        <Paper sx={{width:"70%",p:3}}>
        <TextField value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})}
        fullWidth label="Enter expense title"
        placeholder='Expense title here'
        sx={{mb:2}}/>
        <TextField value={formData.amount} type='number'onChange={(e)=>setFormData({...formData,amount:e.target.value})}
        fullWidth label="Enter expense amount"
        placeholder='Expense amount here'
        sx={{mb:2}}/>

         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">select expense category</InputLabel>
        <Select value={formData.category} onChange={(e)=>setFormData({...formData,category:e.target.value})}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="select expense category"
          //onChange={handleChange}
          sx={{mb:2}}
        >
          <MenuItem value={"Transport"}>Transport</MenuItem>
          <MenuItem value={"Food"}>Food</MenuItem>
          <MenuItem value={"other"}>other</MenuItem>
        </Select>
      </FormControl>
        <Button onClick={handleSubmit} loading={isLoading} sx={{mmb:1}}color="secondary" variant="contained" fullWidth>Submit</Button>
        <Button sx={{mmb:1}}color="secondary" variant="outlined"component={Link} to="/" fullWidth> view Entries</Button>
        <Button  sx={{mmb:1}}color="secondary" variant="outlined" fullWidth> clear Entries</Button>
        </Paper>
    </Box>
   </Box>
  )
}
