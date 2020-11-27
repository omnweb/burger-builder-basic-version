// This is the file that renders the hamburger

import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIgredient'
import classes from './Burger.css'
const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />


        </div>
    )
}

export default burger