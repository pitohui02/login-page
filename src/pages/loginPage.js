import React, { Component} from "react"
import { Box, CardContent, Typography } from "@mui/material"
import { Button } from "@mui/material"
import TextField from '@mui/material/TextField'
import  FormControl  from "@mui/material/FormControl"

import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'

import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card'

import { Navigate } from "react-router-dom"


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userCredentials: new Map([['admin', '1234']]),
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        const { username, password, userCredentials } = this.state;
        
        if (userCredentials.get(username) === password) {
            this.setState({ isLoggedIn: true });
            
        } else {
            alert('Invalid username or password');
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        const { isLoggedIn } = this.state;
        

        if (isLoggedIn) {
            return <Navigate to = '/dashboard'/>
        }

        const mainbox = {
            height: '500px',
            width: '500px' 
        }
        const cardstyle = {
            paddingTop: '30px',
            paddingBottom: '40px'
        }
        const typoFW = {
            fontWeight: 'bold'
        }
        const boxTypo = {
            marginBottom: '20px'
        }
        const boxTextField = {
            display: 'flex',
            alignItems: 'center'
        }
        const iconstyle = {
            paddingRight: '10px'
        }
        const buttonStyle = {
            width: '32vh',
            alignItems: 'center',
            backgroundColor: '#495057',
            color: '#e9ecef',
            fontWeight: 'bold',
            '&:hover': {
            backgroundColor: '#343a40'
            }
        }

        return(
            <FormControl>
                <Box sx = {mainbox}>
                    <Card sx = {cardstyle}>
                        <CardContent>
        
                        <Box sx = {boxTypo}>
                            <Typography variant="h4" sx = {typoFW} >
                                LOGIN PAGE
                            </Typography> 
                        </Box>
        
                        <Grid container 
                        spacing = {4}
                        direction = "row"
                        justifyContent = "center"
                        alignItems= "center"
                        >
                        
                        <Grid item>
                            <Box sx={boxTextField}>
                                <PersonIcon fontSize="medium" color="black" sx = {iconstyle}/> 
                                <TextField 
                                    id="username" 
                                    label="Username" 
                                    variant="outlined" 
                                    value={this.state.username} 
                                    onChange={this.handleUsernameChange} 
                                />

                            </Box>
                        </Grid>
                        
                        <Grid item>
                            <item>
                            <Box  sx={boxTextField}> 
                                <LockIcon fontSize="medium" color="black"  sx = {iconstyle}/> 
                                <TextField 
                                    id="password" 
                                    label="Password" variant="outlined" 
                                    type="password" 
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange} 
                                /> 

                            </Box>
                            </item>
                        </Grid>
        
                    </Grid>
                        </CardContent>
                        
                        <Button 
                        variant="elevated" 
                        style = {buttonStyle}
                        onClick = {this.handleLogin}
                        type = "submit">Log In</Button>
        
                    </Card>
    
                </Box>
            </FormControl>
        )
    }

}

export default LoginPage