import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from './Input';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';

const UserInfo = (props) => {
    const ref = useRef()

    const [userDetails, setuserDetails] = useState({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        birthday: "",
        errors: {
            first_name: "",
            last_name: "",
            mobile_number: "",
            email: "",
            birthday: "",
        },

    });
    //onchange input values
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        props.state[name] = value;
        props.state.errors[name] = "";
        setuserDetails({ ...userDetails });
        console.log(props.state.first_name)
    };


    return (
        <Box >
            <FormControl>
                <Grid container >
                    <Grid md={12} >
                        <Input
                            error={props.state.errors.first_name}
                            className='input'
                            type={"text"}
                            name="first_name"
                            value={props.state.first_name}
                            placeholder="First name"
                            onChange={handleInputChange}
                            helperText={props.state.errors.first_name}
                        />
                        <Input
                            error={props.state.errors.last_name}
                            className='input'
                            type={"text"}
                            name="last_name"
                            value={props.state.last_name}
                            placeholder="Last name"
                            onChange={handleInputChange}
                            helperText={props.state.errors.last_name}
                        />
                        <div >
                            <Input
                                hidden
                                ref={ref}
                                error={props.state.errors.birthday}
                                helperText={props.state.errors.birthday}
                                type='date'
                                name="birthday"
                                className='input'
                                value={props.state.birthday}
                                placeholder="Birthday"
                                onChange={handleInputChange}
                            />
                        </div>

                    </Grid>
                </Grid>
            </FormControl>
        </Box>

    );
}
export default UserInfo;