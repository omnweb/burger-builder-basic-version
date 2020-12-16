import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axio-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }
    // Para prevenir o refresh usar o parâmentro event 
    // no corpo da função utilizar event.preventDefault()
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            costumers: {
                name: 'Neto',
                address: {
                    street: 'Street two',
                    zipCode: '17340000',
                    country: 'Brasil'
                },
                email: 'neto@email.com'
            },
            deliveryMethod: 'fastest'

        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false })
            })

    }
    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="Your Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER NOW</Button>
                {/* <Button btnType="Danger" clicked>CANCEL</Button> */}
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData