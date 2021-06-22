import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { FormEvent, useCallback, useRef, useState } from 'react';
import InputCadastro from '../InputCadastro';
import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
interface SignInFormData{
	email:string;
	senha:string;
  }

const CadastroComponent :React.FC = () =>{
	const {addToast} = useToast();
  	const history = useHistory();
	const formRef=useRef<FormHandles>(null);
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	const handleSubmit=useCallback(async(data)=>{
		console.log(data)
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
				senha:Yup.string().required("Senha obrigatória"),
				telefone: Yup.string().matches(phoneRegExp, 'Telefone não válido')
			});
	
			await schema.validate(data,{
				abortEarly:false,
			})

			  addToast({
				type:'success',
				title:'Cadastro Realizado com sucessso',
				description:'Você já pode fazer seu login'
			  })
			  
			  setTimeout(()=>{
				window.location.href="http://dev.nspace.com.br/";
			  },3000)
			  
			  
	
		}catch(err){
			
			if(err instanceof Yup.ValidationError){
				const errors = getValidationError(err)
				console.log(errors)
				formRef.current?.setErrors(errors)
			  }

			  addToast({
				type:'error',
				title:'Erro no cadastro',
				description:'Ocorreu um erro ao realizar a criação da conta'
			  });

	
		}
			
		},[])
    return(
        <div className="modal fade signup" id="signup" tabIndex={-1} role="dialog" aria-labelledby="sign-up" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
					<div className="modal-content" id="sign-up">
						<span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
						<div className="modal-body">
							<h4 className="modal-header-title">Cadastro</h4>
							<div className="login-form">
								<Form ref={formRef} onSubmit={handleSubmit}>
									
									<div className="row">
										<InputCadastro icon="ti-user" name="nome_completo" 
										placeholder="Nome Completo" type="text" typeInput="text" />

										<InputCadastro icon="ti-email" name="email" 
										placeholder="Email" type="email" typeInput="text" />

										<InputCadastro icon="ti-user" name="nome_usuario" 
										placeholder="Nome de usuário" type="text" typeInput="text" />
										
										<InputCadastro icon="ti-unlock" name="senha" 
										placeholder="Senha" type="password" typeInput="text" />

										<InputCadastro icon="lni-phone-handset" name="telefone" 
										placeholder="Telefone" type="text" typeInput="text" />

										<InputCadastro icon="ti-briefcase" name="tipo_conta" 
										placeholder="Tipo de Conta" type="text" typeInput="option" />
										
									</div>
									
									<div className="form-group">
										<button type="submit"  className="btn btn-md full-width pop-login">Cadastrar</button>
									</div>
								
								</Form>
							</div>
							<div className="modal-divider"><span>Ou cadastre-se via</span></div>
							<div className="social-login mb-3">
								<ul>
									<li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
									<li><a href="#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
								</ul>
							</div>
							<div className="text-center">
								<p className="mt-5"><i className="ti-user mr-1"></i>Você já tem uma conta? <a href="#" className="link">Faça Login</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
    )
}

export default CadastroComponent;