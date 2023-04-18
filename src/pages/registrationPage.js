import React, { Component } from "react"
import { Box, CardContent, InputLabel, MenuItem, Typography, Radio, RadioGroup } from "@mui/material"
import { FormControl, Button, TextField, Select, FormControlLabel } from "@mui/material"



import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


class RegistrationPage extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedStatus: '',
            birthDate: null,

            isDeceased: false
        }

        this.handleBirthDateChange = this.handleBirthDateChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleBirthDateChange(date) {
        this.setState({ birthDate: date });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        
      }

    handleChange = (event) => {
        this.setState({selectedStatus: event.target.value})
        
    }

    handleDeceased = (event) => {
        this.setState({
          isDeceased: event.target.value === 'true'
        });
      }
    
    render(){

        const { selectedStatus } = this.state
        
        // Inline Styles

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
        
        const cardstyle = {
            paddingTop: '30px', 
            paddingBottom: '40px',
            paddingLeft: '50px',
            paddingRight: '50px'
        }
        
        const textstyle = {
            fontWeight: 'bold'
        }

        const textmargin = {
            marginBottom:'40px'
        }

        const marginspacing = {
            marginBottom:'20px'
        }

        const dropdownMargin = {
            marginRight: '250px',
            marginBottom: '20px'
        }

        const mainbox = {
            height: '500px',
            width: '900px', 

            marginLeft: '-100px'
        }

        const margincp = {
            marginRight: '240px',
            marginBottom: '20px',
            width: '250px'
        }

        const margintext = {
            marginRight: '40px'
        }

        // ============================================================================== //    

        return(

            <FormControl>

                <Box sx = {mainbox}>
                    
                    <Card sx = {cardstyle}>
                        <CardContent>

                        <Box sx = {textmargin}>
                            <Typography variant = "h4" sx = {textstyle}>
                                REGISTRATION PAGE
                            </Typography>
                        </Box>

                            <Grid container spacing={4} 
                             direction= "row">

                                <Grid item>
                                    <item>
                                        <Box sx = {marginspacing}>
                                            <TextField id="registry-textfield" label="First Name" variant="outlined" size="small"/>
                                        </Box>
                                    </item>

                                    <item>
                                        <Box sx = {marginspacing}>
                                            <TextField id="registry-textfield" label="Middle Name" variant="outlined" size = "small"/>
                                        </Box>
                                    </item>

                                    <item>
                                        <Box sx = {marginspacing}>
                                            <TextField id="registry-textfield" label="Last Name" variant="outlined" size = "small"/>
                                        </Box>
                                    </item>

                                    <item>

                                        <Box>

                                            <Typography variant= 'subtitle1' sx = {margintext}>Is the person Deceased? </Typography>

                                            <RadioGroup aria-label="deceased" name="deceased" value={this.state.isDeceased ? 'true' : 'false'} onChange={this.handleDeceased}>
                                                <FormControlLabel value="true" control={<Radio />} label="Deceased" />
                                                <FormControlLabel value="false" control={<Radio />} label="Not Deceased" />
                                            </RadioGroup>
                                        </Box>
                                        
                                    </item>


                                </Grid>

                                <Grid item>
                                    <item>
                                        <Box width= '400px' sx = {marginspacing}>
                                            
                                            <TextField 
                                            id="registry-textfield" 
                                            label="Home Adress" 
                                            variant="outlined" 
                                            size = "small" 
                                            fullWidth/>
                                        </Box>
                                    </item>

                                    <item>
                                        <Box sx = {margincp}>
                                            <TextField id="registry-textfield" 
                                            label="Cellphone/Telephone Number " 
                                            variant="outlined" 
                                            size = "small"
                                            fullWidth />
                                        </Box>
                                    </item>    


                                    <item>                    
                                        <FormControl >
                                            
                                            <Box sx = {dropdownMargin}>
                                                <Box width= '200px'>
                                                    <InputLabel 
                                                    size="small">       
                                                        Status
                                                    </InputLabel> 
                                                
                                            
                                                    <Select 
                                                    value={selectedStatus} 
                                                    onChange={this.handleChange} 
                                                    size="small" 
                                                    label = "Status" 
                                                    fullWidth>
                                                
                                                    <MenuItem value = ""><em>Select</em></MenuItem>
                                                    <MenuItem value = "Single">Single</MenuItem>
                                                    <MenuItem value = "Married">Married</MenuItem>
                                                    <MenuItem value = "Divorced">Divorced</MenuItem>
                                                    <MenuItem value = "Widowed">Widowed</MenuItem>

                                                    </Select>


                                                    </Box>
                                            </Box>

                                            <FormControl onSubmit={this.handleSubmit}>

                                                 <Box sx = {dropdownMargin}>

                                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker 
                                                            value={this.state.birthDate}
                                                            onChange={this.handleBirthDateChange}
                                                            
                                                        />
                                                    </LocalizationProvider>

                                                </Box>           
                                            
                                            </FormControl>
                                            
                                        </FormControl>
                                    </item>

                                </Grid>
                                <Grid item>
                                
                                    
                                </Grid>

                            </Grid>                    
                        </CardContent>

                        <Button variant="elevated" sx = {buttonStyle}> Register </Button>

                    </Card>
                </Box>

            </FormControl>           


        )
    }
}

export default RegistrationPage