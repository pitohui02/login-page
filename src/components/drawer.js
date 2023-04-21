import React, { Component } from "react"
import { Box, Drawer, Typography, FormControl, Button} from "@mui/material"
import { Navigate } from "react-router-dom"

export default class DrawerComponent extends Component {

    constructor(props) {
        super(props)

        this.state =  {
            isLoggedOut: false
        }

        
    }

    handleLogOut = () => {
        this.setState({isLoggedOut: true})
    }


    render() {


        const { isLoggedOut } = this.state


        if(isLoggedOut){
            return <Navigate to = '/'/>
        }


        const boxstyle = {
            padding: '20px'
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
            <Drawer anchor = 'left' variant = 'permanent'>
                <Box sx = {boxstyle}>
                <FormControl>
                <Typography variant = "h2">Dashboard</Typography>
                <Button 
                    variant="elevated" 
                    style = {buttonStyle}
                    onClick = {this.handleLogOut}
                    type = "submit">
                    Log Out
                </Button>
            </FormControl>
                </Box>
            </Drawer>
        )
    }
}