import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => {
    return (
        <div>
            <h1>We hope is tastes well!</h1>
            {/* Checkout com o desenho do hamburger */}
            <div style={{ width: ' 300px', height: '300px', margin: 'auto' }}>
                {/* Recebendo o componente de hamburger e setando os ingredientes como propriedades */}
                <Burger ingredients={console.log(props.ingredients)} />
            </div>
            <Button btnType="Danger" clicked> CANCEL </Button>
            <Button btnType="Success" clicked> CONTINUE </Button>
        </div>
    )
}

export default checkoutSummary