import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { FormControl, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Password } from '@mui/icons-material';
export const FinalList = (props) => {
  let count = 0
  const [state, setState] = useState()
  const userdata = [
    ' First name',
    'Last name',
    'Mobile number',
    'Email',
    'Birthday',
    "User Name",
    "Password",
    "Confirm password"
  ]
  let data = []
  Object.keys(props.state).map((key) => data.push(props.state[key]))
  console.log(data)
  return (
    <Box >
      <hi className='txtcolor'>Data added Successfully</hi>
      <List className='ml-30' aria-label="mailbox folders">

        {data && data.map((value, index) => {
          return (
            <>
              <ListItem key={value} disablePadding>
                {
                  index != data?.length - 1 &&
                  <>
                    <ListItemText className='ml-30' primary={userdata[count++]} />
                    <ListItemText primary={`${value}`} />
                  </>
                }
              </ListItem>

              <Divider light />
            </>
          );
        })}
      </List>

    </Box>
  )
}
