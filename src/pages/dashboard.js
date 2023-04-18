import React, { Component } from "react"
import { Typography } from "@mui/material"
import  FormControl  from "@mui/material/FormControl"
import { Button } from "@mui/material"
import LoginPage from "./loginPage"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedOut:false}
        }
        handleLogout = () => {
            this.setState({ isLoggedOut: true });
    }
    
    render() {
        const { isLoggedOut } = this.state;

        if (isLoggedOut) {
            return <LoginPage />;
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
                <Typography variant = "h2">Dashboard</Typography>
                <Button 
                    variant="elevated" 
                    style = {buttonStyle}
                    onClick = {this.handleLogout}
                    type = "submit">
                    Log Out
                </Button>
            </FormControl>

        )
    }
}


export default Dashboard