import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
    nameInput:string;
    classInput:string;
    icon:string;
   
}
const InputLogin:React.FC<InputProps>=({name,classInput,nameInput,icon,...rest})=>{
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const {fieldName,defaultValue,error,registerField}= useField(name);

    useEffect(()=>{
        registerField({
            name:fieldName,
            ref: inputRef.current,
            path:'value',
        })
    },[fieldName,registerField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
      }, []);
    
      const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    
        setIsFilled(!!inputRef.current?.value);
      }, []);
    
    return(
        <div className="form-group">
				<label>{nameInput}</label>
	    			<div className={classInput}>
    				
                    <Input ref={inputRef} isErrored={!!error} isFocused={isFocused} isFilled={isFilled}
                      data-toggle="tooltip" data-placement="top" title={error}
                      type="text" className="form-control" placeholder={nameInput}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      defaultValue={defaultValue}
                      {...rest}
                     />									

    				
                    <i className={icon}></i>
		        </div>
		</div>
    )
}

export default InputLogin;