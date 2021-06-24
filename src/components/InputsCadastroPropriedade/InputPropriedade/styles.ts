import styled,{css} from 'styled-components';

interface InputProps{
    isErrored:boolean;
    isFocused:boolean;
}

export const Input= styled.input<InputProps>`

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