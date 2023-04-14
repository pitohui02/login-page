import React from "react"
import { Box, CardContent, Typography } from "@mui/material"
import { Button } from "@mui/material"
import TextField from '@mui/material/TextField'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'

import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


export default function MyLogin() {
    return(
        <Box sx = {{
            height: '500px',
            width: '500px',
        }}>
            <Card sx = {{
                paddingTop: '30px',
                paddingBottom: '40px',
            }}>
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
                        <PersonIcon fontSize="medium" color="black" sx = {{pr: 1}}/> 
                        <TextField id="outlined-basic" label="Username" variant="outlined" /> 
                    </Box>
                </Grid>
                
                <Grid item>
                    <item>
                    <Box  sx={{ display: 'flex', alignItems: 'center'}}> 
                        <LockIcon fontSize="medium" color="black" sx = {{pr: 1}}/> 
                        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" /> 
                     </Box>
                    </item>
                </Grid>

            </Grid>
                </CardContent>

                <Button variant="contained"style = {{
                    width: '32vh',
                    alignItems: 'center'
                }} >Log In</Button>

            </Card>

        </Box>
    )
}






