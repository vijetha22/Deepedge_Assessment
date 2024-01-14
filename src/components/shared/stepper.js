import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserInfo from "./userInfo";
import { AddressDetials } from "./addressDetials";
import { FinalList } from "./finalData";
import { isEmailValid, isPasswordvalid } from "./utils";
import { Account } from "./accountSetup";

const steps = [
  "PERSONAL INFORMATION",
  "CONTACT INFORMATION",
  "ACCOUNT SETUP",
  "THANK YOU(LOG OF ALL ENTERED DATA)",
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [userDetails, setuserDetails] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    birthday: "",
    username: "",
    password: "",
    confirm_password: "",
    errors: {
      first_name: "",
      middle_name: "",
      last_name: "",
      mobile_number: "",
      email: "",
      userName: "",
      password: "",
      confirm_password: "",

    },
  });

  const { errors } = userDetails;

  const handleNext = (e) => {
    if (activeStep === 0) {
      errors.first_name = userDetails.first_name
        ? ""
        : "First name is a required field";
      errors.last_name = userDetails.last_name
        ? ""
        : "Last name is a required field";
      errors.birthday = userDetails.birthday
        ? ""
        : "Birthday is a required field";
      if (!errors.birthday && !errors.first_name && !errors.last_name) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setuserDetails({ ...userDetails, errors: errors });
      }
    }

    if (activeStep === 1) {
      console.log("1");
      errors.mobile_number = userDetails.mobile_number
        ? ""
        : "Mobile Number is a required field";
      errors.email = isEmailValid(userDetails.email) ? "" : "Email invalid";
      if (!errors.mobile_number && !errors.email) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setuserDetails({ ...userDetails, errors: errors });
      }
    }
    if (activeStep === 2) {
      console.log("2");
      errors.userName = userDetails.username
        ? ""
        : "User name is a required field";
      errors.password = isPasswordvalid(userDetails.password) ? "" : "Password invalid";
      errors.confirm_password = userDetails.password == userDetails.confirm_password && !errors.password ? "" : "Password Missmatch";
      if (!errors.userName && !errors.password  && !errors.confirm_password) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setuserDetails({ ...userDetails, errors: errors });
      }
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        {activeStep == 0 && <UserInfo state={userDetails} />}
        {activeStep == 1 && <AddressDetials state={userDetails} />}
        {activeStep == 2 && <Account state={userDetails} />}
        {activeStep != 0 && activeStep != 1 && activeStep != 2 && (
          <FinalList state={userDetails} />
        )}
        <Box className="buttonContainer">
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Prev
          </Button>
          <Box />
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === 3}
          >
            Next
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
};
export default StepperComponent;
