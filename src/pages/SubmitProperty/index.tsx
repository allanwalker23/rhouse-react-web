import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CadastroComponent from '../../components/CadastroComponent';
import Footer from '../../components/Footer';
import LogoNavBar from '../../components/LogoNavBar';
import NavBarLoged from '../../components/NavBarLoged';
import SectionCallAction from '../../components/SectionCallAction';
import { useAuth } from '../../hooks/auth';
import { tiposLocais } from '../../utils/contents';
import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationErrors';
import SelectPropriedade from '../../components/InputsCadastroPropriedade/SelectCadastro';
import { useToast } from '../../hooks/toast';
import InputPropriedade from '../../components/InputsCadastroPropriedade/InputPropriedade';
import TextAreaPropriedade from '../../components/InputsCadastroPropriedade/TextAreaPropriedade';
import { loadScripts } from '../Home';

const SubmitProperty:React.FC = () =>{
	const formRef=useRef<FormHandles>(null);
	const {addToast}=useToast();
	const {user}:any= useAuth()
	
	
	useEffect(()=>{
	
		loadScripts();
	
		
	},[])

	const handleSubmit=useCallback(async(data)=>{
		console.log(data)
		const prench_obr="Preenchimento obrigátorio!"
		try{
			
			formRef.current?.setErrors({})
	
			const schema=Yup.object().shape({
				titulo:Yup.string()
				.required(prench_obr),
				status:Yup.number()
				.required(prench_obr),
				tipo_propriedade:Yup.number()
				.required(prench_obr),
				limite_pessoa:Yup.number()
				.typeError(prench_obr)
				.max(50000, 'Limite máximo 50.000 pessoas'),
				qtd_quartos:Yup.number()
				.required(prench_obr),
				preco:Yup.number()
				.typeError(prench_obr)
				.min(0, 'Valor mínimo de 0')
				.max(700000, 'Valor máximo R$70.000.00'),
				area:Yup.number()
				.typeError(prench_obr)
				.min(0, 'Área mínima 1.000m²')
				.max(700000, 'Área máxima de 100.000m²'),
				qtd_banheiros:Yup.number()
				.required(prench_obr),
				endereco:Yup.string()
				.required(prench_obr),
				cidade:Yup.string()
				.required(prench_obr),
				estado:Yup.string()
				.required(prench_obr),
				cep:Yup.string()
				.required(prench_obr),
				anos_construcao:Yup.number()
				.required(prench_obr),
				descricao_completa:Yup.string()
				.required(prench_obr)
				.max(301,'Limite máximo de 301 caracteres'),
				qtd_garagem:Yup.string()
				.required(prench_obr),
				qtd_sala:Yup.number()
				.required(prench_obr),
				nome_contato:Yup.string()
				.required(prench_obr),
				email_contato:Yup.string()
				.required(prench_obr),
				telefone_contato:Yup.string()
				
				
				
			});
	
			await schema.validate(data,{
				abortEarly:false,
			})


			  addToast({
				type:'success',
				title:'Propriedade adicionada com sucesso',
				description:'Carregando propriedade...'
			  })
			  
	
		}catch(err){
			
			if(err instanceof Yup.ValidationError){
				const errors = getValidationError(err)
				console.log(errors)
				formRef.current?.setErrors(errors)
			  }

			  addToast({
				type:'error',
				title:'Erro no cadastro do local',
				description:'Cheque se todos os dados foram preenchidos corretamente'
			  });

			  $("html, body").animate({ scrollTop: 0 }, "slow");
			

	
		}
			
		},[])

	

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
						<Form ref={formRef} onSubmit={handleSubmit}>
							<div className="submit-page">
							
								<div className="form-submit">	
									<h3>Informações do Espaço</h3>
									<div className="submit-section">
										
										<div className="form-row">
										
											<div className="form-group col-md-12">
												<label>Título da propriedade<a href="#" className="tip-topdata" data-tip="Dê um título chamativo para sua propriedade"><i className="ti-help"></i></a></label>
												<InputPropriedade name="titulo" className="form-control"/>
											</div>
											
										
											<div className="form-group col-md-6">
												<label>Tipo do local</label>
												<SelectPropriedade id="ptypes" name="tipo_propriedade" className="form-control">
													<option value="">&nbsp;</option>
													{tiposLocais.map((local)=>(
														<option value={local.id}>{local.nome}</option>	
													))}
												</SelectPropriedade>
											</div>
											
											<div className="form-group col-md-3">
												<label>Preço</label>
												<InputPropriedade type="text" name="preco" className="form-control" placeholder="R$"/>
											</div>

											<div className="form-group col-md-3">
												<label>Tipo de cobrança</label>
												<SelectPropriedade id="ptypes" name="tipo_propriedade" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">Hora</option>
													<option value="2">Dia</option>
													<option value="3">Quinzena</option>
													<option value="4">Mês</option>
												</SelectPropriedade>
											</div>
											
											<div className="form-group col-md-4">
												<label>Espaço</label>
												<InputPropriedade type="text" name="area" placeholder="Em m²" className="form-control"/>
											</div>


											<div className="form-group col-md-4">
												<label>Limite de pessoas</label>
												<InputPropriedade type="text" name="limite_pessoa" className="form-control" placeholder="Digite número máximo de pessoas"/>
											</div>

											<div className="form-group col-md-4">
											<label>Código Promocional<a href="#" className="tip-topdata" data-tip="Você pode oferecer descontos aos sues compradores, saiba mais"><i className="ti-help"></i></a></label>
												<InputPropriedade type="text" name="codigo_promocional" className="form-control" placeholder="Informe o código promocional"/>
											</div>
											
											
											<div className="form-group col-md-6">
												<label>Quartos</label>
												<SelectPropriedade name="qtd_quartos" id="bedrooms" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</SelectPropriedade>
											</div>
											
											<div className="form-group col-md-6">
												<label>Banheiros</label>
												<SelectPropriedade id="bathrooms" name="qtd_banheiros" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</SelectPropriedade>
											</div>
											
										</div>
										
									</div>
									
								</div>
								
								<div className="form-submit">	
									<h3>Galeria(Desenvolvimento)</h3>
									<div className="submit-section">
										<div className="form-row">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#fotosLocal" aria-expanded="false" aria-controls="extraSer">
										 Envie as fotos do local
										</button>
										
											<div id="fotosLocal" className="form-group col-md-12 collapse" aria-labelledby="Fotos" data-parent="#accordionExample">
												
												<form action="https://themezhub.net/upload-target" className="dropzone dz-clickable primary-dropzone">
													<div className="dz-default dz-message">
														<i className="ti-gallery"></i>
														<span>Arraste & Solte Para Adicionar Imagem</span>
													</div>
												</form>
											</div>

											<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#fotosComprovante" aria-expanded="false" aria-controls="extraSer">
										 		Envie as fotos do comprovante de residência
											</button>
										
											<div id="fotosComprovante" className="form-group col-md-12 collapse" aria-labelledby="Comprovante" data-parent="#accordionExample">
											
												<form action="https://themezhub.net/upload-target" className="dropzone dz-clickable primary-dropzone">
													<div className="dz-default dz-message">
														<i className="ti-gallery"></i>
														<span>Arraste & Solte Para Adicionar Imagem</span>
													</div>
												</form>
											</div>

											<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#fotosIdCadastrante" aria-expanded="false" aria-controls="extraSer">
										 		Envie as fotos de identificação do cadastrante
											</button>
										
											<div id="fotosIdCadastrante" className="form-group col-md-12 collapse" aria-labelledby="IdCadastrante" data-parent="#accordionExample">
											
												<form action="https://themezhub.net/upload-target" className="dropzone dz-clickable primary-dropzone">
													<div className="dz-default dz-message">
														<i className="ti-gallery"></i>
														<span>Arraste & Solte Para Adicionar Imagem</span>
													</div>
												</form>
											</div>

											<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#fotosIdProprietario" aria-expanded="false" aria-controls="extraSer">
										 		Envie as fotos de identificação do propriétario
											</button>
										
											<div id="fotosIdProprietario" className="form-group col-md-12 collapse" aria-labelledby="IdProprietario" data-parent="#accordionExample">
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
												<label>CEP</label>
												<InputPropriedade type="text" name="cep" className="form-control"/>
											</div>

											<div className="form-group col-md-6">
												<label>Endereço</label>
												<InputPropriedade type="text" name="endereco" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Cidade</label>
												<InputPropriedade type="text" name="cidade" className="form-control"/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Estado</label>
												<InputPropriedade type="text" name="estado" className="form-control"/>
											</div>
										
											
										</div>
									</div>
								</div>
								
								<div className="form-submit">	
									<h3>Informações detalhadas</h3>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-12">
												<label>Descrição(Max 301 caracteres)</label>
												<TextAreaPropriedade name="descricao_completa" className="form-control h-120"></TextAreaPropriedade>
											</div>
											
											
											<div className="form-group col-md-4">
												<label>Garagem (opcional)</label>
												<SelectPropriedade id="garage" name="qtd_garagem" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4+</option>
												</SelectPropriedade>
											</div>
											
											
											<div className="form-group col-md-12">
												<label>Outros benefícios (opcional)</label>
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
															<label htmlFor="a-3" className="checkbox-custom-label">Sala De Cinema</label>
														</li>
														<li>
															<input id="a-5" className="checkbox-custom" name="a-5" type="checkbox"/>
															<label htmlFor="a-5" className="checkbox-custom-label">Acessibilidade</label>
														</li>
														<li>
															<input id="a-6" className="checkbox-custom" name="a-6" type="checkbox"/>
															<label htmlFor="a-6" className="checkbox-custom-label">Churrasqueira</label>
														</li>
														<li>
															<input id="a-7" className="checkbox-custom" name="a-7" type="checkbox"/>
															<label htmlFor="a-7" className="checkbox-custom-label">Isolamento acústico</label>
														</li>
														<li>
															<input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
															<label htmlFor="a-8" className="checkbox-custom-label">Sistema de Som</label>
														</li>
														<li>
															<input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
															<label htmlFor="a-8" className="checkbox-custom-label">Sistema de Luzes</label>
														</li>
														<li>
															<input id="a-9" className="checkbox-custom" name="a-9" type="checkbox"/>
															<label htmlFor="a-9" className="checkbox-custom-label">Jacuzzi</label>
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
										
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="card-header" id="Packages">
									  <h2 className="mb-0">
										<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#extraPackages" aria-expanded="false" aria-controls="extraSer">
										  Dê  uma olhada nos pacotes de impulsionamento disponíveis
										</button>
									  </h2>
									</div>
									<div id="extraPackages" className="collapse" aria-labelledby="Packages" data-parent="#accordionExample">
										<div className="row">
											
											
											<div className="col-lg-4 col-md-4 c-l-sm-12">
												<div className="package-box">
													<span className="theme-cl">Plano Padrão(Gratuito)</span>
													<h4 className="packages-features-title">R$0,00</h4>
													<ul className="packages-lists-list">
														<li>Impulsionamento padrão</li>
													</ul>
													<div className="buypackage">
														<div className="switchbtn paying">
															<input id="gold" className="switchbtn-checkbox" type="radio" value="2" checked name="package7"/>
															<label className="switchbtn-label" htmlFor="gold"></label>
														</div>
														<span>Mudar de plano</span>
													</div>
												</div>
											</div>
											
											
											<div className="col-lg-4 col-md-4 c-l-sm-12">
												<div className="package-box">
													<span className="theme-cl">Plano Avião</span>
													<h4 className="packages-features-title">R$19,90</h4>
													<ul className="packages-lists-list">
														<li>Maior Visibilidade</li>
														
													</ul>
													<div className="buypackage">
														<div className="switchbtn paying">
															<input id="premium" className="switchbtn-checkbox" type="radio" value="2" name="package7"/>
															<label className="switchbtn-label" htmlFor="premium"></label>
														</div>
														<span>Mudar de plano</span>
													</div>
												</div>
											</div>
											
											
											<div className="col-lg-4 col-md-4 c-l-sm-12">
												<div className="package-box">
													<span className="theme-cl">Plano Foguete</span>
													<h4 className="packages-features-title">R$40,00</h4>
													<ul className="packages-lists-list">
														<li>Seja visto por milhares de pessoas!</li>
														
													</ul>
													<div className="buypackage">
														<div className="switchbtn paying">
															<input id="standard" className="switchbtn-checkbox" type="radio" value="2" name="package7"/>
															<label className="switchbtn-label" htmlFor="standard"></label>
														</div>
														<span>Mudar de plano</span>
													</div>
												</div>
											</div>
										
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
									<button className="btn btn-theme top-scroll" type="submit">Enviar & Visualizar</button>
								</div>
											
							</div>
							</Form>
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