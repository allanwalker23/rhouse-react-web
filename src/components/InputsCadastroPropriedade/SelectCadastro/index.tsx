import { useField } from '@unform/core';
import { SelectHTMLAttributes, useRef, useEffect, useCallback, useState } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string; 
   
}
const SelectPropriedade:React.FC<SelectProps>=({name,children,...rest})=>{
        
        const selectRef=useRef<HTMLSelectElement>(null)
        
        const {fieldName,defaultValue,error,registerField}= useField(name);
        const[isFocused,setIsFocused]=useState(false);


        useEffect(()=>{
            registerField({
                name:fieldName,
                ref: selectRef.current,
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
			          <select
                       ref={selectRef} {...rest}>
                        {children}
			          
			          </select>
                      {error &&(
                          <p style={{color:'red'}}>Preenchimento obrigátorio!</p>
                      )}
                    </>
                )
    
}

export default SelectPropriedade;