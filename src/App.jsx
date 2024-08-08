import { useState, useEffect } from 'react'
import { CreateTask } from './components/CreateTask/CreateTask'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [showProducts, setShowProducts] = useState('')


  useEffect(() => {
    fetch('http://localhost:3000/products/',{
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json()).then((data) => {
        setShowProducts(data)
    }).catch((err) => console.error(err))
}, [])


  return (
    <div className='containerCards'>
    {showProducts && showProducts.map((products) => (
        <CreateTask 
          key={products.id}
          name={products.productName}
          price={products.price}
          category={products.category}
        />
    ))}
    </div>
  )
}

export default App
