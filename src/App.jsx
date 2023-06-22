import Navbar from './components/Navbar'
import Product from './components/Product'
import Detail from './components/Detail'


function App() {


  return (

    <div className='w-screen h-screen px-10'>
      <Navbar />
      <div className='grid grid-cols-2'>
        <div className="flex justify-center mr-[63px]">
          <Product />
        </div>
        <Detail />
      </div>
    </div>

  )
}

export default App
