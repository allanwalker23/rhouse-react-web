import React, { useEffect } from 'react';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import Noticia from '../../components/Noticia';
import SectionCallAction from '../../components/SectionCallAction';
import {Link} from 'react-router-dom'
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import LogoNavBar from '../../components/LogoNavBar';
import { cidades, locais, tiposLocais } from '../../utils/contents';
import NavBarLoged from '../../components/NavBarLoged';




const Home:React.FC = () =>{
	const{user}:any = useAuth();

	console.log(user)


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
		<>
        <div id="main-wrapper">
		
        
			<div className="header header-transparent change-logo">
				<div className="container">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header">
							<LogoNavBar type="home"/>
							<div className="nav-toggle"></div>
						</div>
						<div className="nav-menus-wrapper" style={{transitionProperty: "none"}}>
							<ul className="nav-menu">
							<li className="active"><Link to="/">Home</Link></li>
		
							<li><Link to="#">Quem somos?</Link></li>





							<li><Link to="/pesquisa">Pesquisa</Link></li>
	

							<li><Link to="/noticias">Notícias</Link></li>		

							<li><Link to="/pagamentos">Pagamentos</Link></li>		
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
			
			<div className="image-cover hero-banner" style={{ backgroundImage: 'url(assets/img/new-banner-4.jpg)', backgroundRepeat:'no-repeat' }} data-overlay="6">
				<div className="container">

					<h1 className="big-header-capt mb-0">Encontre seu espaço ideal</h1>
					<p className="text-center mb-5">Diárias a partir de R$30 com oferta por tempo limitado</p>
					
					<div className="full-search-2 eclip-search italian-search hero-search-radius">
						<div className="hero-search-content">
							
							<div className="row">
							
								<div className="col-lg-4 col-md-4 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control b-r" placeholder="Informe seu bairro"/>
											<i className="ti-search"></i>
										</div>
									</div>
								</div>
	
								
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
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
								</div>

								
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon b-l b-r">
											<select id="location" className="form-control">
												<option value="">&nbsp;</option>
												{cidades.map((cidade)=>(
													<option value={cidade.id}>{cidade.nome}</option>
												))}
											</select>
											<i className="ti-location-pin"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-2 col-sm-12 small-padd">
									<div className="form-group">
										<Link to="/pesquisa" className="btn search-btn">Pesquisar</Link>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
						
				</div>
			</div>
			
			<section>
				<div className="container">
				
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="sec-heading center">
								<h2>Locais mais bem avaliados</h2>
								<p>Ache o lugar perfeito</p>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="property-slide">
							{locais.map((local)=>(

<div className="single-items">
<div className="property-listing property-2">

	<div className="listing-img-wrapper">
		<div className="list-img-slide">
			<div className="click">
				<div><Link to="/apartamentos/apartamento-belo-horizonte"><img src={local.foto1} className="img-fluid mx-auto" alt="" /></Link></div>
				<div><Link to="/apartamentos/apartamento-belo-horizonte"><img src={local.foto2} className="img-fluid mx-auto" alt="" /></Link></div>
				<div><Link to="/apartamentos/apartamento-belo-horizonte"><img src={local.foto3} className="img-fluid mx-auto" alt="" /></Link></div>
			</div>
		</div>
		<span className="property-type">Para Alugar</span>
	</div>
	
	<div className="listing-detail-wrapper pb-0">
		<div className="listing-short-detail">
			<h4 className="listing-name"><Link to="/apartamentos/apartamento-belo-horizonte">{local.nome}</Link><i className="list-status ti-check"></i></h4>
		</div>
	</div>
	
	<div className="price-features-wrapper">
		<div className="listing-price-fx">
			<h6 className="listing-card-info-price">R${local.preco_dia}<span className="price-suffix">/dia</span></h6>
		</div>
		<div className="list-fx-features">
			<div className="listing-card-info-icon">
				<span className="inc-fleat ti-user">15 Pessoas</span>
			</div>
			<div className="listing-card-info-icon">
				<span className="inc-fleat inc-bath">1 Banheiro</span>
			</div>
		</div>
	</div>
	
</div>
</div>


))}
								
							</div>
						</div>
					</div>
					
				</div>
			</section>
			
			<section className="gray">
				<div className="container">
				
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="sec-heading center">
								<h2>Últimos locais adicionados</h2>
								<p>Encontre um novo local</p>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="property-slide">
								
							{locais.map((local)=>(

<div className="single-items">
<div className="property-listing property-2">

	<div className="listing-img-wrapper">
		<div className="list-img-slide">
			<div className="click">
				<div><Link to="/apartamentos/apartamento-belo-horizonte"><img src={local.foto1} className="img-fluid mx-auto" alt="" /></Link></div>
				<div><Link to="/apartamentos/apartamento-belo-horizonte"><img src={local.foto2} className="img-fluid mx-auto" alt="" /></Link></div>
				<div><Link to="/apartamentos/apartamento-belo-horizonte"><img src={local.foto3} className="img-fluid mx-auto" alt="" /></Link></div>
			</div>
		</div>
		<span className="property-type">Para Alugar</span>
	</div>
	
	<div className="listing-detail-wrapper pb-0">
		<div className="listing-short-detail">
		<h4 className="listing-name"><Link to="/apartamentos/apartamento-belo-horizonte">{local.nome}</Link><i className="list-status ti-check"></i></h4>
		</div>
	</div>
	
	<div className="price-features-wrapper">
		<div className="listing-price-fx">
			<h6 className="listing-card-info-price">R${local.preco_dia}<span className="price-suffix">/dia</span></h6>
		</div>
		<div className="list-fx-features">
			<div className="listing-card-info-icon">
				<span className="inc-fleat ti-user">15 Pessoas</span>
			</div>
			<div className="listing-card-info-icon">
				<span className="inc-fleat inc-bath">1 Banheiro</span>
			</div>
		</div>
	</div>
	
</div>
</div>


))}
</div>
								</div>
					</div>
					
				</div>
			</section>
			
			<section>
				<div className="container">
					
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="sec-heading center">
								<h2>Nossos locatários em destaque</h2>
								<p>Alugue com nossos melhores locatários</p>
							</div>
						</div>
					</div>
					
					<div className="row">
						
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="agents-grid">
								
								<div className="jb-bookmark"><a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Bookmark"><i className="ti-bookmark"></i></a></div>
								<div className="agent-call"><a href="#"><i className="lni-phone-handset"></i></a></div>
								<div className="agents-grid-wrap">
									
									<div className="fr-grid-thumb">
										<a href="#">
											<div className="overall-rate">4.4</div>
											<img src="assets/img/user-1.jpg" className="img-fluid mx-auto" alt="" />
										</a>
									</div>
									<div className="fr-grid-deatil">
										<h5 className="fr-can-name"><a href="#">Rodrigo Alves</a></h5>
										<span className="fr-position"><i className="lni-map-marker"></i>3599 Minas Gerais</span>
										<div className="fr-can-rating">
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star"></i>
										</div>
									</div>
									
								</div>
								
								<div className="fr-grid-info">
									<ul>
										<li>Propriedades<span>306</span></li>
										
									</ul>
								</div>
								
								<div className="fr-grid-footer">
									<a href="#" className="btn btn-outline-theme full-width">Ver Perfil<i className="ti-arrow-right ml-1"></i></a>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="agents-grid">
								
								<div className="jb-bookmark"><a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Bookmark"><i className="ti-bookmark"></i></a></div>
								<div className="agent-call"><a href="#"><i className="lni-phone-handset"></i></a></div>
								<div className="agents-grid-wrap">
									
									<div className="fr-grid-thumb">
										<a href="#">
											<div className="overall-rate">4.3</div>
											<img src="assets/img/user-2.jpg" className="img-fluid mx-auto" alt="" />
										</a>
									</div>
									<div className="fr-grid-deatil">
										<h5 className="fr-can-name"><a href="#">Ana Martins</a></h5>
										<span className="fr-position"><i className="lni-map-marker"></i>3599 Minas Gerais</span>
										<div className="fr-can-rating">
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star"></i>
										</div>
									</div>
									
								</div>
								
								<div className="fr-grid-info">
									<ul>
										<li>Propriedades<span>306</span></li>
									
									</ul>
								</div>
								
								<div className="fr-grid-footer">
									<a href="#" className="btn btn-outline-theme full-width">Ver Perfil<i className="ti-arrow-right ml-1"></i></a>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="agents-grid">
								
								<div className="jb-bookmark"><a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Bookmark"><i className="ti-bookmark"></i></a></div>
								<div className="agent-call"><a href="#"><i className="lni-phone-handset"></i></a></div>
								<div className="agents-grid-wrap">
									
									<div className="fr-grid-thumb">
										<a href="#">
											<div className="overall-rate">4.5</div>
											<img src="assets/img/user-3.jpg" className="img-fluid mx-auto" alt="" />
										</a>
									</div>
									<div className="fr-grid-deatil">
										<h5 className="fr-can-name"><a href="#">Anderson Vital</a></h5>
										<span className="fr-position"><i className="lni-map-marker"></i>3599 São Paulo</span>
										<div className="fr-can-rating">
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star filled"></i>
											<i className="ti-star"></i>
										</div>
									</div>
									
								</div>
								
								<div className="fr-grid-info">
									<ul>
										<li>Propriedades<span>306</span></li>
									
									</ul>
								</div>
								
								<div className="fr-grid-footer">
									<a href="#" className="btn btn-outline-theme full-width">Ver Perfil<i className="ti-arrow-right ml-1"></i></a>
								</div>
								
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
			
			<section className="image-cover"  style={{backgroundImage:'url(assets/img/tour-6.jpg)', backgroundRepeat:'none'}} data-overlay="8">
				<div className="container">
					<div className="row justify-content-center">
						
						<div className="col-lg-8 col-md-8">
							
							<div className="smart-textimonials smart-light smart-center" id="smart-textimonials">
								
								<div className="item">
									<div className="smart-tes-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
									</div>
									
									<div className="smart-tes-author">
										<div className="st-author-box">
											<div className="st-author-thumb">
												<img src="assets/img/user-3.jpg" className="img-fluid" alt="" />
											</div>
											<div className="st-author-info">
												<h4 className="st-author-title">Rodrigo Alves</h4>
												<span className="st-author-subtitle">Usuário do NSpace</span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="item">
									<div className="smart-tes-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
									</div>
									
									<div className="smart-tes-author">
										<div className="st-author-box">
											<div className="st-author-thumb">
												<img src="assets/img/user-8.jpg" className="img-fluid" alt="" />
											</div>
											<div className="st-author-info">
												<h4 className="st-author-title">Ana Carolina</h4>
												<span className="st-author-subtitle">Locadora do NSpace</span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="item">
									<div className="smart-tes-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
									</div>
									
									<div className="smart-tes-author">
										<div className="st-author-box">
											<div className="st-author-thumb">
												<img src="assets/img/user-4.jpg" className="img-fluid" alt="" />
											</div>
											<div className="st-author-info">
												<h4 className="st-author-title">Ana Vitória</h4>
												<span className="st-author-subtitle">Usuária Do NSpace</span>
											</div>
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
						
					</div>
				</div>
			</section>
			
			<section>
				<div className="container">
				
					<div className="row">
						<div className="col text-center">
							<div className="sec-heading center">
								<h2>Últimos artigos</h2>
								<p>Nós da equipe NSpace postamos artigos regularmente para você não perde nenhuma novidade</p>
							</div>
						</div>
					</div>
					
					<div className="row">
						
					<Noticia titulo="O que as pessoas mais pesquisam na hora de alugar uma casa"
					 subtitulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. "
					 key="1" url_foto="assets/img/p-11.jpg" />

					<Noticia titulo="Quais os beneficíos de alugar um local na NSpace"
					 subtitulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. "
					 key="2" url_foto="assets/img/p-12.jpg" />

					<Noticia titulo="O que as pessoas dizem sobre os locais da NSpace"
					 subtitulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. "
					 key="3" url_foto="assets/img/p-13.jpg" />
						
					</div>
					
				</div>		
			</section>
		
			
			
			
			<SectionCallAction/>
		
			<Footer/>
			
			<LoginComponent/>


			<CadastroComponent/>
			
			<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
			

		</div>
	</>
	</body>

    )
}

export default Home;
