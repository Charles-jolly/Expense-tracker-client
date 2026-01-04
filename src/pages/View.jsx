import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpenseTable from '../components/Table'
import FloatingActionButton from '../components/FloatingAddButton'
import axios from 'axios';

export default function View() {
  const[allExpenses,setAllExpenses]=useState([]);
  const fetchAllExpenses=async()=>{
    try {
      const res=await axios.get(`http://localhost:7000/api/expense/view-all`);
      //console.log(res.data)
      if (res.data.success) {
        setAllExpenses(res.data.expenses)
      } 
    } catch (error) {
      console.log(error);
    }
  };
  //useEffect(arrowfunction()=>{},dependency[])
  useEffect(()=>{
    fetchAllExpenses();
  },[])
  //console.log(allExpenses);
  return (
    <Box>
        <Box>
            <Typography variant='h4'>Expense List</Typography>
        </Box>

        <Box sx={{p:2}} >
          <ExpenseTable allExpenses={allExpenses} fetchAllExpenses={fetchAllExpenses} />
           
        </Box>
        <FloatingActionButton/>
    </Box>
  )
}
