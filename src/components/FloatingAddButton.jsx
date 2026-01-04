import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FloatingActionButton() {
  const navigate=useNavigate();
  
        
  
       
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Tooltip title="Add new entry">
      <Fab sx={{position:"absolute",
        bottom:16,
        right:16
    }} onClick={()=>navigate("/add")}
      
        size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      </Tooltip>
    </Box>
  );
}
