// Class-based component to provide state management

import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.75,
    meat: 1.5,
    bacon: 0.75
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props)
    //     // Usando o this, pois receberá um método
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 5
    }
    addIngredientHandler = (type) => {
        // É Necessário saber o que é o ingrediente antigo.
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })
    }
    removeIngredientHandler = (type) => {

    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder