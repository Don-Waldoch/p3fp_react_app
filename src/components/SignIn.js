import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from './Copyright';
const CryptoJS = require('crypto-js');
const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let ClearText = data.get('password');
    let CodedText = encryptWithAES(ClearText);
    let PlainText = decryptWithAES(CodedText);
    // console.log(ClearText);
    // console.log(CodedText);
    // console.log(PlainText);

    var hash = CryptoJS.SHA3(ClearText, { outputLength: 256 }).toString();
    console.log(hash);
    let CodedHash = encryptWithAES(hash);
    console.log(CodedHash);

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const encryptWithAES = (ClearText) => {
    const passphrase = 'hWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x';
    const CodedText = CryptoJS.AES.encrypt(ClearText, passphrase).toString();
    return CodedText;
  };

  const decryptWithAES = (CodedText) => {
    const passphrase = 'hWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x';
    const bytes = CryptoJS.AES.decrypt(CodedText, passphrase);
    const ClearText = bytes.toString(CryptoJS.enc.Utf8);
    return ClearText;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField sx={{backgroundColor: "#FFFFFF"}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField sx={{backgroundColor: "#FFFFFF"}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
