import React, { useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import LogoNavBar from '../../components/LogoNavBar';
import NavBarLoged from '../../components/NavBarLoged';
import SectionCallAction from '../../components/SectionCallAction';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { loadScripts } from '../Home';




const ChangePassword:React.FC = () =>{
	const {user}:any=useAuth()
	const history=useHistory();
	useEffect(() => {
		//Verificação De Usuário Logado
		new Promise((resolve, reject) => {
			setTimeout(()=>{
			resolve('')
			},300)
		
		   }).then(()=>{
			   if(user==undefined){
				   history.push({pathname:'/error'})
			   }
		   })
		loadScripts();
	});

	

    return(
    <body className="default-skin" style={{backgroundColor:'#f0f8fe'}}>
    
        
		
        <div id="main-wrapper">
		
			<div className="header header-light head-shadow">
				<div className="container">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header">
							<a className="nav-brand" href="#">
							<LogoNavBar type="other"/>
							</a>
							<div className="nav-toggle"></div>
						</div>
						<div className="nav-menus-wrapper" style={{transitionProperty: "none"}}>
							<ul className="nav-menu">
							<li><Link to="/">Home</Link></li>
							<li><Link to="#">Quem somos?</Link></li>

							<li><Link to="/pesquisa">Pesquisa</Link></li>
	
							<li className="active"><Link to="/dashboard">DashBoard</Link></li>


							</ul>
							<NavBarLoged/>
						</div>
					</nav>
				</div>
			</div>
			
			<div className="clearfix"></div>
			
			<div className="page-title">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							
						<h2 className="ipt-title">Bem vindo!</h2>
						<span style={{fontFamily:'Montserrat', fontSize:20}}>Bem Vindo a sua conta</span>
							
						</div>
					</div>
				</div>
			</div>
			
			<section>
				<div className="container-fluid">
					<div className="row">
						
						<div className="col-lg-3 col-md-4">
							<div className="dashboard-navbar">
								
								<div className="d-user-avater">
									<img src="assets/img/user-3.jpg" className="img-fluid avater" alt=""/>
									{user!=undefined ?(
										<>
									<h4>{user.nome_completo}</h4>
									{user.tipo_usuario==0 ?(
										<span>Cliente</span>
									):(
										<span>Locátario</span>
									)}
									
										</>
									):(
										<>
									<h4></h4>
									<span></span>
										</>
									)}
									
								</div>
								
								<div className="d-navigation">
								<ul>
								{user!=undefined?(
         user.tipo_usuario==1 ?(
             <>
            <li ><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
            <li><Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas propriedades</Link></li> 
            <li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Gerenciar Reservas</Link></li>        
            <li><Link to="/criar-propriedade"><i className="ti-pencil-alt"></i>Adicionar propriedade</Link></li>
            <li className="active"><Link className="active" to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
            <li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

            <button className="btn btn-theme" type="submit" style={{maxWidth:'325 px', width:'260px'}}>Seja um cliente</button>	
            
            </>
        ):(
            <>
            
            <li><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
            
            <li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link></li>        
            <li><Link to="/minhas-reservas"><i className="ti-agenda"></i>Minhas Reservas</Link></li>
            <li className="active"><Link className="active" to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
            <li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

            <button className="btn btn-theme" type="submit" style={{maxWidth:'325 px', width:'260px'}}>Seja um locátario</button>	     
            </>
        )

        
        ):(
           <p>Usuario não logado</p>
				                			
        )}
								</ul>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-9 col-md-8">
							<div className="dashboard-wraper">
							
								<div className="form-submit">	
									<h4>Mudar sua Senha</h4>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-lg-12 col-md-6">
												<label>Senha antiga</label>
												<input type="password" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Senha Nova</label>
												<input type="password" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Confirmar Senha</label>
												<input type="password" className="form-control"/>
											</div>
											
											<div className="form-group col-lg-12 col-md-12">
												<button className="btn btn-theme" type="submit">Salvar Mudanças</button>
											</div>
											
										</div>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
			</section>
		

			<SectionCallAction/>

			<Footer/>
			<LoginComponent/>
			<CadastroComponent/>	
			<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
			

		</div>
		
	

	</body>
    )
}

export default ChangePassword;