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
const LocalDetails = () =>{
	const {user}:any= useAuth();
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

		const script14 = document.createElement("script");
		script13.src="http://maps.google.com/maps/api/js?key=";
		script13.async = true;

		const script15 = document.createElement("script");
		script13.src="assets/js/map_infobox.js";
		script13.async = true;

		const script16 = document.createElement("script");
		script13.src="assets/js/markerclusterer.js";
		script13.async = true;

		const script17 = document.createElement("script");
		script13.src="assets/js/map.js";
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
		document.body.appendChild(script14);
		document.body.appendChild(script15);
		document.body.appendChild(script16);
		document.body.appendChild(script17);
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
										<li><strong>Tem Garagem?</strong>Sim</li>
										<li><strong>Área</strong>500 m2</li>
										<li><strong>Tipo</strong>Espaço para festas</li>
										<li><strong>Preço</strong>R$120/dia</li>
										<li><strong>Cidade</strong>Minas Gerais</li>
										<li><strong>Construído em</strong>2014</li>
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
									<h4 className="block-title">Planta do local</h4>
								</div>
								
								<div className="block-body">
									<div className="accordion" id="floor-option">
										<div className="card">
											<div className="card-header" id="firstFloor">
												<h2 className="mb-0">
													<button type="button" className="btn btn-link" data-toggle="collapse" data-target="#firstfloor">Primeiro Piso<span>500m²</span></button>									
												</h2>
											</div>
											<div id="firstfloor" className="collapse show" aria-labelledby="firstFloor" data-parent="#floor-option">
												<div className="card-body">
													<img src="assets/img/floor.jpg" className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header" id="seconfFloor">
												<h2 className="mb-0">
													<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#secondfloor">Segundo piso<span>550m²</span></button>
												</h2>
											</div>
											<div id="secondfloor" className="collapse" aria-labelledby="seconfFloor" data-parent="#floor-option">
												<div className="card-body">
													<img src="assets/img/floor.jpg" className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header" id="third-garage">
												<h2 className="mb-0">
													<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#garages">Garagem<span>520m²</span></button>                     
												</h2>
											</div>
											<div id="garages" className="collapse" aria-labelledby="third-garage" data-parent="#floor-option">
												<div className="card-body">
													<img src="assets/img/floor.jpg" className="img-fluid" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Localização</h4>
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
									<h4 className="block-title">Lugares Proxímos</h4>
								</div>
								
								<div className="block-body">
									
									<div className="nearby-wrap">
										<h5>Escolas e Transportes</h5>
										<div className="neary_section_list">
										
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Metrô de Belo Horizonte</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate good"><i className="ti-star"></i>4.2</div>
													<span>2.5 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Colégio Elite</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate mid"><i className="ti-star"></i>4.0</div>
													<span>3.7 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Shopping Da Cidade</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate high"><i className="ti-star"></i>4.8</div>
													<span>2.9 km</span>
												</div>
											</div>
											
										</div>
									</div>
									
									<div className="nearby-wrap">
										<h5>Hóteis &amp; Restaurantes</h5>
										<div className="neary_section_list">
										
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Hotel Belo Horizonte</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate poor"><i className="ti-star"></i>3.2</div>
													<span>1.5 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Restaurante Wiksy Bar</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate high"><i className="ti-star"></i>4.9</div>
													<span>2.7 km</span>
												</div>
											</div>
											
										</div>
									</div>
									
								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Escrever um comentário</h4>
								</div>
								
								<div className="block-body">
									<div className="row">
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Título do comentário"/>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Seu Nome"/>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<input type="email" className="form-control" placeholder="Seu Email"/>
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<textarea className="form-control ht-80" placeholder="Comentário"></textarea>
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<button className="btn btn-theme" type="submit">Enviar comentário</button>
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
										
										<div className="pr-single-info">
											<div className="share-opt-wrap">
												<button type="button" className="btn-share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-original-title="Share this">
													<i className="lni-share"></i>
												</button>
												<div className="dropdown-menu animated flipInX">
													<a href="#" className="cl-facebook"><i className="lni-facebook"></i></a>
													<a href="#" className="cl-twitter"><i className="lni-twitter"></i></a>
													<a href="#" className="cl-gplus"><i className="lni-google-plus"></i></a>
													<a href="#" className="cl-instagram"><i className="lni-instagram"></i></a>
												</div>
											</div>

										</div>
										
										<div className="pr-single-info">
											<a href="JavaScript:Void(0);" data-toggle="tooltip" data-original-title="Get Print"><i className="ti-printer"></i></a>
										</div>
										
										<div className="pr-single-info">
											<a href="JavaScript:Void(0);" className="compare-button" data-toggle="tooltip" data-original-title="Compare"><i className="ti-control-shuffle"></i></a>
										</div>
										
										<div className="pr-single-info">
											<a href="JavaScript:Void(0);" className="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i className="lni-heart-filled"></i></a>
										</div>
										
									</div>
								</div>
								
								<div className="agent-widget">
									<div className="agent-title">
										<div className="agent-photo"><img src="assets/img/user-6.jpg" alt=""/></div>
										<div className="agent-details">
											<h4><a href="#">Ana Vitória</a></h4>
											<span><i className="lni-phone-handset"></i>(41)XXXX-XXXX</span>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="form-group">
										<input type="text" className="form-control" placeholder="Seu Email"/>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Seu telefone"/>
									</div>
									<div className="form-group">
										<textarea className="form-control">Estou interessado neste local</textarea>
									</div>
									<button className="btn btn-theme full-width">Enviar mensagem</button>
								</div>
								
								<div className="sidebar-widgets">
									
									<h4>Encontrar nova propriedade</h4>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Bairro"/>
											<i className="ti-search"></i>
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
											<select id="cities" className="form-control">
												<option value="">&nbsp;</option>
												{cidades.map((cidade)=>(
													<option value={cidade.id}>{cidade.nome}</option>
												))}
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>
									
									<button className="btn btn-theme full-width">Encontra novo local</button>
									
								</div>
								
								<div className="sidebar-widgets">
									
									<h4>Locais parecidos</h4>
									
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
														<div className="property_types_vlix sale">Para Alugar</div>
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