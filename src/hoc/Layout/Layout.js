// Funcional component

import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary'; // Importing Auxiliary Component
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAutenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    isAuth={this.props.isAutenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }
}

const mapStateToProps = state => {
    return {
        isAutenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);