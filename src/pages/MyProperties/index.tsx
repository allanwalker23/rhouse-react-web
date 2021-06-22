import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import LogoNavBar from '../../components/LogoNavBar';
import SectionCallAction from '../../components/SectionCallAction';

const MyProperties:React.FC = ()=>{

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
        <>
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

							</ul>
							
							<ul className="nav-menu nav-menu-social align-to-right drops-dashboard">
								
								<li>
									<div className="btn-group account-drop">
										<button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<img src="assets/img/user-5.jpg" className="avater-img" alt=""/>Bem Vindo, Admin
										</button>
										<div className="dropdown-menu pull-right animated flipInX">
											<Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link>                                  
											<Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas Propriedades</Link>                                   
											<Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link>                                   
											<Link className="active" to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link>
										</div>
									</div>
								</li>
							</ul>
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
			
				<div className="container-fluid">
					<div className="row">
						
						<div className="col-lg-3 col-md-4">
							<div className="dashboard-navbar">
								
								<div className="d-user-avater">
									<img src="assets/img/user-3.jpg" className="img-fluid avater" alt=""/>
									<h4>Rodrigo Alves</h4>
									<span>Brasil</span>
								</div>
								
								<div className="d-navigation">
									<ul>
										<li><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
										<li className="active"><Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas Propriedades</Link></li>                                   
										<li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link></li>        
										<li><Link to="/criar-propriedade"><i className="ti-pencil-alt"></i>Adicionar propriedade</Link></li>
										<li><Link className="active" to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
										<li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

									</ul>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-9 col-md-8">
							<div className="dashboard-wraper">
							
								<div className="form-submit">	
									<h4>Minhas propriedades</h4>
								</div>
								
								<div className="row">
								
									<div className="col-md-12 col-sm-12 col-md-12">
										<div className="singles-dashboard-list">
											<div className="sd-list-left">
												<img src="assets/img/p-3.jpg" className="img-fluid" alt="" />
											</div>
											<div className="sd-list-right">
												<h4 className="listing_dashboard_title"><a href="#" className="theme-cl">Propriedade</a></h4>
												<div className="user_dashboard_listed">
													Preço: R$1.450/mês
												</div>
												<div className="user_dashboard_listed">
													Para <a href="javascript:void(0);" className="theme-cl">Alugar</a> and <a href="javascript:void(0);" className="theme-cl">Apartmentos</a>
												</div>
												<div className="user_dashboard_listed">
													Cidade: <a href="javascript:void(0);" className="theme-cl">Minas gerais</a> , Area:1.345M2
												</div>
												<div className="action">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="ti-pencil"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="202 User View"><i className="ti-eye"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Delete Property" className="delete"><i className="ti-close"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Make Featured" className="delete"><i className="ti-star"></i></a>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-12 col-sm-12 col-md-12">
										<div className="singles-dashboard-list">
											<div className="sd-list-left">
												<img src="assets/img/p-4.jpg" className="img-fluid" alt="" />
											</div>
											<div className="sd-list-right">
												<h4 className="listing_dashboard_title"><a href="#" className="theme-cl">Propriedade</a></h4>
												<div className="user_dashboard_listed">
													Preço: R$1.450/mês
												</div>
												<div className="user_dashboard_listed">
													Para <a href="javascript:void(0);" className="theme-cl">Alugar</a> and <a href="javascript:void(0);" className="theme-cl">Apartmentos</a>
												</div>
												<div className="user_dashboard_listed">
													Cidade: <a href="javascript:void(0);" className="theme-cl">Minas gerais</a> , Area:1.345M2
												</div>
												<div className="action">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="ti-pencil"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="202 User View"><i className="ti-eye"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Delete Property" className="delete"><i className="ti-close"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Make Featured" className="delete"><i className="ti-star"></i></a>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-12 col-sm-12 col-md-12">
										<div className="singles-dashboard-list">
											<div className="sd-list-left">
												<img src="assets/img/p-5.jpg" className="img-fluid" alt="" />
											</div>
											<div className="sd-list-right">
												<h4 className="listing_dashboard_title"><a href="#" className="theme-cl">Propriedade</a></h4>
												<div className="user_dashboard_listed">
													Preço: R$1.450/mês
												</div>
												<div className="user_dashboard_listed">
													Para <a href="javascript:void(0);" className="theme-cl">Alugar</a> and <a href="javascript:void(0);" className="theme-cl">Apartmentos</a>
												</div>
												<div className="user_dashboard_listed">
													Cidade: <a href="javascript:void(0);" className="theme-cl">Minas gerais</a> , Area:1.345M2
												</div>
												<div className="action">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="ti-pencil"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="202 User View"><i className="ti-eye"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Delete Property" className="delete"><i className="ti-close"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Make Featured" className="delete"><i className="ti-star"></i></a>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-12 col-sm-12 col-md-12">
										<div className="singles-dashboard-list">
											<div className="sd-list-left">
												<img src="assets/img/p-6.jpg" className="img-fluid" alt="" />
											</div>
											<div className="sd-list-right">
												<h4 className="listing_dashboard_title"><a href="#" className="theme-cl">Propriedade</a></h4>
												<div className="user_dashboard_listed">
													Preço: R$1.450/mês
												</div>
												<div className="user_dashboard_listed">
													Para <a href="javascript:void(0);" className="theme-cl">Alugar</a> and <a href="javascript:void(0);" className="theme-cl">Apartmentos</a>
												</div>
												<div className="user_dashboard_listed">
													Cidade: <a href="javascript:void(0);" className="theme-cl">Minas gerais</a> , Area:1.345M2
												</div>
												<div className="action">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="ti-pencil"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="202 User View"><i className="ti-eye"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Delete Property" className="delete"><i className="ti-close"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Make Featured" className="delete"><i className="ti-star"></i></a>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-12 col-sm-12 col-md-12">
										<div className="singles-dashboard-list">
											<div className="sd-list-left">
												<img src="assets/img/p-7.jpg" className="img-fluid" alt="" />
											</div>
											<div className="sd-list-right">
												<h4 className="listing_dashboard_title"><a href="#" className="theme-cl">Propriedade</a></h4>
												<div className="user_dashboard_listed">
													Preço: R$1.450/mês
												</div>
												<div className="user_dashboard_listed">
													Para <a href="javascript:void(0);" className="theme-cl">Alugar</a> and <a href="javascript:void(0);" className="theme-cl">Apartmentos</a>
												</div>
												<div className="user_dashboard_listed">
													Cidade: <a href="javascript:void(0);" className="theme-cl">Minas gerais</a> , Area:1.345M2
												</div>
												<div className="action">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="ti-pencil"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="202 User View"><i className="ti-eye"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Delete Property" className="delete"><i className="ti-close"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Make Featured" className="delete"><i className="ti-star"></i></a>
												</div>
											</div>
										</div>
									</div>
									
								</div>
								
							</div>
						</div>
						
					</div>
                    
				</div>
			

			<SectionCallAction/>
			<Footer/>
			
			<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
			

		</div>
		
		
	</body>
    </>
    )
}

export default MyProperties;