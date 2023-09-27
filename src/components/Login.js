import { Grid, Paper, Avatar } from '@mui/material';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// For Username icon
import { LockClockOutlined } from '@mui/icons-material';
import { FormControl, TextField, FormHelperText, Button } from '@mui/material';
import React from 'react';
function Login() {

    const paperStyle = { padding: 20, height: 'auto', width: 350, margin: '50px auto' }
    const colorStyle = { backgroundColor: '#71BFBC' }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>

                    <Avatar style={colorStyle}><LockClockOutlined ></LockClockOutlined></Avatar>
                    <h4><b>Login</b></h4>
                    <FormControl margin="normal" fullWidth required>
                        <TextField
                            name='email'
                            id="standard-basic"
                            type='email'
                            label="Email"
                            variant="standard"

                        />

                        <FormHelperText id="my-helper-text"><small>We'll never share your email.</small></FormHelperText>

                        <TextField
                            name='password'
                            margin="normal"
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </FormControl>

                    <Button variant="contained" style={colorStyle} fullWidth margin="20px">Login</Button>
                    <h6>or</h6>
                    <Button variant="outlined" fullWidth margin="20px">Google</Button>

                </Grid>
            </Paper>
        </Grid >
    );
}

export default Login