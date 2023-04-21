import React from 'react'

import { Component } from 'react'

import { Box } from '@mui/material'

import DrawerComponent from '../components/drawer'
import TableComponent from '../components/table'

class Dashboard extends Component {  
    render() {
        return(
           
            <React.Fragment>

                <Box>

                <DrawerComponent />

                <TableComponent />

                </Box>

            </React.Fragment>
            
        )
    }
}


export default Dashboard