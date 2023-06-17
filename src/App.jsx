import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Detail from './components/Detail'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='w-screen h-screen px-10'>
      <Navbar />
      <div className='grid grid-cols-2'>
        <Product />
        <Detail />
      </div>
    </div>

  )
}

export default App
