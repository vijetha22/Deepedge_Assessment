import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "./Input";
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
export const AddressDetials = (props) => {
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
    };

    //accept only numbers
    const allowOnlyNumbers = (evt) => {
        var charCode = (evt.which) ? evt.which : KeyboardEvent.code;
        console.log(evt.which)
        if (charCode > 31 && (charCode < 46 || charCode > 57)) evt.preventDefault()
        return true;
    };

    return (
        <Box >
            <FormControl>
                <Grid container >
                    <Grid md={12} >
                        <Input
                            error={props.state.errors.email}
                            className='input'
                            type={"text"}
                            name="email"
                            value={props.state.email}
                            placeholder="Email "
                            onChange={handleInputChange}
                            helperText={props.state.errors.email}
                        />
                        <Input
                            error={props.state.errors.mobile_number}
                            helperText={props.state.errors.mobile_number}
                            type="text"
                            name="mobile_number"
                            className='input'
                            value={props.state.mobile_number}
                            placeholder="Mobile number"
                            onChange={handleInputChange}
                            onKeyPress={allowOnlyNumbers}
                        />

                    </Grid>

                </Grid>
            </FormControl>
        </Box>
    );
};
