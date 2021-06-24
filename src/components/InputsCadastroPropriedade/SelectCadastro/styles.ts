import styled,{css} from 'styled-components';

interface SelectProps{
    isErrored:boolean;
    isFocused:boolean;
}

export const Select= styled.select<SelectProps>`

${(props)=>
  props.isErrored &&
  css `
    !important;
  `}

${(props)=>
props.isFocused &&
css `
    border: 2px solid #4682B4 !important;
`}


`