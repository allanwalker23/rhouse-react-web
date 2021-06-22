import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import SectionCallAction from '../../components/SectionCallAction';
import {Link} from 'react-router-dom';
import LogoNavBar from '../../components/LogoNavBar';
import { useAuth } from '../../hooks/auth';
import NavBarLoged from '../../components/NavBarLoged';

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
	const {user}:any= useAuth();
	console.log(user)
	useEffect(() => {
		loadScripts();
	});

	function loadScripts(){
	
		const script = document.createElement("script");
		script.src = "assets/js/jquery.min.js";
		script.async = true;

		const script2 = document.createElement("script");
		script2.src = "assets/js/jquery.min.js";
		script2.async = true;

		const script3 = document.createElement("script");
		script3.src = "assets/js/popper.min.js";
		script3.async = true;

		const script4 = document.createElement("script");
		script4.src="assets/js/bootstrap.min.js";
		script4.async = true;

		const script5 = document.createElement("script");
		script5.src="assets/js/rangeslider.js";
		script5.async = true;

		const script6 = document.createElement("script");
		script6.src="assets/js/select2.min.js";
		script6.async = true;

		const script7 = document.createElement("script");
		script7.src="assets/js/jquery.magnific-popup.min.js";
		script7.async = true;
		
		const script8 = document.createElement("script");
		script8.src="assets/js/slick.js";
		script8.async = true;

		const script9 = document.createElement("script");
		script9.src="assets/js/slider-bg.js";
		script9.async = true;
		
		const script10 = document.createElement("script");
		script10.src="assets/js/lightbox.js";
		script10.async = true;
		
		const script11 = document.createElement("script");
		script11.src="assets/js/imagesloaded.js";
		script11.async = true;

		const script12 = document.createElement("script");
		script12.src="assets/js/custom.js";
		script12.async = true;

		const script13 = document.createElement("script");
		script13.src="assets/js/cl-switch.js";
		script13.async = true;
		

		document.body.appendChild(script);
		document.body.appendChild(script2);
		document.body.appendChild(script3);
		document.body.appendChild(script4);
		document.body.appendChild(script5);
		document.body.appendChild(script6);
		document.body.appendChild(script7);
		document.body.appendChild(script8);
		document.body.appendChild(script9);
		document.body.appendChild(script10);
		document.body.appendChild(script11);
		document.body.appendChild(script12);
		document.body.appendChild(script13);
	}

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

							<li><Link to="/noticias">Notícias</Link></li>
									
							{user==undefined &&(
								<li><a href="JavaScript:Void(0);" data-toggle="modal" data-target="#signup">Criar conta</a></li>
							)}
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
									<h4>{user.nome_completo}</h4>
									<span>@{user.nome_usuario}</span>
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
								<div className="col-lg-12 col-md-12 col-sm-12">
									<h4>Seu pacote atual: <span className="pc-title theme-cl">Pacote Ouro</span></h4>
								</div>
							</div>
							
							<div className="row">
					
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-1">
										<div className="dashboard-stat-content"><h4>607</h4> <span>Propriedades Adicionadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-2">
										<div className="dashboard-stat-content"><h4>102</h4> <span>Propriedades Restantes</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-3">
										<div className="dashboard-stat-content"><h4>70</h4> <span>Clientes Satisfeitos</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-4">
										<div className="dashboard-stat-content"><h4>30</h4> <span>Propriedades Marcadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-5">
										<div className="dashboard-stat-content"><h4>Ilimitado</h4> <span>Imagens/ por propriedade</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-6">
										<div className="dashboard-stat-content"><h4>2021-06-26</h4> <span>Termina em</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>

							</div>
							
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="card-header" id="Packages">
									  <h2 className="mb-0">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#extraPackages" aria-expanded="false" aria-controls="extraSer">
										  Veja os pacotes disponíveis e seus métodos de pagamento
										</button>
									  </h2>
									</div>
									<div id="extraPackages" className="collapse" aria-labelledby="Packages" data-parent="#accordionExample">
										<div className="row">
											
											
											<div className="col-lg-4 col-md-4 c-l-sm-12">
												<div className="package-box">
													<span className="theme-cl">Pacote Ouro</span>
													<h4 className="packages-features-title">R$ 600 / 1 Ano</h4>
													<ul className="packages-lists-list">
														<li>Propriedade ilimitadas</li>
														<li>Imagens Ilimitadas</li>
														<li>Ajuda & Suporte</li>
													</ul>
													<div className="buypackage">
														<div className="switchbtn paying">
															<input id="gold" className="switchbtn-checkbox" type="radio" value="2" checked name="package7"/>
															<label className="switchbtn-label" htmlFor="gold"></label>
														</div>
														<span>Mudar de plano</span>
													</div>
												</div>
											</div>
											
											
											<div className="col-lg-4 col-md-4 c-l-sm-12">
												<div className="package-box">
													<span className="theme-cl">Pacote Premium</span>
													<h4 className="packages-features-title">R$300/ 1 year</h4>
													<ul className="packages-lists-list">
														<li>20 propriedades</li>
														<li>5 Imagens/ por propriedade</li>
														<li>Ajuda & Suporte</li>
													</ul>
													<div className="buypackage">
														<div className="switchbtn paying">
															<input id="premium" className="switchbtn-checkbox" type="radio" value="2" name="package7"/>
															<label className="switchbtn-label" htmlFor="premium"></label>
														</div>
														<span>Mudar de plano</span>
													</div>
												</div>
											</div>
											
											
											<div className="col-lg-4 col-md-4 c-l-sm-12">
												<div className="package-box">
													<span className="theme-cl">Pacote Standard</span>
													<h4 className="packages-features-title">USD 100 / 1 year</h4>
													<ul className="packages-lists-list">
														<li>10 propriedades</li>
														<li>2 Imagens/ por propriedade</li>
														<li>Ajuda & Suporte</li>
													</ul>
													<div className="buypackage">
														<div className="switchbtn paying">
															<input id="standard" className="switchbtn-checkbox" type="radio" value="2" name="package7"/>
															<label className="switchbtn-label" htmlFor="standard"></label>
														</div>
														<span>Mudar de plano</span>
													</div>
												</div>
											</div>
										
										</div>
										
										<div className="row mt-5">
											<div className="col-lg-12 col-md-12">
												<h4>Formas de Pagamento</h4>
											</div>
											<div className="col-lg-12 col-md-12">
												<a href="#" className="pay-btn paypal">Pague com PagSeguro</a>
												
											</div>
										</div>
										
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
												<label>Sua Profissão</label>
												<input type="text" className="form-control" placeholder="Engenheiro"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Telefone</label>
												<input type="text" className="form-control" placeholder="(XX)XXXX-XXXX"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Endereço</label>
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
											
										</div>
									</div>
								</div>
								
								<div className="form-submit">	
									<h4>Redes sociais</h4>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-6">
												<label>Facebook</label>
												<input type="text" className="form-control" placeholder="https://facebook.com/"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Twitter</label>
												<input type="email" className="form-control" placeholder="https://twitter.com/"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Google Plus</label>
												<input type="text" className="form-control" placeholder="https://googleplus.com/"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>LinkedIn</label>
												<input type="text" className="form-control" placeholder="https://linkedin.com/"/>
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