import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import getAllPizzasReducer from '../reducers/pizzaReducers'

import Pizza from '../components/Pizza'
function Homescreen() {

    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate


    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div className="row justify-content-center">

            {loading ? (<h1>Loading....</h1>) : error ? (<h1>Something went wrong.....</h1>) : (



                pizzas.map(pizza => {
                    return <div className="col-md-3 m-3" key={pizza._id}>
                        <div >
                            <Pizza pizza={pizza} />
                        </div>
                    </div>
                })


            )}






        </div>
    )
}
export default Homescreen;