import { FormHandles, useField } from '@unform/core';
import { Form } from '@unform/web';
import React, {FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import InputLogin from '../InputLogin';
import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router';
interface SignInFormData{
	email:string;
	senha:string;
  }

const LoginComponent: React.FC = ()=>{
	
	const formRef = useRef<FormHandles>(null);
	const{addToast}=useToast();
	const {signIn}=useAuth();
	const history=useHistory();
	const handleSubmit=useCallback(async(data:SignInFormData)=>{
		console.log(data)
		try{
			formRef.current?.setErrors({})
	
			const schema=Yup.object().shape({
				email:Yup.string()
				.email("Digite um email válido")
				.required("Email obrigatório"),
				senha:Yup.string().required("Senha obrigatória")
			});
	
			await schema.validate(data,{
				abortEarly:false,
			})
		
			addToast({
				title:"Logando..."
			})
			

			setTimeout(()=>{
				window.location.href="http://dev.nspace.com.br/dashboard";
			  },3000)

	
		}catch(err){
			if(err instanceof Yup.ValidationError){
				const errors = getValidationError(err)
				console.log(errors)
				formRef.current?.setErrors(errors)
			  }
	 
			  addToast({
				type:'error',
				title:'Erro na autenticação',
				description:'Ocorreu um erro ao fazer o login, cheque as credenciais'
			  });
	
		}
			
		},[])

	return(
	
		<div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
			<div className="modal-content" id="registermodal">
				<span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
				<div className="modal-body">
					<h4 className="modal-header-title">Login</h4>
					<div className="login-form">
						<Form ref={formRef} onSubmit={handleSubmit}>
						
							
		
							<InputLogin name="email" nameInput="Email" classInput="input-with-icon" icon="ti-user"
							type="text"/>
							
							
							<InputLogin name="senha" nameInput="Senha" classInput="input-with-icon" icon="ti-unlock"
							 type="password"
							/>
							
							
							
							<div className="form-group">
								<button type="submit" className="btn btn-md full-width pop-login">Login</button>
							</div>
						
						</Form>
					</div>
					<div className="modal-divider"><span>Ou faça login por</span></div>
					<div className="social-login mb-3">
						<ul>
							<li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
							<li><a href="#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
						</ul>
					</div>
					<div className="text-center">
						<p className="mt-5"><a href="#" className="link">Esqueceu sua senha?</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>			
    )
}

export default LoginComponent;

