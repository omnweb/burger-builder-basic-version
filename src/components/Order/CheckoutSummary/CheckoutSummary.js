import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope is tastes well!</h1>
            {/* Checkout com o desenho do hamburger */}
            <div style={{ width: ' 100%', margin: 'auto' }}>
                {/* Recebendo o componente de hamburger e setando os ingredientes como propriedades */}
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked> CANCEL </Button>
            <Button btnType="Success" clicked> CONTINUE </Button>
        </div>
    )
}

export default checkoutSummary