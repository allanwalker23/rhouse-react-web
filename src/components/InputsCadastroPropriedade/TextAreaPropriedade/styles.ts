import styled,{css} from 'styled-components';

interface TextAreaProps{
    isErrored:boolean;
    isFocused:boolean;
}

export const TextArea= styled.textarea<TextAreaProps>`

${(props)=>
  props.isErrored &&
  css `
    border: 2px solid red !important;
  `}

${(props)=>
props.isFocused &&
css `
    border: 2px solid #4682B4 !important;
`}


`