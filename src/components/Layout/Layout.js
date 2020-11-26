// Funcional component

import React from 'react'
import Aux from '../../hoc/Auxiliary' // Importing Auxiliary Component
import classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div>Toobar,  SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout