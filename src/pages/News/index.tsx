import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import LogoNavBar from '../../components/LogoNavBar';
import SectionCallAction from '../../components/SectionCallAction';

const News:React.FC = ()=>{
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
							
							<h2 className="ipt-title">Nossas notícias</h2>
							<span className="ipn-subtitle">Veja nossas últimas notícias & artigos</span>
							
						</div>
					</div>
				</div>
			</div>
			
			<section>
			
				<div className="container">
				
					<div className="row">
						<div className="col text-center">
							<div className="sec-heading center">
								<h2>Últimas notícias</h2>
								<p>Publicamos regularmente os artigos mais poderosos para obter ajuda e suporte.</p>
							</div>
						</div>
					</div>
				
					<div className="row">
					
						<div className="col-lg-4 col-md-6">
							<div className="blog-wrap-grid">
								
								<div className="blog-thumb">
									<a href="#"><img src="assets/img/p-11.jpg" className="img-fluid" alt="" /></a>
								</div>
								
								<div className="blog-info">
									<span className="post-date"><i className="ti-calendar"></i>Criado em 20/04/2021</span>
								</div>
								
								<div className="blog-body">
									<h4 className="bl-title"><a href="#">O que as pessoas mais pesquisam na hora de alugar uma casa</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
									<a href="#" className="bl-continue">Continuar</a>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="blog-wrap-grid">
								
								<div className="blog-thumb">
									<a href="#"><img src="assets/img/p-8.jpg" className="img-fluid" alt="" /></a>
								</div>
								
								<div className="blog-info">
									<span className="post-date"><i className="ti-calendar"></i>Criado em 20104/2021</span>
								</div>
								
								<div className="blog-body">
									<h4 className="bl-title"><a href="#">Quais os beneficíos de alugar um local na NSpace</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
									<a href="#" className="bl-continue">Continuar</a>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="blog-wrap-grid">
								
								<div className="blog-thumb">
									<a href="#"><img src="assets/img/p-10.jpg" className="img-fluid" alt="" /></a>
								</div>
								
								<div className="blog-info">
									<span className="post-date"><i className="ti-calendar"></i>Criado em 20/04/2021</span>
								</div>
								
								<div className="blog-body">
									<h4 className="bl-title"><a href="#">O que as pessoas dizem sobre os locais da NSpace</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
									<a href="#" className="bl-continue">Continuar</a>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="blog-wrap-grid">
								
								<div className="blog-thumb">
									<a href="#"><img src="assets/img/p-14.jpg" className="img-fluid" alt="" /></a>
								</div>
								
								<div className="blog-info">
									<span className="post-date"><i className="ti-calendar"></i>Criado em 20/04/2021</span>
								</div>
								
								<div className="blog-body">
									<h4 className="bl-title"><a href="#">O que as pessoas mais pesquisam na hora de alugar uma casa</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
									<a href="#" className="bl-continue">Continuar</a>
								</div>

							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="blog-wrap-grid">
								
								<div className="blog-thumb">
									<a href="#"><img src="assets/img/p-7.jpg" className="img-fluid" alt="" /></a>
								</div>
								
								<div className="blog-info">
									<span className="post-date"><i className="ti-calendar"></i>Criado em 20104/2021</span>
								</div>
								
								<div className="blog-body">
									<h4 className="bl-title"><a href="#">Quais os beneficíos de alugar um local na NSpace</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
									<a href="#" className="bl-continue">Continuar</a>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="blog-wrap-grid">
								
								<div className="blog-thumb">
									<a href="#"><img src="assets/img/p-5.jpg" className="img-fluid" alt="" /></a>
								</div>
								
								<div className="blog-info">
									<span className="post-date"><i className="ti-calendar"></i>Criado em 20/04/2021</span>
								</div>
								
								<div className="blog-body">
									<h4 className="bl-title"><a href="#">O que as pessoas dizem sobre os locais da NSpace</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
									<a href="#" className="bl-continue">Continuar</a>
								</div>
								
								
							</div>
						</div>
						
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

export default News;