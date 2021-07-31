import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Select from 'react-select/async';
import { Input } from './styles';

interface InputProps{
    name:string;
    placeholder:string;
    type:string;
    value:string;
}

const InputUpdateUser:React.FC<InputProps> =({name,placeholder,type,value,...rest}) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const {fieldName,defaultValue,error,registerField}= useField(name);
    const[isFocused,setIsFocused]=useState(false);
    const[content, setContent]=useState(value);

    

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
                    <Input ref={inputRef} type={type} className="form-control" placeholder={placeholder}
                    isFocused={isFocused} isErrored={!!error} onFocus={handleInputFocus} onBlur={handleInputBlur}
                    data-toggle="tooltip" data-placement="top" title={error}
                    value={content} onChange={(e) => setContent(e.target.value)}/>
                   
                    </>

    )}
export default InputUpdateUser;
