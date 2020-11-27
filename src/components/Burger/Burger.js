// This is the file that renders the hamburger

import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIgredient'
import classes from './Burger.css'
const burger = (props) => {
    // Mwétodo chave que extrai as chaves de um determinado objeto e transforma isso em uma matriz.
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // Lida com ingredientes e quantidades dinâmicamente
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // Retornando o BurgerIngredient
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
            // Se não houver ingredientes, chega como um array com 4 arrays vazios
            // Reduzindo todos para um único array vazio, ou qdo houverem elementos mostra a qtdade total de arrays
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )

}

export default burger