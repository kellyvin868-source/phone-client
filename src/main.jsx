import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from './assets/context/HouseContext.jsx'


createRoot(document.getElementById('root')).render(

     <BrowserRouter>
     <GlobalContext>
        <App /> 
     </GlobalContext>
  </BrowserRouter>

 
   
 
)
