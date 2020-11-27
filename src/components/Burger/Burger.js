// This is the file that renders the hamburger

import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIgredient'
import classes from './Burger.css'
const burger = (props) => {
    // Mwétodo chave que extrai as chaves de um determinado objeto e transforma isso em uma matriz.
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // Lida com ingredientes e quantidades dinâmicamente
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // Retornando o BurgerIngredient
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger