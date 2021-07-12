import React from 'react'
import Home from '../pages/Home'
import {Route, Switch} from 'react-router-dom';
import Search from '../pages/Search';
import DashBoard from '../pages/DashBoard';
import SubmitProperty from '../pages/SubmitProperty';
import LocalDetails from '../pages/LocalDetails';
import MyProperties from '../pages/MyProperties';
import ChangePassword from '../pages/ChangePassword';
import News from '../pages/News';
import ErrorPage from '../pages/ErrorPage';
import Payment from '../pages/Payment';
import PropertiesMarked from '../pages/PropertiesMarked';


const Routes:React.FC = () =>(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/pesquisa" component={Search}/>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/criar-propriedade" component={SubmitProperty} />
        <Route path="/apartamentos/apartamento-belo-horizonte" component={LocalDetails}/>
        <Route path="/minhas-propriedades" component={MyProperties} />
        <Route path="/locais-marcados" component={PropertiesMarked} />
        <Route path="/noticias" component={News} />
        <Route path="/pagamentos" component={Payment} />
        <Route path="/alterar-senha" component={ChangePassword} />
        
        
    </Switch>

)

export default Routes