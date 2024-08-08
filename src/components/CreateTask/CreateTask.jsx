import './CreateTask.css'
// import { useState, useEffect } from 'react'

export const CreateTask = ({name, price, category}) => {
    return(
            <div className='cardProd'>
                <h5>{name}</h5>
                <p>{category}</p>
                <p>{price}</p>
            </div>
    )
}