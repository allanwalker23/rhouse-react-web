import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Select from 'react-select/async';
import { Input } from './styles';

interface InputProps{
    name:string;
    placeholder:string;
    type:string;
    typeInput: 'text' | 'option';
    icon:string;
}

const InputCadastro:React.FC<InputProps> =({icon,name,placeholder,type,typeInput,...rest}) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const {fieldName,defaultValue,error,registerField}= useField(name);
    const[isFocused,setIsFocused]=useState(false);

    useEffect(()=>{
        registerField({
            name:fieldName,
            ref: inputRef.current || selectRef.current,
            path:'value',
        })

        
    },[fieldName,registerField]);
    
    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
      }, []);
    
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    
      }, []);
    return(
        	<>
        <div className="col-lg-6 col-md-6">
        <div className="form-group">
            <div className="input-with-icon">
                {typeInput=='text' &&(
                    <>
                    <Input ref={inputRef} type={type} className="form-control" placeholder={placeholder}
                    isFocused={isFocused} isErrored={!!error} onFocus={handleInputFocus} onBlur={handleInputBlur}
                    data-toggle="tooltip" data-placement="top" title={error}/>
                    <i className={icon}></i>
                    </>
                )}

                {typeInput=='option' &&(
                    <>
                     <select ref={selectRef} className="form-control">
                    <option value={1}>Sou um cliente</option>
				    <option value={0}>Quero Alugar</option>
				    </select>
                    <i className={icon}></i>
                    </>
                )}
              
				
            </div>
        </div>
    </div>
    </>
    )
}
export default InputCadastro;
