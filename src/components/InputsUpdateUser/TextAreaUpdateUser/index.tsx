import { useField } from "@unform/core";
import { useRef, useEffect, TextareaHTMLAttributes, useState, useCallback } from "react";
import { TextArea } from "./styles";


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name:string;

}

const TextAreaUpdate:React.FC<TextAreaProps>=({name,...rest})=>{
    const textAreaRef=useRef<HTMLTextAreaElement>(null)

    const {fieldName,defaultValue,error,registerField}= useField(name);
    const[isFocused,setIsFocused]=useState(false);

    useEffect(()=>{
        registerField({
            name:fieldName,
            ref: textAreaRef.current,
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
            <TextArea 
            isFocused={isFocused} 
            isErrored={!!error}
            className='form-control'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            data-toggle="tooltip" data-placement="top" title={error}
            ref={textAreaRef} {...rest}/>
         

        )
}
export default TextAreaUpdate