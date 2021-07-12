import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import SectionCallAction from '../../components/SectionCallAction';
import {Link} from 'react-router-dom';
import LogoNavBar from '../../components/LogoNavBar';
import { useAuth } from '../../hooks/auth';
import NavBarLoged from '../../components/NavBarLoged';
import { loadScripts } from '../Home';

interface UserObject{
    id: number,
    nome_completo: string,
    nome_usuario: string,
    email:string,
    senha:string,
    telefone: string,
    created_at: Date,
    updated_at: Date
}

const DashBoard: React.FC = ()=>{
	//const {user}:any= useAuth();
	
	useEffect(() => {
		loadScripts();
	});


    return(
		<body className="default-skin">
		
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
							<span className="ipn-subtitle">Bem vindo a sua conta</span>
							
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
									<h4>User</h4>
									<span>user@gmail</span>
								</div>
								
								<div className="d-navigation">
									<ul>
										<li className="active"><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
										<li><Link  to="/minhas-propriedades"><i className="ti-layers"></i>Minhas Propriedades</Link></li>                                   
										<li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link></li>        
										<li><Link to="/criar-propriedade"><i className="ti-pencil-alt"></i>Adicionar propriedade</Link></li>
										<li><Link  to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
										<li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

										                                
										                           
										
										
									</ul>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-9 col-md-8">
							
							
							<div className="row">
					
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-1">
										<div className="dashboard-stat-content"><h4>R$564,64</h4> <span>Saldo disponível para saque</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-2">
										<div className="dashboard-stat-content"><h4>R$102,00</h4> <span>Saldo disponível</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-3">
										<div className="dashboard-stat-content"><h4>1.927</h4> <span>Visualizações nos anúncios</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-4">
										<div className="dashboard-stat-content"><h4>30</h4> <span>Propriedades anunciadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-5">
										<div className="dashboard-stat-content"><h4>4</h4> <span>Reservas realizadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-6">
										<div className="dashboard-stat-content"><h4>2</h4> <span>Médias de reserva/mês</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>

							</div>
					
							<div className="dashboard-wraper">
							
								
								<div className="form-submit">	
									<h4>Minha Conta</h4>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-6">
												<label>Seu Nome</label>
												<input type="text" className="form-control" placeholder="Rodrigo Alves"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Email</label>
												<input type="email" className="form-control" placeholder="rodrigo@gmail.com"/>
											</div>
											
											
											<div className="form-group col-md-6">
												<label>Telefone</label>
												<input type="text" className="form-control" placeholder="(XX)XXXX-XXXX"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Endereço de cobrança</label>
												<input type="text" className="form-control" placeholder="Rua Fictícia,7789, Belo Horinzonte, MG"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Cidade</label>
												<input type="text" className="form-control" placeholder="Belo Horizonte"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Estado</label>
												<input type="text" className="form-control" placeholder="Minas Gerais"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>CEP</label>
												<input type="text" className="form-control" placeholder="XXXXXXX"/>
											</div>
											
											<div className="form-group col-md-12">
												<label>Sobre você</label>
												<textarea className="form-control">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>
											</div>
											
														
											<div className="form-group col-lg-12 col-md-12">
												<button className="btn btn-theme" type="submit">Salvar mudanças</button>
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
			
			
		
			
			
			<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
			

		</div>
		
		

	</body>
    )
}

export default DashBoard;