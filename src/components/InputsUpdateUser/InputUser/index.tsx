import { useField } from '@unform/core';
import React, { InputHTMLAttributes, TextareaHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { Input } from './styles';



interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string;

}

const InputPropriedade:React.FC<InputProps>=({name,...rest})=>{
        const inputRef=useRef<HTMLInputElement>(null)

        const {fieldName,defaultValue,error,registerField}= useField(name);
        const[isFocused,setIsFocused]=useState(false);

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
        
          }, []);

            return(
            
                    <>
                     <Input 
                      isFocused={isFocused} 
                      isErrored={!!error}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      data-toggle="tooltip" data-placement="top" title={error}
                      ref={inputRef}
                      
                       {...rest}/>

                    {error &&(
                          <p style={{color:'red'}}>{error}</p>
                      )}
                     </>
    )
}


export default InputPropriedade;