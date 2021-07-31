import React, { useCallback, useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import SectionCallAction from '../../components/SectionCallAction';
import {Link, useHistory} from 'react-router-dom';
import LogoNavBar from '../../components/LogoNavBar';
import { useAuth } from '../../hooks/auth';
import NavBarLoged from '../../components/NavBarLoged';
import { loadScripts } from '../Home';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationError from '../../utils/getValidationErrors';
import { FormHandles } from '@unform/core';
import InputUpdateUser from '../../components/InputsUpdateUser/InputUser';
import { TextArea } from '../../components/InputsCadastroPropriedade/TextAreaPropriedade/styles';
import TextAreaUpdate from '../../components/InputsUpdateUser/TextAreaUpdateUser';
import { Form } from '@unform/web';


interface UserObject{
    id: number,
    nome_completo: string,
    nome_usuario: string,
    email:string,
    senha:string,
    telefone: string,
    created_at: Date,
    updated_at: Date
}

const DashBoard: React.FC = ()=>{
	const {user,refreshUser}:any= useAuth();
	const{addToast}=useToast();
	const token =localStorage.getItem('@Rhouse:token');
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	const formRef=useRef<FormHandles>(null);
	const history=useHistory();

	const becomeLocatario = useCallback(async ()=>{

		await api.post('/usuarios/becomeLocatario',{ headers:{
			Authorization:'Bearer '+token
		},})
		addToast({
			type:'info',
			title:'Pedido de alteração de conta enviado',
			description:'Assim que sua conta for verificada, você poderá ser um locátario'
		  })
		  
		  setTimeout(()=>{
			window.location.href="http://localhost:3000/dashboard";
		  },3000)

	},[])

	const handleUpdate=useCallback(async(data)=>{
		
		
		try{
			
			formRef.current?.setErrors({})
	
			const schema=Yup.object().shape({
				nome_completo:Yup.string()
				.required('Preenchimento obrigátorio'),
				email:Yup.string()
				.email("Digite um email válido")
				.required("Email obrigatório"),
				nome_usuario:Yup.string()
				.required('Preenchimento obrigátorio'),
				telefone: Yup.string().matches(phoneRegExp, 'Telefone não válido'),
				cpf:Yup.string(),
				cep:Yup.string(),
				bairro:Yup.string(),
				logradouro:Yup.string(),
				complemento:Yup.string(),
				numero:Yup.string(),
				sobre_voce:Yup.string().max(301)

				
			});
	
			await schema.validate(data,{
				abortEarly:false,
			})
			
		
			await api.put('/usuarios',{
				nome_completo:data.nome_completo,
				nome_usuario:data.nome_usuario,
				email:data.email,
				telefone:data.telefone,
				cpf:data.cpf,
				cep:data.cep,
				bairro:data.bairro,
				logradouro:data.logradouro,
				complemento:data.complemento,
				numero:data.numero || null,
				sobre_voce:data.sobre_voce
			},{headers:{
				Authorization:'Bearer '+token
			}})


			addToast({
				type:'success',
				title:'Dados atualizados com sucesso!'
			  })
			  
			  setTimeout(()=>{
				window.location.href="http://localhost:3000/dashboard";
			  },3000)
				  
	
		}catch(err){
			
			if(err instanceof Yup.ValidationError){
				const errors = getValidationError(err)
				console.log(errors)
				formRef.current?.setErrors(errors)
			  }

			  addToast({
				type:'error',
				title:'Erro na atualização de dados',
				description:'Verifique os dados e tente novamente'
			  });

	
		}
			
		},[])

	
	useEffect(() => {
		if(user!=undefined){
			refreshUser({
				token_received:token
			})
		}
		
	//Verificação De Usuário Logado
	//new Promise((resolve, reject) => {
	//	setTimeout(()=>{
	//	resolve('')
	//	},300)
	
	  // }).then(()=>{
		 //  if(user==undefined){
			  // history.push({pathname:'/error'})
		   //}
	   //})
		//loadScripts();
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
	
							<li className="active"><Link to="/dashboard">DashBoard</Link></li>

							
									
							
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
							<span style={{fontFamily:'Montserrat', fontSize:20}}>Bem vindo a sua conta</span>
							
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
									{user!=undefined ?(
										<>
									<h4>{user.nome_completo}</h4>
									{user.tipo_usuario==0 ?(
										<span>Cliente</span>
									):(
										<span>Locátario</span>
									)}
									
										</>
									):(
										<>
									<h4></h4>
									<span></span>
										</>
									)}
								</div>
								
								<div className="d-navigation">
									<ul>
										{user!=undefined?(
											user.tipo_usuario==1 ?(
												<>
												<li className="active"><Link className="active" to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
												<li><Link to="/minhas-propriedades"><i className="ti-layers"></i>Minhas propriedades</Link></li> 
												<li><Link to="/gerenciar-reservas"><i className="ti-agenda"></i>Gerenciar Reservas</Link></li>        
												<li><Link to="/criar-propriedade"><i className="ti-pencil-alt"></i>Adicionar propriedade</Link></li>
												<li><Link to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
												<li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

												<button className="btn btn-theme" type="submit" style={{maxWidth:'325 px', width:'260px'}}>Seja um cliente</button>	
												
												</>
											):(
            <>
            
            <li className="active"><Link className="active" to="/dashboard"><i className="ti-user"></i>Meu Perfil</Link></li>
            
            <li><Link to="/locais-marcados"><i className="ti-bookmark"></i>Locais Marcados</Link></li>        
            <li><Link to="/minhas-reservas"><i className="ti-agenda"></i>Minhas Reservas</Link></li>
            <li><Link  to="/alterar-senha"><i className="ti-unlock"></i>Alterar Senha</Link></li>
            <li><a href="#"><i className="ti-power-off"></i>Sair</a></li>

            <button className="btn btn-theme" type="submit" onClick={becomeLocatario} style={{maxWidth:'325 px', width:'260px'}}>Seja um locátario</button>	     
            </>
        )

        
        ):(
           <p>Usuario não logado</p>
				                			
        )}
										
									</ul>
								</div>
								
							</div>
						</div>
						
						<div className="col-lg-9 col-md-8">
							
							
							<div className="row">
					
							{user!=undefined?(
         user.tipo_usuario==1 ?(
             <>
           
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-1">
										<div className="dashboard-stat-content"><h4>R$0,00</h4> <span>Saldo disponível para saque</span></div>
										<div className="dashboard-stat-icon"><i className=" ti-money "></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-2">
										<div className="dashboard-stat-content"><h4>R$0,00</h4> <span>Valores a receber</span></div>
										<div className="dashboard-stat-icon"><i className=" ti-money "></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-3">
										<div className="dashboard-stat-content"><h4>0</h4> <span>Visualizações nos anúncios</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-4">
										<div className="dashboard-stat-content"><h4>0</h4> <span>Propriedades anunciadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-5">
										<div className="dashboard-stat-content"><h4>0</h4> <span>Reservas realizadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-6">
										<div className="dashboard-stat-content"><h4>0</h4> <span>Médias de reserva/mês</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>

					
            
            </>
        ):(
            <>
                            <div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-1">
										<div className="dashboard-stat-content"><h4>R$0,00</h4> <span>Meu Saldo</span></div>
										<div className="dashboard-stat-icon"><i className="ti-money"></i></div>
									</div>	
								</div>
								
								
            </>
        )

        
        ):(
           <p>Usuario não logado</p>
				                			
        )}
							</div>
					
							<div className="dashboard-wraper">
							
								<Form ref={formRef} onSubmit={handleUpdate}>
								<div className="form-submit">	
									<h4>Minha Conta</h4>
									<div className="submit-section">
										<div className="form-row">
										
											<div className="form-group col-md-6">
												<label>Seu Nome</label>
												<InputUpdateUser name="nome_completo" type="text" placeholder="Rodrigo Alves" value={user.nome_completo}/>
											</div>

											<div className="form-group col-md-6">
												<label>Nome de usuário</label>
												<InputUpdateUser name="nome_usuario" type="text" placeholder="Rodrigo1982" value={user.nome_usuario}/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Email</label>
												<InputUpdateUser name="email" type="email" placeholder="rodrigo@gmail.com" value={user.email}/>
											</div>
											
											
											<div className="form-group col-md-6">
												<label>Telefone</label>
												<InputUpdateUser name="telefone" type="text" placeholder="(XX)XXXX-XXXX" value={user.telefone}/>
											</div>
											
											<div className="form-group col-md-6">
												<label>CPF(Apenas digítos)</label>
												<InputUpdateUser name="cpf" type="text" placeholder="XXX.XXX.XXX-XX" value={user.cpf || null}/>
											</div>
											
											<div className="form-group col-md-6">
												<label>CEP</label>
												<InputUpdateUser name="cep" type="text" placeholder="XXXX-XXX" value={user.cep || null}/>
											</div>
											
											<div className="form-group col-md-6">
												<label>Bairro</label>
												<InputUpdateUser name="bairro" type="text" placeholder="Barra Da Tijuca" value={user.bairro || null}/>
											</div>

											<div className="form-group col-md-6">
												<label>Cidade</label>
												<InputUpdateUser name="cidade" type="text" placeholder="Rio De Janeiro" value={user.cidade || null}/>
											</div>


											<div className="form-group col-md-6">
												<label>Logradouro</label>
												<InputUpdateUser name="logradouro" type="text" placeholder="Rua Fictícia" value={user.logradouro || null}/>
											</div>


											<div className="form-group col-md-6">
												<label>Complemento</label>
												<InputUpdateUser name="complemento" type="text" placeholder="Casa" value={user.complemento || null}/>
											</div>


											<div className="form-group col-md-6">
												<label>Número</label>
												<InputUpdateUser name="numero" type="text" placeholder="729" value={user.numero || null}/>
											</div>
											
											<div className="form-group col-md-12">
												<label>Sobre você(Max 301 caracteres)</label>
												<TextAreaUpdate name="sobre_voce">{user.sobre_voce}</TextAreaUpdate>
											</div>
											
														
											<div className="form-group col-lg-12 col-md-12">
												<button className="btn btn-theme" type="submit">Salvar mudanças</button>
											</div>
								
										</div>
									</div>
								</div>
								
								</Form>
								
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

export default DashBoard;