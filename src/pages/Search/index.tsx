import React, { useEffect, useState } from 'react';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import SectionCallAction from '../../components/SectionCallAction';
import {Link, useLocation} from 'react-router-dom';
import LogoNavBar from '../../components/LogoNavBar';
import { cidades, locais, tiposLocais } from '../../utils/contents';


const Search:React.FC =()=>{

	useEffect(()=>{
		loadScript();
	})
	function openFilterSearch() {
	//	document.getElementById("filter_search").style.display='none';
		
	  }
	  function closeFilterSearch() {
		//document.getElementById("filter_search").style.display = "none";
	}

	function loadScript(){

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
						<div className="nav-menus-wrapper" style={{transitionProperty:"none"}}>
							<ul className="nav-menu">
							<li><Link to="/">Home</Link></li>

							<li><Link to="#">Quem somos?</Link></li>
	
							<li className="active"><Link to="/pesquisa">Pesquisa</Link></li>
	

							<li><Link to="/noticias">Notícias</Link></li>
									
									
							<li><a href="JavaScript:Void(0);" data-toggle="modal" data-target="#signup">Criar conta</a></li>
									
							</ul>
							
							<ul className="nav-menu nav-menu-social align-to-right">
								
								<li>
									<a href="#" data-toggle="modal" data-target="#login">
										<i className="fas fa-user-circle mr-1"></i>Login</a>
								</li>
								<li className="add-listing theme-bg">
									<a href="/criar-propriedade">Adicionar local</a>
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
							
							<h2 className="ipt-title">Lista de locais</h2>
							<span className="ipn-subtitle">Escolha um local </span>
							
						</div>
					</div>
				</div>
			</div>
		
			<section>
			
				<div className="container">
					
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="filter_search_opt">
								<a href="javascript:void(0);" onClick={openFilterSearch}>Search Property<i className="ml-2 ti-menu"></i></a>
							</div>
						</div>
					</div>
					
					<div className="row">
						
						<div className="col-lg-8 col-md-12 col-md-12 list-layout">
							<div className="row">
							
								<div className="col-lg-12 col-md-12">
									<div className="filter-fl">
										<h4>Total de locais encontrados: <span className="theme-cl">6</span></h4>
										<div className="btn-group custom-drop">
											<button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												Filtrar<i className="ti-angle-down"></i>
											</button>
											<div className="dropdown-menu pull-right animated flipInX">
												<a href="#">Data</a>
												<a href="#">Mais visto</a>
												<a href="#">Mais Popular</a>
											</div>
										</div>
									</div>
								</div>
								
							{locais.map((local)=>(
								<div className="col-lg-12 col-md-12">
								<div className="property-listing property-1">
										
									<div className="listing-img-wrapper">
									<Link to="/apartamentos/apartamento-belo-horizonte">
											<img src={local.foto1} className="img-fluid mx-auto" alt="" />
									</Link>
										<div className="listing-like-top">
											<i className="ti-heart"></i>
										</div>
										<div className="listing-rating">
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star"></i>
										</div>
										<span className="property-type">Para Alugar</span>
									</div>
									
									<div className="listing-content">
									
										<div className="listing-detail-wrapper">
											<div className="listing-short-detail">
												<h4 className="listing-name"><Link to="/apartamentos/apartamento-belo-horizonte">{local.nome}</Link></h4>
												<span className="listing-location"><i className="ti-location-pin"></i>Rua Fictícia, Belo Horizonte, MG</span>
											</div>
											<div className="list-author">
												<a href="#"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt=""/></a>
											</div>
										</div>
									
										<div className="listing-features-info">
											<ul>
												<li><strong>Quartos:</strong>2</li>
												<li><strong>Banheiros:</strong>1</li>
												<li><strong>Espaço:</strong>2.970<strong>M²</strong></li>
											</ul>
										</div>
									
										<div className="listing-footer-wrapper">
											<div className="listing-price">
												<h4 className="list-pr">R${local.preco_dia}/dia</h4>
											</div>
											<div className="listing-detail-btn">
												<Link to="/apartamentos/apartamento-belo-horizonte" className="more-btn">Mais informações</Link>
											</div>
										</div>
										
									</div>
									
								</div>
							</div>

							))}
								
								
							</div>
							
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<ul className="pagination p-center">
										<li className="page-item">
										  <a className="page-link" href="#" aria-label="Previous">
											<span className="ti-arrow-left"></span>
											<span className="sr-only">Previous</span>
										  </a>
										</li>
										<li className="page-item active"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item"><a className="page-link" href="#">...</a></li>
										<li className="page-item"><a className="page-link" href="#">18</a></li>
										<li className="page-item">
										  <a className="page-link" href="#" aria-label="Next">
											<span className="ti-arrow-right"></span>
											<span className="sr-only">Next</span>
										  </a>
										</li>
									</ul>
								</div>
							</div>
					
						</div>
						
						<div className="col-lg-4 col-md-12 col-sm-12">
							<div className="simple-sidebar sm-sidebar" id="filter_search"  style={{left:0}}>							
							
								<div className="search-sidebar_header">
									<h4 className="ssh_heading">Close Filter</h4>
									<button onClick={closeFilterSearch} className="w3-bar-item w3-button w3-large"><i className="ti-close"></i></button>
								</div>
								
								<div className="sidebar-widgets">
									
									<h5 className="mb-3">Pesquise uma nova propriedade</h5>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Informe o bairro"/>
											<i className="ti-search"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Informe a localização"/>
											<i className="ti-location-pin"></i>
										</div>
									</div>
									
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="form-group">
												<div className="input-with-icon">
													<input type="text" className="form-control" placeholder="Mínimo"/>
													<i className="ti-money"></i>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="form-group">
												<div className="input-with-icon">
													<input type="text" className="form-control" placeholder="Máximo"/>
													<i className="ti-money"></i>
												</div>
											</div>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<select id="bedrooms" className="form-control">
												<option value="">&nbsp;</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
											<i className="fas fa-bed"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<select id="bathrooms" className="form-control">
												<option value="">&nbsp;</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
											<i className="fas fa-bath"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<select id="ptypes" className="form-control">
												<option value="">&nbsp;</option>
												{tiposLocais.map((local)=>(
													<option value={local.id}>{local.nome}</option>
												))}
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<select id="cities" className="form-control">
												<option value="">&nbsp;</option>
												{cidades.map((cidades)=>(
													<option value={cidades.id}>{cidades.nome}</option>
												))}
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>
									
									<div className="range-slider">
										<label>Preço customizado</label>
										<div data-min="0" data-max="50000" data-min-name="min_price" data-max-name="min_price" data-unit="R$" className="range-slider-ui ui-slider" aria-disabled="false"></div>
										<div className="clearfix"></div>
									</div>
									
									<div className="range-slider">
										<label>Espaço</label>
										<div data-min="0" data-max="10000" data-min-name="min_area" data-max-name="max_area" data-unit="M²" className="range-slider-ui ui-slider" aria-disabled="false"></div>
										<div className="clearfix"></div>
									</div>

									<div className="ameneties-features">
										
										<button className="btn btn-theme full-width">Encontrar novos locais</button>
									
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

export default Search