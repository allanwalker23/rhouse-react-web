import React from 'react';
import ChangePassword from './pages/ChangePassword';
import DashBoard from './pages/DashBoard';
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import LocalDetails from './pages/LocalDetails';
import MyProperties from './pages/MyProperties';
import Search from './pages/Search';
import SubmitProperty from './pages/SubmitProperty';
import Routes from './routes';
import AppProvider from './hooks';



const App:React.FC = ()=>{
  return(
    
    <BrowserRouter>
    <AppProvider>
    <Routes/>
    </AppProvider>
    </BrowserRouter>
  )
}
export default App;
