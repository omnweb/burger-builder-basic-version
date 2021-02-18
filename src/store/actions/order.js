// COntém criadores de ação para enviar o pedido

import * as actionTypes from './actionTypes'
import axios from '../../axio-orders'

export const purchaseBurgerSuccess = (id, oderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: oderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

//Assinc function unsing meddleware
export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data)
                dispatch(purchaseBurgerSuccess(response.data, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            })
    }
}