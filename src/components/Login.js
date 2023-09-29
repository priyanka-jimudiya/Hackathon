// import { Grid, Paper, Avatar, Typography } from '@mui/material';
// import { LockClockOutlined } from '@mui/icons-material';
// import { FormControl, TextField, Button } from '@mui/material';
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import React from 'react';
// import { Link } from "react-router-dom";
// import * as Yup from 'yup';

// function Login() {

//     const paperStyle = { padding: 20, height: 'auto', width: 350, margin: '50px auto' }
//     const colorStyle = { backgroundColor: '#71BFBC' }

//     const initialValues = {
//         email: '',
//         password: ''
//     }




//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email("Enter Valid Email").required("Required Email"),
//         password: Yup.string().min(8, "Must be 8 character").required("Required Password")

//     })

//     const onSubmit = (values, props) => {
//         // alert('Done');
//         setTimeout(() => {
//             props.resetForm()
//             props.setSubmitting(false)
//         }, 2000)
//         console.log(values)


//     }

//     return (

//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>

//                     <Avatar style={colorStyle}><LockClockOutlined ></LockClockOutlined></Avatar>
//                     <h4><b>Login</b></h4>
//                     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//                         {(props) => (<Form>
//                             <FormControl margin="normal" fullWidth required>
//                                 <Field as={TextField}
//                                     name='email'
//                                     id="standard-basic"
//                                     type='email'
//                                     label="Email"
//                                     variant="standard"
//                                     helperText={<ErrorMessage name="email" />}

//                                 />

//                                 <Field as={TextField}
//                                     name='password'
//                                     margin="normal"
//                                     id="standard-password-input"
//                                     label="Password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     variant="standard"
//                                     helperText={<ErrorMessage name="password" />}
//                                 />
//                             </FormControl>
//                             <Button type="submit" variant="contained" name="login" style={colorStyle} fullWidth margin="20px" disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Login"}</Button>
//                             {/* <Button type="submit" variant="contained" name="login" style={colorStyle} fullWidth margin="20px">Login</Button> */}

//                             <h6>or</h6>
//                             <Button variant="outlined" fullWidth margin="20px">Google</Button>

//                             <hr />
//                             <Typography>
//                                 <Link to='/'>
//                                     Forget Password ?
//                                 </Link>
//                             </Typography>

//                         </Form>
//                         )}
//                     </Formik >
//                 </Grid>
//             </Paper >
//         </Grid >

//     );
// }

// export default Login






















import { Grid, Paper, Avatar, Typography } from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import { FormControl, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react';
// import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup';
import axios from 'axios';

function Login() {
    const paperStyle = { padding: 20, height: 'auto', width: 350, margin: '50px auto' }
    const colorStyle = { backgroundColor: '#71BFBC' }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter Valid Email").required("Required Email"),
        password: Yup.string().min(8, "Must be 8 characters").required("Required Password")
    })

    // const history = useHistory();

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        axios.post('http://certificate-gen.tech2space.in:8000/auth/login', values)
            .then((response) => {
                console.log(response); // Add this line for debugging
                if (response) {
                    // Authentication successful
                    alert('Login successful');
                    resetForm();
                    // history.push('/dashboard'); // Redirect to the dashboard or any other page
                } else {
                    // Authentication failed
                    alert('Authentication failed. Please check your credentials.');
                }
            })

            .catch((error) => {
                // Handle request error
                console.error(error);
                alert('Incorrect email or password.');
            })
            .finally(() => {
                setSubmitting(false);
            });
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={colorStyle}><LockClockOutlined ></LockClockOutlined></Avatar>
                    <h4><b>Login</b></h4>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>
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
                                        helperText={<ErrorMessage name="password" />}
                                    />
                                </FormControl>
                                <Button type="submit" variant="contained" name="login" style={colorStyle} fullWidth margin="20px" disabled={props.isSubmitting}>
                                    {props.isSubmitting ? "Loading" : "Login"}
                                </Button>
                                <h6>or</h6>
                                <Button variant="outlined" fullWidth margin="20px">Google</Button>
                                <hr />
                                <Typography>
                                    {/* <Link to='/forgot-password'>
                                        Forgot Password?
                                    </Link> */}
                                </Typography>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Login;
