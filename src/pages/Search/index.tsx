import React, { useCallback, useEffect, useState } from 'react';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import SectionCallAction from '../../components/SectionCallAction';
import {Link, useLocation} from 'react-router-dom';
import LogoNavBar from '../../components/LogoNavBar';
import { cidades, locais, tiposLocais } from '../../utils/contents';
import { useAuth } from '../../hooks/auth';
import NavBarLoged from '../../components/NavBarLoged';

import { loadScripts, Propriedade } from '../Home';


const Search:React.FC =()=>{

	const [propriedadesRecentes,setPropriedadesRecentes]=useState<Propriedade[]>([]);
	const queryFilter=useLocation().search;

	const {user}:any = useAuth()

	useEffect(() => {
	
	loadScripts()
	
		
		
	},[]);




	function openFilterSearch() {
		
		
		
	  }
	  function closeFilterSearch() {
		//document.getElementById("filter_search").style.display = "none";
	}

	
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
						<div className="nav-menus-wrapper" style={{transitionProperty:"none"}}>
							<ul className="nav-menu">
							<li><Link to="/">Home</Link></li>

							<li><Link to="#">Quem somos?</Link></li>
	
							<li className="active"><Link to="/pesquisa">Pesquisa</Link></li>

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
							
							<h2 className="ipt-title">Lista de locais</h2>
							<span style={{fontFamily:'Montserrat', fontSize:20}}>Escolha um local </span>
							
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
											<input type="text" className="form-control" placeholder="Informe a localiza????o"/>
											<i className="ti-location-pin"></i>
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
											<select id="ptypes" className="form-control">
												<option value="">&nbsp;</option>
												{tiposLocais.map((local)=>(
													<option value={local.id}>{local.nome}</option>
												))}
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>

									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="form-group">
												<div className="input-with-icon">
													<input type="text" className="form-control" placeholder="M??nimo"/>
													<i className="ti-money"></i>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="form-group">
												<div className="input-with-icon">
													<input type="text" className="form-control" placeholder="M??ximo"/>
													<i className="ti-money"></i>
												</div>
											</div>
										</div>
									</div>
									
									<div className="range-slider">
										<label>Seu or??amento(por di??ria)</label>
										<div data-min="0" data-max="2000" data-min-name="min_price" data-max-name="min_price" data-unit="R$" className="range-slider-ui ui-slider" aria-disabled="false"></div>
										<div className="clearfix"></div>
									</div>
									
									<div className="range-slider">
										<label>Alcance da busca</label>
										<div data-min="0" data-max="200"  data-max-name="max_area" data-unit="KM" className="range-slider-ui ui-slider" aria-disabled="false"></div>
										<div className="clearfix"></div>
									</div>

									<div className="ameneties-features">
										
										<button className="btn btn-theme full-width">Encontrar novos locais</button>
									
									</div>
							
								</div>
							</div>
						
						</div>
						
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
												<a href="#">Pre??o</a>
												<a href="#">Melhor avaliado</a>
												<a href="#">Mais avaliado</a>
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
									</div>
									
									<div className="listing-content">
									
										<div className="listing-detail-wrapper">
											<div className="listing-short-detail">
												<h4 className="listing-name"><Link to="/apartamentos/apartamento-belo-horizonte">{local.nome}</Link></h4>
												<span className="listing-location"><i className="ti-location-pin"></i>Rua Fict??cia, Belo Horizonte, MG</span>
											</div>
											
										</div>
									
										<div className="listing-features-info">
											<ul>
												<li><strong>Quartos:</strong>2</li>
												<li><strong>Banheiros:</strong>1</li>
												<li><strong>Espa??o:</strong>2.970<strong>M??</strong></li>
											</ul>
										</div>
									
										<div className="listing-footer-wrapper">
											<div className="listing-price">
												<h4 className="list-pr">R${local.preco_dia}/dia</h4>
											</div>
											<div className="listing-detail-btn">
												<Link to="/apartamentos/apartamento-belo-horizonte" className="more-btn">Mais Informa????es</Link>
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