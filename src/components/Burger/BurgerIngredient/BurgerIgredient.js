import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {

        let ingredient = null;

        // Using Switch to Choose Ingredients
        switch (this.props.type) {
            case ('bread-botton'): ingredient = <div>ClassName={classes.BreadBottom}</div>
                break
            case ('bread-botton'): ingredient = (
                <div>ClassName={classes.BreadTop}
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
                break
            case ('meat'): ingredient = <div className={classes.Meat}></div>
                break
            case ('cheese'): ingredient = <div className={classes.Cheese}></div>
                break
            case ('bacon'): ingredient = <div className={classes.Bacon}></div>
                break
            case ('salad'): ingredient = <div className={classes.Salad}></div>
                break
            default: ingredient = null
        }
        return ingredient
    }
}

// validação do tipo prop
burgerIgredient.propTypes = {
    type: PropTypes.string.isRequired //Ao usar o componente de ingredientes sem passar uma string, um erro será gerado.
}

export default BurgerIngredient