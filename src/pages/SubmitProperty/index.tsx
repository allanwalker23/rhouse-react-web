import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LogoNavBar from '../../components/LogoNavBar';
import NavBarLoged from '../../components/NavBarLoged';
import SectionCallAction from '../../components/SectionCallAction';
import { useAuth } from '../../hooks/auth';
import { tiposLocais } from '../../utils/contents';

const SubmitProperty:React.FC = () =>{
	const {user}:any= useAuth()
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
			
			<div className="page-title">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							
							<h2 className="ipt-title">Adicionar Local</h2>
							<span className="ipn-subtitle">Preencha os campos para adicionar a propriedade</span>
							
						</div>
					</div>
				</div>
			</div>

			<section>
			
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
						
							<div className="alert alert-success" role="alert">
							<p>Por favor, entre antes de enviar uma propriedade. Se você não tem uma conta, você pode criar uma <a href="#">Clicando Aqui</a></p>
							</div>
						
						</div>
						
						<div className="col-lg-12 col-md-12">
						
							<div className="submit-page">
								
								<div className="form-submit">	
									<h3>Informações básicas</h3>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-12">
												<label>Título da Propriedade<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help"></i></a></label>
												<input type="text" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Status</label>
												<select id="status" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">Para Alugar</option>
												</select>
											</div>
											
											<div className="form-group col-md-6">
												<label>Tipo da Propriedade</label>
												<select id="ptypes" className="form-control">
													<option value="">&nbsp;</option>
													{tiposLocais.map((local)=>(
														<option value={local.id}>{local.nome}</option>	
													))}
												</select>
											</div>
											
											<div className="form-group col-md-4">
												<label>Preço</label>
												<input type="text" className="form-control" placeholder="R$"/>
											</div>
											
											<div className="form-group col-md-4">
												<label>Espaço</label>
												<input type="text" placeholder="Em m2" className="form-control"/>
											</div>


											<div className="form-group col-md-4">
												<label>Limite de pessoas</label>
												<input type="text" className="form-control" placeholder="Digite número máximo de pessoas"/>
											</div>
											
											
											<div className="form-group col-md-6">
												<label>Quartos</label>
												<select id="bedrooms" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
											
											<div className="form-group col-md-6">
												<label>Banheiros</label>
												<select id="bathrooms" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
											
										</div>
									</div>
								</div>
								
								<div className="form-submit">	
									<h3>Galeria</h3>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-12">
												<label>Envie as fotos do local</label>
												<form action="https://themezhub.net/upload-target" className="dropzone dz-clickable primary-dropzone">
													<div className="dz-default dz-message">
														<i className="ti-gallery"></i>
														<span>Arraste & Solte Para Adicionar Imagem</span>
													</div>
												</form>
											</div>
											
										</div>
									</div>
								</div>
								
								<div className="form-submit">	
									<h3>Localização</h3>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-6">
												<label>Endereço</label>
												<input type="text" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Cidade</label>
												<input type="text" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Estado</label>
												<input type="text" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>CEP</label>
												<input type="text" className="form-control"/>
											</div>
											
										</div>
									</div>
								</div>
								
								<div className="form-submit">	
									<h3>Informações detalhadas</h3>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-12">
												<label>Descrição</label>
												<textarea className="form-control h-120"></textarea>
											</div>
											
											<div className="form-group col-md-4">
												<label>Contruído em (opcional)</label>
												<select id="bage" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">0 - 5 Anos</option>
													<option value="2">0 - 10Anos</option>
													<option value="3">0 - 15 Anos</option>
													<option value="4">0 - 20 Anos</option>
													<option value="5">20+ Anos</option>
												</select>
											</div>
											
											<div className="form-group col-md-4">
												<label>Garagem (opcional)</label>
												<select id="garage" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
											
											<div className="form-group col-md-4">
												<label>Salas (opcional)</label>
												<select id="rooms" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
											
											<div className="form-group col-md-12">
												<label>Outros benefícios (optional)</label>
												<div className="o-features">
													<ul className="no-ul-list third-row">
														<li>
															<input id="a-1" className="checkbox-custom" name="a-1" type="checkbox"/>
															<label htmlFor="a-1" className="checkbox-custom-label">Ar condicionado</label>
														</li>
														<li>
															<input id="a-2" className="checkbox-custom" name="a-2" type="checkbox"/>
															<label htmlFor="a-2" className="checkbox-custom-label">Sala de Jogos</label>
														</li>
														<li>
															<input id="a-3" className="checkbox-custom" name="a-3" type="checkbox"/>
															<label htmlFor="a-3" className="checkbox-custom-label">Sala De Leitura</label>
														</li>
														<li>
															<input id="a-4" className="checkbox-custom" name="a-4" type="checkbox"/>
															<label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
														</li>
														<li>
															<input id="a-5" className="checkbox-custom" name="a-5" type="checkbox"/>
															<label htmlFor="a-5" className="checkbox-custom-label">Microondas</label>
														</li>
														<li>
															<input id="a-6" className="checkbox-custom" name="a-6" type="checkbox"/>
															<label htmlFor="a-6" className="checkbox-custom-label">Permitido Fumar</label>
														</li>
														<li>
															<input id="a-7" className="checkbox-custom" name="a-7" type="checkbox"/>
															<label htmlFor="a-7" className="checkbox-custom-label">Terraço</label>
														</li>
														<li>
															<input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
															<label htmlFor="a-8" className="checkbox-custom-label">Varanda</label>
														</li>
														<li>
															<input id="a-9" className="checkbox-custom" name="a-9" type="checkbox"/>
															<label htmlFor="a-9" className="checkbox-custom-label">Alarme</label>
														</li>
														<li>
															<input id="a-10" className="checkbox-custom" name="a-10" type="checkbox"/>
															<label htmlFor="a-10" className="checkbox-custom-label">Wi-Fi</label>
														</li>
														<li>
															<input id="a-11" className="checkbox-custom" name="a-11" type="checkbox"/>
															<label htmlFor="a-11" className="checkbox-custom-label">Piscina</label>
														</li>
														<li>
															<input id="a-12" className="checkbox-custom" name="a-12" type="checkbox"/>
															<label htmlFor="a-12" className="checkbox-custom-label">Estacionamento</label>
														</li>
													</ul>
												</div>
											</div>
											
										</div>
									</div>
								</div>
								
								
								<div className="form-submit">	
									<h3>Informações de contato</h3>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-4">
												<label>Nome</label>
												<input type="text" className="form-control"/>
											</div>
											
											<div className="form-group col-md-4">
												<label>Email</label>
												<input type="text" className="form-control"/>
											</div>
											
											<div className="form-group col-md-4">
												<label>Telefone (opcional)</label>
												<input type="text" className="form-control"/>
											</div>
											
										</div>
									</div>
								</div>
								
								<div className="form-group col-lg-12 col-md-12">
									<label>Termos de uso *</label>
									<ul className="no-ul-list">
										<li>
											<input id="aj-1" className="checkbox-custom" name="aj-1" type="checkbox"/>
											<label htmlFor="aj-1" className="checkbox-custom-label">Consinto que este site armazene minhas informações enviadas para que possam responder à minha consulta.</label>
										</li>
									</ul>
								</div>
								
								<div className="form-group col-lg-12 col-md-12">
									<button className="btn btn-theme" type="submit">Enviar & Visualizar</button>
								</div>
											
							</div>
						</div>
						
					</div>
				</div>
						
			</section>
			
			<SectionCallAction/>
		<Footer/>
		<CadastroComponent/>	
			<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
			

		</div>

	</body>
    )
}

export default SubmitProperty