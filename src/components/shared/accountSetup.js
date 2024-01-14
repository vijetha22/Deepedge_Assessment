import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
import { ForkLeft, Visibility, VisibilityOff } from "@mui/icons-material";
export const Account = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [addressDetails, setaddressDetails] = useState({
        mobile_number: "",
        email: "",
        errors: {
            mobile_number: "",
            email: "",
        },
    });
    

    const handleClickShowPassword = (e) => {
       e === "password" ? setShowPassword(!showPassword) : setShowConfirmPassword (!showConfirmPassword)
    };

    
    const handleInputChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        props.state[name] = value;
        props.state.errors[name] = "";
        setaddressDetails({ ...addressDetails });
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
                            error={props.state.errors.username}
                            className='input'
                            type={"text"}
                            name="username"
                            value={props.state.username}
                            placeholder="User Name"
                            onChange={handleInputChange}
                            helperText={props.state.errors.username}
                        />
                        <Input
                            error={props.state.errors.password}
                            helperText={props.state.errors.password}
                            size="small"
                            type={!showPassword ? "password" : "text"}
                            name="password"
                            className='input'
                            value={props.state.password}
                            placeholder="Password"
                            onChange={handleInputChange}
                            required={true}
                            // position="end"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={()=>handleClickShowPassword("password")}
                                            edge="end"
                                        >
                                            {!showPassword ? <VisibilityOff
                                            /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />


                        <Input
                            error={props.state.errors.confirm_password}
                            helperText={props.state.errors.confirm_password}
                            size="small"
                            type={!showConfirmPassword ? "password" : "text"}
                            name="confirm_password"
                            value={props.state.confirm_password}
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                            style={{ width: "90%", marginLeft: 10, marginTop: 10, height: 30, padding: "10", }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {!showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Grid>


                </Grid>
            </FormControl>
        </Box>
    );
};
