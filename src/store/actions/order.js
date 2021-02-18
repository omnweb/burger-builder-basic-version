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
        actionTypes: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

//Assinc function unsing meddleware
export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
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