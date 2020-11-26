// Funcional component

import React from 'react'
import Aux from '../../hoc/Auxiliary' // Importing Auxiliary Component

const Layout = (props) => (
    <Aux>
        <div>Toobar,  SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout