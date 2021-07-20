import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import LogoNavBar from '../../components/LogoNavBar';
import NavBarLoged from '../../components/NavBarLoged';
import SectionCallAction from '../../components/SectionCallAction';
import { useAuth } from '../../hooks/auth';
import { loadScripts } from '../Home';

const News:React.FC = ()=>{

	const {user}:any = useAuth()
    useEffect(() => {
		loadScripts();
		
	});

	

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
	
									<li><Link to="/pesquisa">Pesquisa</Link></li>
									
									<li><Link to="/dashboard">DashBoard</Link></li>

									<li><Link to="/noticias">Notícias</Link></li>
		
								
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
							
							<h2 className="ipt-title">Nossas notícias</h2>
							<span style={{fontFamily:'Montserrat', fontSize:20}}>Veja nossas últimas notícias & artigos</span>
							
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