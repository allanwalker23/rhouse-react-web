import React, { useEffect } from 'react';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import SectionCallAction from '../../components/SectionCallAction';
import {Link} from 'react-router-dom';
import LogoNavBar from '../../components/LogoNavBar';
import { cidades, locais } from '../../utils/contents';
import NavBarLoged from '../../components/NavBarLoged';
import { useAuth } from '../../hooks/auth';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { loadScripts } from '../Home';
const LocalDetails = () =>{
	const {user}:any= useAuth();
	
	useEffect(()=>{
		loadScripts();
	
		
	},[])
	

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

							<li className="active"><Link to="/pesquisa">Pesquisa</Link></li>

							<li><Link to="/dashboard">DashBoard</Link></li>

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

			<section className="gray">
				<div className="container">
					<div className="row">
						
						<div className="col-lg-8 col-md-12 col-sm-12">
							
							<div className="slide-property-first mb-4">
								<div className="pr-price-into">
									<h2>R$120 <i>/ dia</i> <span className="prt-type rent">Para Alugar</span></h2>
									<span><i className="lni-map-marker"></i> Rua Fictícia, 778, Belo Horizonte, MG</span>
								</div>
							</div>
								
							<div className="property3-slide single-advance-property mb-4">
						
								<div className="slider-for">
									<a href="assets/img/p-1.jpg" className="item-slick"><img src="assets/img/p-1.jpg" alt="Alt"/></a>
									<a href="assets/img/p-2.jpg" className="item-slick"><img src="assets/img/p-2.jpg" alt="Alt"/></a>
									<a href="assets/img/p-3.jpg" className="item-slick"><img src="assets/img/p-3.jpg" alt="Alt"/></a>
									<a href="assets/img/p-4.jpg" className="item-slick"><img src="assets/img/p-4.jpg" alt="Alt"/></a>
									<a href="assets/img/p-5.jpg" className="item-slick"><img src="assets/img/p-5.jpg" alt="Alt"/></a>
									<a href="assets/img/p-6.jpg" className="item-slick"><img src="assets/img/p-6.jpg" alt="Alt"/></a>
									<a href="assets/img/p-7.jpg" className="item-slick"><img src="assets/img/p-7.jpg" alt="Alt"/></a>
									<a href="assets/img/p-8.jpg" className="item-slick"><img src="assets/img/p-8.jpg" alt="Alt"/></a>
								</div>
								<div className="slider-nav">
									<div className="item-slick"><img src="assets/img/p-1.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-2.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-3.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-4.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-5.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-6.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-7.jpg" alt="Alt"/></div>
									<div className="item-slick"><img src="assets/img/p-8.jpg" alt="Alt"/></div>
								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Informações do local</h4>
								</div>
								
								<div className="block-body">
									<ul className="dw-proprty-info">
										<li><strong>Limite de pessoas</strong>20</li>
										<li><strong>Quartos</strong>2</li>
										<li><strong>Banheiros</strong>2</li>
										<li><strong>Quatidade de vagas</strong>20 carros</li>
										<li><strong>Área</strong>500 m2</li>
										<li><strong>Tipo</strong>Espaço para festas</li>
										<li><strong>Preço</strong>R$120/dia</li>
										<li><strong>Cidade</strong>Minas Gerais</li>
									</ul>
								</div>
								
							</div>
							
							
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Benefícios</h4>
								</div>
								
								<div className="block-body">
									<ul className="avl-features third">
									<li>Ar Condicionado</li>
										<li>Piscina</li>
										<li>Sala De Estudos</li>
										<li>Academia</li>
										<li>Alarme</li>
										<li>Internet</li>
										<li>Animais Permitido</li>
										<li>Wifi de Graça</li>
										<li>Estacionamento</li>
										<li>Spa & Massagem</li>
									</ul>
								</div>
								
							</div>

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Descrição</h4>
								</div>
								
								<div className="block-body">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								
							</div>
							
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Localização(raio 1km)</h4>
								</div>
								
								<div className="block-body">
									<div className="map-container">
										<div id="singleMap" data-latitude="-19.9240124" data-longitude="-43.9593528" data-mapTitle="Mapa do local"></div>
									</div>

								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">47 Comentários</h4>
								</div>
								
								<div className="block-body">
									<div className="author-review">
										<div className="comment-list">
											<ul>
												<li className="article_comments_wrap">
													<article>
														<div className="article_comments_thumb">
															<img src="assets/img/user-1.jpg" alt=""/>
														</div>
														<div className="comment-details">
															<div className="comment-meta">
																<div className="comment-left-meta">
																	<h4 className="author-name">Mauro Silva</h4>
																	<div className="comment-date">19 maio de 2020</div>
																</div>
															</div>
															<div className="comment-text">
																<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
																	perspiciatis unde omnis iste natus error.</p>
															</div>
														</div>
													</article>
												</li>
												<li className="article_comments_wrap">
													<article>
														<div className="article_comments_thumb">
															<img src="assets/img/user-3.jpg" alt=""/>
														</div>
														<div className="comment-details">
															<div className="comment-meta">
																<div className="comment-left-meta">
																	<h4 className="author-name">Rodrigo Alves </h4>
																	<div className="comment-date">19 Junho 2020</div>
																</div>
															</div>
															<div className="comment-text">
																<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
																	perspiciatis unde omnis iste natus error.</p>
															</div>
														</div>
													</article>
												</li>
												<li className="article_comments_wrap">
													<article>
														<div className="article_comments_thumb">
															<img src="assets/img/user-4.jpg" alt=""/>
														</div>
														<div className="comment-details">
															<div className="comment-meta">
																<div className="comment-left-meta">
																	<h4 className="author-name">Ana Vitória</h4>
																	<div className="comment-date">17 março de 2020</div>
																</div>
															</div>
															<div className="comment-text">
																<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
																	perspiciatis unde omnis iste natus error.</p>
															</div>
														</div>
													</article>
												</li>
											</ul>
										</div>
									</div>
									<a href="#" className="reviews-checked theme-cl"><i className="fas fa-arrow-alt-circle-down mr-2"></i>Ver mais comnetários</a>

								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Lugares Proxímos(Integração Google Maps)</h4>
								</div>
								
								<div className="block-body">
									
									<div className="nearby-wrap">
										<h5>Supermercados e Distribuidoras</h5>
										<div className="neary_section_list">
										
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Distribuidora Heineken</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate good"><i className="ti-star"></i>4.2</div>
													<span>2.5 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Supermercados Pão de Açucar</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate mid"><i className="ti-star"></i>4.0</div>
													<span>3.7 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Alvez Distribuidora</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate high"><i className="ti-star"></i>4.8</div>
													<span>2.9 km</span>
												</div>
											</div>
											
										</div>
									</div>
									
								
								</div>
								
							</div>
							
							
						</div>
						
						<div className="col-lg-4 col-md-12 col-sm-12">
							<div className="page-sidebar">
								
								<div className="slide-property-sec mb-4">
									<div className="pr-all-info">

									<div className="btn_wrap">
										<span className="span-share-button">Compartilhar</span>
										<div className="container-share-button">
											<i className="fab fa-facebook-f"></i>
											<i className="fab fa-twitter"></i>
											<i className="fab fa-instagram"></i>
											<i className="fab fa-github"></i>
										</div>
									</div>
										
									</div>
								</div>
								
								<div className="agent-widget">
									<h3>Reservar horário(andamento)</h3>
									<DayPicker/>
									<button className="btn btn-theme full-width">Verificar disponibilidade</button>

								</div>
							
								
								<div className="sidebar-widgets">
									
									<h4>Locais parecidos nas proximidades</h4>
									
									<div className="sidebar_featured_property">
										
										{locais.map((local)=>(
											<div className="sides_list_property">
											<div className="sides_list_property_thumb">
												<img src={local.foto1} className="img-fluid" alt=""/>
											</div>
											<div className="sides_list_property_detail">
												<h4><a href="#">{local.nome}</a></h4>
												<span><i className="ti-location-pin"></i>Belo Horizonte</span>
												<div className="lists_property_price">
													<div className="lists_property_types">
														<div className="property_types_vlix sale">3KM</div>
													</div>
													<div className="lists_property_price_value">
														<h4>R${local.preco_dia}/dia</h4>
													</div>
												</div>
											</div>
										</div>
										))}
										
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

export default LocalDetails;