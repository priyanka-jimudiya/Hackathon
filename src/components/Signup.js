import React from "react";
import { Grid, Paper, Avatar } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { FormControl, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup';

function Signup() {

    const paperStyle = {
        padding: 20, width: 500, height: 'auto', margin: '50px auto',
    }
    const colorStyle = { backgroundColor: '#71BFBC' }

    const initialValues = {
        firstname: '',
        lastname: '',
        contact: '',
        otp: '',
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(3, "Too Short").required("Required First Name"),
        lastname: Yup.string().min(3, "Too Short").required("Required Last Name"),
        email: Yup.string().email("Enter Valid Email").required("Required Email"),
        contact: Yup.string().matches(/^[0-9]+$/, "Enter Valid Contact").min(10, "Must Be 10 Digit").required('Required Contact'),
        password: Yup.string().min(8, "Must be 8 character").required("Required Password")

    })

    const onSubmit = (values, props) => {
        alert('Registration Susscefully...');
        console.log(values)
    }
    return (
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>

                        <Avatar style={colorStyle}><HowToRegIcon></HowToRegIcon></Avatar>
                        <h4><b>Register</b></h4>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {(props) => (<Form>
                                <FormControl margin="normal" required>
                                    <Grid>
                                        <Field as={TextField}
                                            name="firstname"
                                            sx={{ marginRight: '10px' }}
                                            id="standard-basic"
                                            type='text'
                                            label="First Name"
                                            variant="outlined"
                                            margin="normal"
                                            size="small"
                                            helperText={<ErrorMessage name="firstname" />}

                                        />

                                        <Field as={TextField}
                                            name="lastname"
                                            id="standard-basic"
                                            type='text'
                                            label="Last Name"
                                            variant="outlined"
                                            margin="normal"
                                            size="small"
                                            helperText={<ErrorMessage name="lastname" />}

                                        />

                                        <Field as={TextField}
                                            name="contact"
                                            sx={{ marginRight: '10px' }}
                                            id="standard-basic"
                                            label="Contact"
                                            variant="outlined"
                                            margin="normal"
                                            size="small"
                                            maxLength={10}
                                            helperText={<ErrorMessage name="contact" />}

                                        />

                                        <Field as={TextField}
                                            name="otp"
                                            id="standard-basic"
                                            type='password'
                                            label="OTP"
                                            variant='filled'
                                            size="small"
                                            margin="dense"

                                        />

                                        <Field as={TextField}
                                            name="email"
                                            sx={{ marginRight: '10px' }}
                                            id="standard-basic"
                                            type='email'
                                            label="Email"
                                            variant="outlined"
                                            margin="normal"
                                            size="small"
                                            helperText={<ErrorMessage name="email" />}

                                        />


                                        <Field as={TextField}
                                            name="password"
                                            id="standard-basic"
                                            type='password'
                                            label="Password"
                                            variant="outlined"
                                            margin="normal"
                                            size="small"
                                            helperText={<ErrorMessage name="password" />}
                                        />

                                    </Grid>
                                </FormControl>
                                <hr />
                                <Button type='submit' variant="contained" name="register" style={colorStyle} fullWidth margin="20px">Register</Button>
                            </Form>)}
                        </Formik>
                    </Grid>
                </Paper >
            </Grid >
        </>
    );
}

export default Signup