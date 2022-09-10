import React from 'react';
import { Button,styled,Typography  } from "@mui/material";
// import { AddIcon } from '@mui/icons-material';
// import { AddIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

function Practise() {

   const BlueButton = styled(Button)(({theme}) => ({
        // backgroundColor: 'skyblue',
        backgroundColor: theme.palette.otherColor.main,
        color: '#888',
        margin: 5,
        '&:hover':{
          backgroundColor: 'lightblue'
        },
        '&:disabled':{
          backgroundColor: 'gray',
          color: 'white'
        }
  }));

  return (
    <div>
        <Button variant="text">Text</Button>
        <Button startIcon={<AddIcon />} variant="contained" color="success" size="large">Success</Button>
        <Button variant="outlined" disabled>Outlined</Button>
        <Typography variant="h1" component="p">
                This is H2 heading
        </Typography>

        <BlueButton>
            My Unique Button
        </BlueButton>

        <BlueButton>
            My Unique Button Anther one
        </BlueButton>
    </div>
  )
}

export default Practise