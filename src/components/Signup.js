// // import React from "react";
// import { Grid, Paper, Avatar } from '@mui/material';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import { FormControl, TextField, Button } from '@mui/material';
// import { Formik, Form, Field, ErrorMessage, } from 'formik'
// import * as Yup from 'yup';
// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         contact: '',
//         otp: '',
//         email: '',
//         password: ''
//       });
//     const paperStyle = {
//         padding: 20, width: 500, height: 'auto', margin: '50px auto',
//     }
//     const colorStyle = { backgroundColor: '#71BFBC' }

//     const [currentPage, setCurrentPage] = useState("SIGN UP")
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//         ...formData,
//         [name]: value,
//         });
//     };

//     // const initialValues = {
//     //     firstname: '',
//     //     lastname: '',
//     //     contact: '',
//     //     otp: '',
//     //     email: '',
//     //     password: ''
//     // }

//     const [action, setAction] = useState("SIGN UP");

//     function handleForgetPasswordClick(event) {
//         event.preventDefault();
//     }

//     const validationSchema = Yup.object().shape({
//         firstname: Yup.string().min(3, "Too Short").required("Required First Name"),
//         lastname: Yup.string().min(3, "Too Short").required("Required Last Name"),
//         email: Yup.string().email("Enter Valid Email").required("Required Email"),
//         contact: Yup.string().matches(/^[0-9]+$/, "Enter Valid Contact").min(10, "Must Be 10 Digit").required('Required Contact'),
//         password: Yup.string().min(8, "Must be 8 character").required("Required Password")

//     })

//     const onSubmit = (values, props) => {
//         alert('Registration Susscefully...');
//         console.log(values)
//     }

//     const handleForm = (act) => {
//         if (act !== currentPage) {
//           setCurrentPage(act)
//           setAction(act)
//           return
//         }
    
//         if ("SIGN UP") {
          
//           if (formData.name.length > 0 && formData.contact.length === 10 && formData.email.length >= 6 && formData.password.length >= 6) {
//             // Code to submit signup
//             // alert('signup')
//             axios.post('http://127.0.0.1:8000/auth/signup', formData)
//             .then((response) => {
//               alert(response.data.message)
//             })
//             .catch((error) => {
//               alert(error.response.data.error)
//             });
//             // console.log(formData);
//             return
//           }
//           else {
//             alert('Please fill all details')
//           }
//         }
//         setAction(act)
//     }
//     return (
//         <>
//             <Grid>
//                 <Paper elevation={10} style={paperStyle}>
//                     <Grid align='center'>

//                         <Avatar style={colorStyle}><HowToRegIcon></HowToRegIcon></Avatar>
//                         <h4><b>Register</b></h4>
//                         <Formik formData={setFormData} validationSchema={validationSchema} onSubmit={onSubmit}>
//                             {(props) => (<Form>
//                                 <FormControl margin="normal" required>
//                                     <Grid>
//                                         <Field as={TextField}
//                                             name="firstname"
//                                             sx={{ marginRight: '10px' }}
//                                             id="standard-basic"
//                                             type='text'
//                                             label="First Name"
//                                             variant="outlined"
//                                             margin="normal"
//                                             size="small"
//                                             value={formData.firstname}
//                                             onchange={handleChange}
//                                             helperText={<ErrorMessage name="firstname" />}

//                                         />

//                                         <Field as={TextField}
//                                             name="lastname"
//                                             id="standard-basic"
//                                             type='text'
//                                             label="Last Name"
//                                             variant="outlined"
//                                             margin="normal"
//                                             size="small"
//                                             value={formData.lastname}
//                                             onchange={handleChange}
//                                             helperText={<ErrorMessage name="lastname" />}

//                                         />
//                                     </Grid>
//                                     <Grid>



//                                         <Field as={TextField}
//                                             name="contact"
//                                             sx={{ marginRight: '10px' }}
//                                             id="standard-basic"
//                                             label="Contact"
//                                             variant="outlined"
//                                             margin="normal"
//                                             size="small"
//                                             value={formData.contact}
//                                             onchange={handleChange}
//                                             maxLength={10}
//                                             helperText={<ErrorMessage name="contact" />}

//                                         />

//                                         <Field as={TextField}
//                                             name="otp"
//                                             id="standard-basic"
//                                             type='password'
//                                             label="OTP"
//                                             variant='filled'
//                                             size="small"
//                                             value={formData.otp}
//                                             onchange={handleChange}
//                                             margin="dense"

