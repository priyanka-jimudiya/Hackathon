import { Grid, Paper, Avatar } from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import { FormControl, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import React from 'react';
import * as Yup from 'yup';

function Login() {

    const paperStyle = { padding: 20, height: 'auto', width: 350, margin: '50px auto' }
    const colorStyle = { backgroundColor: '#71BFBC' }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter Valid Email").required("Required Email"),
        password: Yup.string().min(3, "Must be 8 character").required("Required Password")

    })

    const onSubmit = (values, props) => {
        alert('Done');
        console.log(values)
    }



    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>

                    <Avatar style={colorStyle}><LockClockOutlined ></LockClockOutlined></Avatar>
                    <h4><b>Login</b></h4>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (<Form>
                            <FormControl margin="normal" fullWidth required>
                                <Field as={TextField}
                                    name='email'
                                    id="standard-basic"
                                    type='email'
                                    label="Email"
                                    variant="standard"
                                    helperText={<ErrorMessage name="email" />}

                                />

                                <Field as={TextField}
                                    name='password'
                                    margin="normal"
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    helperText={<ErrorMessage name="email" />}
                                />
                            </FormControl>
                            <Button type="submit" variant="contained" name="login" style={colorStyle} fullWidth margin="20px">Login</Button>
                            <h6>or</h6>
                            <Button variant="outlined" fullWidth margin="20px">Google</Button>
                        </Form>
                        )}
                    </Formik >
                </Grid>
            </Paper >
        </Grid >

    );
}

export default Login

