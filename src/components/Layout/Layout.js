// Funcional component

import React from 'react'
import Aux from '../../hoc/Auxiliary' // Importing Auxiliary Component
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
    <Aux>
        <div>
            <Toolbar />
            <SideDrawer />
            Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout