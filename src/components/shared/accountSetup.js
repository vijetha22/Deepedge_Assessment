import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from "@mui/material";

import Input from "./Input";
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    InputAdornment,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import Dropdown from "./dropdown";
export const Account = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [addressDetails, setaddressDetails] = useState({
        mobile_number: "",
        email: "",
        errors: {
            mobile_number: "",
            email: "",
        },
    });
    //onchange input values
    const handleInputChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        props.state[name] = value;
        props.state.errors[name] = "";
        setaddressDetails({ ...addressDetails });
        setShowPassword(!showPassword);
    };


    //accept only numbers
    const allowOnlyNumbers = (evt) => {
        var charCode = (evt.which) ? evt.which : KeyboardEvent.code;
        console.log(charCode)
        if (charCode > 31 && (charCode < 46 || charCode > 57))
            evt.preventDefault()
        return true;
    };

    return (
        <Box >
            <FormControl>
                <Grid container >
                    <Grid md={12} >
                        <Input
                            error={props.state.errors.userName}
                            className='input'
                            type={"text"}
                            name="username"
                            value={props.state.userName}
                            placeholder="User Name"
                            onChange={handleInputChange}
                            helperText={props.state.errors.userName}
                        />
                        <Input
                            error={props.state.errors.password}
                            helperText={props.state.errors.password}
                            type="password"
                            name="password"
                            className='input'
                            value={props.state.password}
                            placeholder="Password"
                            onChange={handleInputChange}
                            required={true}
                            position="end"
                        />
                        {/* <InputAdornment error={props.state.errors.password}
                            helperText={props.state.errors.password}
                            type="password"
                            name="password"
                            className='input'
                            value={props.state.password}
                            placeholder="Password"
                            onChange={handleInputChange}
                            position="end">
                            <VisibilityIcon />
                        </InputAdornment> */}

                        {/* <Input
                            error={props.state.errors.confirm_password}
                            helperText={props.state.errors.confirm_password}
                            type="password"
                            name="confirm_password"
                            className='input'
                            value={props.state.confirm_password}
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                        
                        >
                        <VisibilityIcon /></Input> */}

                        <TextField
                            error={props.state.errors.confirm_password}
                            helperText={props.state.errors.confirm_password}
                            type="password"
                            name="confirm_password"
                            className='input'
                            value={props.state.confirm_password}
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                            inputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                        {/* <IconButton
                                            aria-label="toggle password visibility"
                                            // onClick={handleClickShowPassword}
                                            edge="end"
                                        >                
                                                     */}

                                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                                        {/* </IconButton> */}
                                        <VisibilityIcon style={{ position: "absolute", top: 10, left: 100 }} />
                                    </InputAdornment>


                                )
                            }}

                        />

                    </Grid>


                </Grid>
            </FormControl>
        </Box>
    );
};
