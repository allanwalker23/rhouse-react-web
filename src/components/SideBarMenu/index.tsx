import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const NavBarLoged:React.FC = () =>{

    const {user}:any = useAuth()
    
    return(
        <>
        {user!=undefined?(
         user.tipo_usuario==1 ?(
             <>
            <li ><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
            <li><Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas propriedades</Link></li> 
            <li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Gerenciar Reservas</Link></li>        
            <li><Link to="/criar-propriedade"><i className="ti-pencil-alt"></i>Adicionar propriedade</Link></li>
            <li><Link to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
            <li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

            <button className="btn btn-theme" type="submit" style={{maxWidth:'325 px', width:'260px'}}>Seja um cliente</button>	
            
            </>
        ):(
            <>
            
            <li><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
            
            <li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link></li>        
            <li><Link to="/minhas-reservas"><i className="ti-agenda"></i>Minhas Reservas</Link></li>
            <li><Link to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
            <li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

            <button className="btn btn-theme" type="submit" style={{maxWidth:'325 px', width:'260px'}}>Seja um locátario</button>	     
            </>
        )

        
        ):(
           <p>Usuario não logado</p>
				                			
        )}
        </>

    )
}

export default NavBarLoged;