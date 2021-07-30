import React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC =()=>{

    return(
        <footer className="dark-footer skin-dark-footer">
				<div>
					<div className="container">
						<div className="row">
							
							<div className="col-lg-3 col-md-4">
								<div className="footer-widget">
									<img src="../../assets/img/logo-branco.png" className="img-footer" alt="" />
									<div className="footer-add">
										<p>Rio De Janeiro, Rio De Janeiro 6594, Brasil.</p>
										<p>(41)XXXX-XXXX</p>
										<p>rhouse@example.com</p>
									</div>
									
								</div>
							</div>		
							<div className="col-lg-2 col-md-4">
								<div className="footer-widget">
									<h4 className="widget-title">Navegação</h4>
									<ul className="footer-menu">
									<li><Link to="#">Quem somos?</Link></li>

									<li><Link to="/pesquisa">Pesquisa</Link></li>

									<li><Link to="/dashboard">DashBoard</Link></li>

									<li><Link to="/noticias">Notícias</Link></li>		

									<li><Link to="/pagamentos">Pagamentos</Link></li>	

									</ul>
								</div>
							</div>
									
							<div className="col-lg-2 col-md-4">
								<div className="footer-widget">
									<h4 className="widget-title">Mais recentes</h4>
									<ul className="footer-menu">
										<li><a href="#">Espaço para festas infantis</a></li>
										<li><a href="#">Espaço para casamentos</a></li>
										<li><a href="#">Salões e auditórios</a></li>
										<li><a href="#">Estúdio de gravação</a></li>
									</ul>
								</div>
							</div>
							
							<div className="col-lg-2 col-md-6">
								<div className="footer-widget">
									<h4 className="widget-title">Minha Conta</h4>
									<ul className="footer-menu">
										<li><Link to="/dashboard">Meu perfil</Link></li>
										<li><Link to="/locais-marcados">Locais marcados</Link></li>
										<li><Link to="/minhas-propriedades">Minhas propriedades</Link></li>
										<li><Link to="/alterar-senha">Alterar Senha</Link></li>
										
									</ul>
								</div>
							</div>
							
							
							
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center">
							
							<div className="col-lg-6 col-md-6">
								<p className="mb-0">Desenvolvido por <b>Allan Hipólito</b></p>
							</div>
							
							<div className="col-lg-6 col-md-6 text-right">
								<ul className="footer-bottom-social">
									<li><a href="https://www.linkedin.com/in/allan-hip%C3%B3lito-701994168/"><i className="ti-linkedin"></i></a></li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</footer>
    )
}

export default Footer;