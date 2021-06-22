import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import LogoNavBar from '../../components/LogoNavBar';
import SectionCallAction from '../../components/SectionCallAction';

const Payment:React.FC = ()=>{
	useEffect(()=>{
		loadScript();
	})

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
						<div className="nav-menus-wrapper" style={{transitionProperty: "none"}}>
							<ul className="nav-menu">
							
							<li><Link to="/">Home</Link></li>

							<li><Link to="#">Quem somos?</Link></li>
	
							<li><Link to="/pesquisa">Pesquisa</Link></li>
	
							<li><Link to="/dashboard">DashBoard</Link></li>

							<li><Link to="/noticias">Notícias</Link></li>		

							<li className="active"><Link to="/pagamentos">Pagamentos</Link></li>		

							<li><a href="JavaScript:Void(0);" data-toggle="modal" data-target="#signup">Criar conta</a></li>	
							</ul>
							
							<ul className="nav-menu nav-menu-social align-to-right">
								
								<li>
									<a href="#" data-toggle="modal" data-target="#login">
										<i className="fas fa-user-circle mr-1"></i>Login</a>
								</li>
								<li className="add-listing theme-bg">
									<a href="/criar-propriedade">Adicionar Local</a>
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
							
							<h2 className="ipt-title">Métodos de Pagamento</h2>
							<span className="ipn-subtitle">Escolha sua forma de pagar</span>
							
						</div>
					</div>
				</div>
			</div>
		
			<section className="gray">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-8 form-submit">
							
        					<div className="checkout-wrap">
								
								<div className="checkout-head">
									<ul>
										<li className="active"><span><i className="ti-check"></i></span>Dados do Comprador</li>
										<li><span>2</span>Informações do Pagamento</li>
										<li><span>3</span>Confirmação!</li>
									</ul>
								</div>
								
								<div className="checkout-body">
									<div className="row">
								
										<div className="col-lg-12 col-md-12 col-sm-12">
											<h4 className="mb-3">Dados do comprador</h4>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Nome Completo<i className="req">*</i></label>
												<input type="text" className="form-control" value="Preet"/>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Email<i className="req">*</i></label>
												<input type="email" className="form-control" value="themezhub@gmail.com"/>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Telefone</label>
												<input type="text" className="form-control" value="780 052 2177"/>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>País<i className="req">*</i></label>
												<select id="country" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">United State</option>
													<option value="2">United kingdom</option>
													<option value="3">India</option>
													<option value="4">Canada</option>
												</select>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Cidade<i className="req">*</i></label>
												<select id="choose-city" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">Canada, USA</option>
													<option value="2">California</option>
													<option value="3">Newyork</option>
													<option value="4">Liverpool</option>
												</select>
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<label>Observação</label>
												<textarea className="form-control"></textarea>
											</div>
										</div>										
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<input id="a-2" className="checkbox-custom" name="a-2" type="checkbox"/>
												<label htmlFor="a-2" className="checkbox-custom-label">Create An Account</label>
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group text-center">
												<a href="#" className="btn btn-theme">Proxíma etapa</a>
											</div>
										</div>
										
									</div>
								</div>
								
							</div>
							
							<div className="checkout-wrap">
								
								<div className="checkout-head">
									<ul>
										<li><span><i className="ti-check"></i></span>Dados do comprador</li>
										<li className="active"><span>2</span>Informações do pagamento</li>
										<li><span>3</span>Confirmação!</li>
									</ul>
								</div>
								
								<div className="checkout-body">
									<div className="row mb-5">
								
										<div className="col-lg-12 col-md-12 col-sm-12">
											<h4 className="mb-3">Informações do pagamento</h4>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="switchbtn paying">
												<input id="pay-2" className="switchbtn-checkbox" type="radio" value="2" name="pay-2" checked />
												<label className="switchbtn-label" htmlFor="pay-2">
													Pagar com PagSeguro
												</label>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="switchbtn paying">
												<input id="pay-3" className="switchbtn-checkbox" type="radio" value="2" name="pay-2"/>
												<label className="switchbtn-label" htmlFor="pay-3">
													Pagar com PayPal
												</label>
											</div>
										</div>
									</div>
									
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Nome do titular do cartão</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Número do Cartão</label>
												<input type="text" className="form-control"/>
											</div>
										</div>									
									
										<div className="col-lg-5 col-md-5 col-sm-6">
											<div className="form-group">
												<label>Mês de vencimento</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										
										<div className="col-lg-5 col-md-5 col-sm-6">
											<div className="form-group">
												<label>Ano de vencimento</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										
										<div className="col-lg-2 col-md-2 col-sm-12">
											<div className="form-group">
												<label>CVC</label>
												<input type="text" className="form-control"/>
											</div>
										</div>										
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<input id="a-2" className="checkbox-custom" name="a-2" type="checkbox"/>
												<label htmlFor="a-2" className="checkbox-custom-label">Eu aceito todas as condições</label>
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group text-center">
												<a href="#" className="btn btn-theme full-width">Confirmar compra</a>
											</div>
										</div>
										
									</div>
								</div>
								
							</div>
							
							<div className="checkout-wrap">
								
								<div className="checkout-head">
									<div className="success-message">
										<span className="thumb-check"><i className="ti-check"></i></span>
										<h4>Obrigado sua compra foir confirmada!</h4>
										<p>Sua confirmação foi enviada por email, cheque sue inbox!</p>
									</div>
								</div>
								
								<div className="checkout-body">
									
									<div className="row">
										<div className="col-md-12 col-lg-12">
										
											<ul className="booking-detail-list">
												<li>Booking ID/Num.<span>#BK1254872</span></li>
												<li>First Name<span>Shaurya</span></li>
												<li>Last Name<span>Preet</span></li>
												<li>Email<span>themezhub@gmail.com</span></li>
												<li>Phone<span>91 235 458 7458</span></li>
												<li>City<span>California</span></li>
												<li>Contry<span>United State</span></li>
												<li>Location<span>New Besil, Liverpool</span></li>
												<li>Zip<span>215467</span></li>
											</ul>
											<hr/>
											
											<h4>Payment Detail</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
											
										</div>
									</div>
								</div>
								
							</div>
							
						</div>
							
						<div className="col-lg-3 col-md-4">
							<div className="checkout-side">
							
								<div className="booking-short">
									<img src="assets/img/p-14.jpg" className="img-fluid" alt="" />
									<h4>Manali To Paris, London</h4>
									<span>Liverpool, London</span>
								</div>
								
								<div className="booking-short-side">
									<div className="accordion" id="accordionExample">
										<div className="card">
											<div className="card-header" id="bookinDet">
											  <h2 className="mb-0">
												<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#bookinSer" aria-expanded="true" aria-controls="bookinSer">
												  Booking Detail
												</button>
											  </h2>
											</div>

											<div id="bookinSer" className="collapse show" aria-labelledby="bookinDet" data-parent="#accordionExample">
												<div className="card-body">
													<ul className="booking-detail-list">
														<li>10 May 2020- 20 May 2020</li>
														<li>Tour Days<span>5 Days</span></li>
														<li>Adults<span>4</span></li>
														<li>Children<span>3</span></li>
													</ul>
												</div>
											</div>
										</div>
										
										<div className="card">
											<div className="card-header" id="extraFeat">
											  <h2 className="mb-0">
												<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#extraSer" aria-expanded="false" aria-controls="extraSer">
												  Extra Features
												</button>
											  </h2>
											</div>
											<div id="extraSer" className="collapse" aria-labelledby="extraFeat" data-parent="#accordionExample">
												<div className="card-body">
													<ul className="booking-detail-list">
														<li>Breakfast</li>
														<li>Rooms Service</li>
														<li>Wifi Free</li>
														<li>Car Driving</li>
													</ul>
												</div>
											</div>
										  </div>
										  
										  <div className="card">
											<div className="card-header" id="CouponCode">
											  <h2 className="mb-0">
												<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#couponcd" aria-expanded="false" aria-controls="couponcd">
												  Coupon Code
												</button>
											  </h2>
											</div>
											<div id="couponcd" className="collapse show" aria-labelledby="CouponCode" data-parent="#accordionExample">
												<div className="card-body">
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Code"/>
														<button type="button" className="btn btn-black black full-width mt-2">Apply</button>
													</div>
												</div>
											</div>
										</div>
										
										<div className="card">
											<div className="card-header" id="PayMents">
											  <h2 className="mb-0">
												<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#payser" aria-expanded="false" aria-controls="payser">
												  Payment
												</button>
											  </h2>
											</div>
											<div id="payser" className="collapse" aria-labelledby="PayMents" data-parent="#accordionExample">
												<div className="card-body">
													<ul className="booking-detail-list">
														<li>Sub Total<span>$224</span></li>
														<li>Extra Price<span>$70</span></li>
														<li>Tax<span>$20</span></li>
														<li><b>Pay Ammount</b><span>$314</span></li>
													</ul>
												</div>
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

export default Payment;