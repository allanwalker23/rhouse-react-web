import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import LogoNavBar from '../../components/LogoNavBar';
import NavBarLoged from '../../components/NavBarLoged';
import SectionCallAction from '../../components/SectionCallAction';
import { useAuth } from '../../hooks/auth';
import { locais } from '../../utils/contents';

const PropertiesMarked = () =>{
	const {user}:any = useAuth()
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
						<div className="nav-menus-wrapper" style={{transitionProperty:"none"}}>
							<ul className="nav-menu">
							<li><Link to="/">Home</Link></li>

							<li><Link to="#">Quem somos?</Link></li>
	
							<li><Link to="/pesquisa">Pesquisa</Link></li>

							<li className="active"><Link to="/dashboard">DashBoard</Link></li>

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
							
						<h2 className="ipt-title">Bem vindo!</h2>
							<span className="ipn-subtitle">Bem vindo a sua conta</span>
							
						</div>
					</div>
				</div>
			</div>
			
			<section>
				<div className="container-fluid">
					<div className="row">
						
						<div className="col-lg-3 col-md-4">
							<div className="dashboard-navbar">
								
								<div className="d-user-avater">
									<img src="assets/img/user-3.jpg" className="img-fluid avater" alt=""/>
									<h4>{user.nome_completo}</h4>
									<span>@{user.nome_usuario}</span>
								</div>
								
								<div className="d-navigation">
									<ul>
									<li><Link to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
										<li><Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas Propriedades</Link></li>                                   
										<li className="active"><Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link></li>        
										<li><Link to="/criar-propriedade"><i className="ti-pencil-alt"></i>Adicionar propriedade</Link></li>
										<li><Link className="active" to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
										<li><a href="#"><i className="ti-power-off"></i>Sair</a></li>
									</ul>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-9 col-md-8">
							<div className="dashboard-wraper">
							
								<div className="form-submit">	
									<h4>Locais Marcados</h4>
								</div>
								
								<table className="property-table-wrap responsive-table bkmark">

									<tbody>
										<tr>
											<th><i className="fa fa-file-text"></i>Propriedades</th>
											<th></th>
										</tr>
									

										{locais.map((local)=>(
												<tr>
												<td className="property-container">
													<img src={local.foto1} alt=""/>
													<div className="title">
														<h4><a href="#">{local.nome}</a></h4>
														<span>Rua Fictícia, Belo Horizonte, MG </span>
														<span className="table-property-price">R${local.preco_dia} / dia</span>
													</div>
												</td>
												<td className="action">
													<a href="#" className="delete"><i className="ti-close"></i> Deletar</a>
												</td>
											</tr>
										))}

									</tbody>
								</table>
								
							</div>
						</div>
						
					</div>
				</div>
			</section>
		<SectionCallAction/>
		<Footer/>
			
			<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
			

		</div>

	</body>
    )
	
}

export default PropertiesMarked;
