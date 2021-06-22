import React from 'react';
import { Link } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LoginComponent from '../../components/LoginComponent';
import LogoNavBar from '../../components/LogoNavBar';
import SectionCallAction from '../../components/SectionCallAction';

const ErrorPage = () =>{

    return(
		<body className="default-skin">      
        <div id="preloader"><div className="preloader"><span></span><span></span></div></div>
		
        
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
							<li className="active"><Link to="/">Home</Link></li>
							<li><Link to="#">Quem somos?</Link></li>

							<li><Link to="/pesquisa">Pesquisa</Link></li>
	
							<li><Link to="/dashboard">DashBoard</Link></li>

							<li><Link to="/noticias">Notícias</Link></li>		
	
								<li><a href="JavaScript:Void(0);" data-toggle="modal" data-target="#signup">Cadastrar uma conta</a></li>
								
							</ul>
							
							<ul className="nav-menu nav-menu-social align-to-right">
								
								<li>
									<a href="#" data-toggle="modal" data-target="#login">
										<i className="fas fa-user-circle mr-1"></i>Login</a>
								</li>
								<li className="add-listing theme-bg">
									<a href="submit-property.html">Adicionar Local</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			
			<div className="clearfix"></div>
			
			<section className="error-wrap">
				<div className="container">
					<div className="row justify-content-center">
						
						<div className="col-lg-6 col-md-10">
							<div className="text-center">
								
								<img src="assets/img/404.png" className="img-fluid" alt=""/>
								<p>A página que você tentou acessar não estar disponível</p>
								<Link className="btn btn-theme" to="/">Voltar a home</Link>
								
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

export default ErrorPage;