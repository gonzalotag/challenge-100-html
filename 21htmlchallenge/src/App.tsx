import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import image from './assets/images/drawers.jpg'
import avatar from './assets/images/avatar-michelle.jpg'
import shareIcon from './assets/images/icon-share.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(false);

  return <body className='flex flex-col p-8 md:max-lg:flex'>
    
      <figure className='drawer'>
        <img 
          src={image} 
          alt="drawerimage"
          className='w-full h-auto rounded shadow-lg' />
      </figure>
      <section className='md:h-full md:w-48'>
      <section className='p-5'>
        <p className='text-gray-blue font-bold'>Shift the overall look and feel by adding these wonderful touches to furniture in your home 
          </p>
      </section>
      <section className='m-5'>
        <p className='text-ligth-gray-blue '>
        Ever been in a room and felt like something was missing? 
          Perhaps it felt slightly bare and uninviting. 
          I’ve got some simple tips to help you make any room feel complete
        </p>
      </section>
      {show &&(
        <section className='flex flex-row space-x-8'>
        <section className='overflow-hidden basis-1/5 rounded-full'>
        <img src={avatar} 
          alt="michelle"
        />
        </section>
        
        <section className='flex flex-col '>
          <strong> Michelle Appleton </strong>
          <p className='text-ligth-gray-blue'>28 Jun 2020</p>  
        </section>
        <section className='basis-11 justify-center content-center items-center' onClick={()=>setShow(!show)}>
          <img 
            src={shareIcon}
            alt="share" 
            className='h-8 w-8 rounded-full '
          />  
        </section>
      </section>
      )}
      {!show && (
        <section className="bg-gray-blue rounded-lg shadow-lg p-8 w-96" onClick={()=>setShow(!show)}>
          
          <ul className="flex space-x-4">
            <li>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Facebook</button>
            </li>
            <li>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Twitter</button>
            </li>
            <li>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Pinterest</button>
            </li>
          </ul>
          <img 
            src={shareIcon}
            alt="share" 
            className='h-8 w-8 rounded-full '
          /> 
        </section>
      )}
      </section>
    </body>
    
  
}

export default App
