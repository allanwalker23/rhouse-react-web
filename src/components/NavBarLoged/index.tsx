import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const NavBarLoged:React.FC = () =>{
    const {user}:any = useAuth()
    return(
        <>
        {user!=undefined?(
         user.tipo_usuario==1 ?(
            <ul className="nav-menu nav-menu-social align-to-right drops-dashboard">
            
            <li>
                <div className="btn-group account-drop">
                    <button type="button" className="btn btn-order-by-filt" style={{color:"#647392"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/img/user-5.jpg" className="avater-img" alt=""/>Bem vindo, {user.nome_completo}
                    </button>
                    <div className="dropdown-menu pull-right animated flipInX">
                        <Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link>                                  
                        <Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas Propriedades</Link>                                   
                        <Link to="/gerenciar-reservas"><i className=" ti-agenda"></i>Gerenciar reservas</Link>                                   
                        <Link to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link>
                        <br></br>
                        <Link to="/sair"><i className="ti-power-off"></i>Sair</Link>
                    </div>
                </div>
            </li>
        
        </ul>

        ):(
                
            <ul className="nav-menu nav-menu-social align-to-right drops-dashboard">
                        
            <li>
                <div className="btn-group account-drop">
                    <button type="button" className="btn btn-order-by-filt" style={{color:"#647392"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/img/user-5.jpg" className="avater-img" alt=""/>Bem vindo, {user.nome_completo}
                    </button>
                    <div className="dropdown-menu pull-right animated flipInX">
                        <Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link>                                  
                        <Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link>                                   
                        <Link to="/minhas-reservas"><i className="ti-agenda"></i>Minhas reservas</Link>                                   
                        <Link to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link>
                        <br></br>
                        <Link to="/alterar-senha"><i className="ti-power-off"></i>Sair</Link>
                    </div>
                </div>
            </li>

            </ul>
        )

        
        ):(
           
		<ul className="nav-menu nav-menu-social align-to-right">
            <li className="add-listing theme-bg">
                <a href="/criar-propriedade">Adicionar um local</a>
            </li>	
                            
            <li><a href="JavaScript:Void(0);" data-toggle="modal" data-target="#signup">Criar conta</a></li>
                            
            <li>
                <a href="#" data-toggle="modal" data-target="#login">
                <i className="fas fa-user-circle mr-1"></i>Login</a>
            </li>
                            
            </ul>			                			
        )}
        </>

    )
}

export default NavBarLoged;