//                                         />
//                                     </Grid>
//                                     <Grid>

//                                         <Field as={TextField}
//                                             name="email"
//                                             sx={{ marginRight: '10px' }}
//                                             id="standard-basic"
//                                             type='email'
//                                             label="Email"
//                                             variant="outlined"
//                                             margin="normal"
//                                             size="small"
//                                             value={formData.email}
//                                             onchange={handleChange}
//                                             helperText={<ErrorMessage name="email" />}

//                                         />


//                                         <Field as={TextField}
//                                             name="password"
//                                             id="standard-basic"
//                                             type='password'
//                                             label="Password"
//                                             variant="outlined"
//                                             margin="normal"
//                                             size="small"
//                                             value={formData.password}
//                                             onchange={handleChange}
//                                             helperText={<ErrorMessage name="password" />}
//                                         />

//                                     </Grid>

//                                 </FormControl>
//                                 <hr />
//                                 <Button type='submit' variant="contained" name="register" style={colorStyle} fullWidth margin="20px"  onClick={() => handleForm("SIGN UP")}>Register</Button>
//                             </Form>)}
//                         </Formik>
//                     </Grid>
//                 </Paper >
//             </Grid >
//         </>
//     );
// }

// export default Signup



























import { Grid, Paper, Avatar } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { FormControl, TextField, Button } from '@mui/material';
import { useFormik } from 'formik'; // Import useFormik
import * as Yup from 'yup';
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const paperStyle = {
    padding: 20,
    width: 500,
    height: 'auto',
    margin: '50px auto',
  };
  const colorStyle = { backgroundColor: '#71BFBC' };

  const [currentPage, setCurrentPage] = useState('SIGN UP');
  
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(1, 'Too Short').required('Required First Name'),
    lastname: Yup.string().min(1, 'Too Short').required('Required Last Name'),
    contact: Yup.string()
      .matches(/^[0-9]+$/, 'Enter Valid Contact')
      .min(10, 'Must Be 10 Digit')
      .required('Required Contact'),
    email: Yup.string().email('Enter Valid Email').required('Required Email'),
    password: Yup.string().min(8, 'Must be 8 characters').required('Required Password'),
  });

  
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      contact: '',
      otp: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        if (
            formik.values.firstname &&
            formik.values.firstname.length > 1 &&
            formik.values.lastname &&
            formik.values.lastname.length > 1 &&
            formik.values.contact &&
            formik.values.contact.length == 10 &&
            formik.values.email &&
            formik.values.email.length > 6 &&
            formik.values.password &&
            formik.values.password.length > 6
          ) {
            // Code to submit signup
            axios
              .post('http://127.0.0.1:8000/auth/signup', values) // Use values from formik
              .then((response) => {
                if (response.data) {
                  alert(response.data.message);
                } else {
                  alert('Unexpected response from the server');
                }
              })
              .catch((error) => {
                if (error.response && error.response.data) {
                  alert(error.response.data.error);
                } else {
                  alert('An error occurred while making the request.');
                }
              });
          } else {
            alert('Please fill all details or validations error');
          }
    },
  });

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={colorStyle}>
              <HowToRegIcon />
            </Avatar>
            <h4>
              <b>Register</b>
            </h4>
            <form onSubmit={formik.handleSubmit}>
              <FormControl margin='normal' required>
                <Grid>
                  <TextField
                    name='firstname'
                    sx={{ marginRight: '10px' }}
                    id='standard-basic'
                    type='text'
                    label='First Name'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                  />
                  <TextField
                    name='lastname'
                    id='standard-basic'
                    type='text'
                    label='Last Name'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                </Grid>
                <Grid>
                  <TextField
                    name='contact'
                    sx={{ marginRight: '10px' }}
                    id='standard-basic'
                    label='Contact'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact}
                    maxLength={10}
                  />
                  <TextField
                    name='otp'
                    id='standard-basic'
                    type='password'
                    label='OTP'
                    variant='filled'
                    size='small'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.otp}
                    margin='dense'
                  />
                </Grid>
                <Grid>
                  <TextField
                    name='email'
                    sx={{ marginRight: '10px' }}
                    id='standard-basic'
                    type='email'
                    label='Email'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <TextField
                    name='password'
                    id='standard-basic'
                    type='password'
                    label='Password'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </Grid>
              </FormControl>
              <hr />
              <Button
                type='submit'
                variant='contained'
                name='register'
                style={colorStyle}
                fullWidth
                margin='20px'
                // onClick={() => handleSignup}
              >
                Register
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
