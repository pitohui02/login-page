import React, { Component } from "react"
import { Box, CardContent, Typography } from "@mui/material"
import { Button } from "@mui/material"
import TextField from '@mui/material/TextField'
import  FormControl  from "@mui/material/FormControl"

import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'

import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card'

import style from '../cssModules/LoginPage.module.css'



class LoginPage extends Component {
    

    
    render() {
        return(
            <FormControl>
                <Box className = {style.mainbox}>
                    <Card className = {style.cardstyle}>
                        <CardContent>
        
                        <Box sx = {{
                            marginBottom: '20px'
                        }}>
                            <Typography variant="h4" sx = {{fontWeight: 'bold'}} >
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
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PersonIcon fontSize="medium" color="black" className={style.iconstyle}/> 
                                <TextField id="outlined-basic" label="Username" variant="outlined" /> 
                            </Box>
                        </Grid>
                        
                        <Grid item>
                            <item>
                            <Box  sx={{ display: 'flex', alignItems: 'center'}}> 
                                <LockIcon fontSize="medium" color="black"  className={style.iconstyle}/> 
                                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" /> 
                            </Box>
                            </item>
                        </Grid>
        
                    </Grid>
                        </CardContent>
        
                        <Button variant="elevated" style = {{
                            width: '32vh',
                            alignItems: 'center',
                            backgroundColor: '#495057',
                            fontWeight: 'bold',
                            color: '#e9ecef'
                        }}> Log In</Button>
        
                    </Card>
    
                </Box>
            </FormControl>
        )
    }

}

export default LoginPage







