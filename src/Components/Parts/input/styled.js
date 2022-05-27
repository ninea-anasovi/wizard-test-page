import styled, { css } from "styled-components";


export const InputTextField = styled.input`
    padding: 10px;
    margin: 10px;
    border: 3px solid #7B918F ;
    border-radius: 15px;

    ${({ type }) => {
        if(type=='checkbox'){
          return css`
            padding: unset;
            margin: 15px;
            width: 25px;
            height: 25px;
            radius: 15px;`
        }}}  
  
`;