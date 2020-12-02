import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    // O modal recarregava cada vez que o controle do construtor era acionado
    shouldComponentUpdate(nextProps, nextState) {
        //Só vai atualizar quando for efetivar as mudanças 
        return nextProps.show !== this.props.show;
    }
    // componentDidUpdate() {
    //     console.log('[Modal] componentDidUpdate')
    // }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal
