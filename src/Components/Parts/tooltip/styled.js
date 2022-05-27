import styled, {css} from "styled-components";

export const TooltipWrapper = styled.div `
    position: relative;
    display: inline-flex;
`;

export const TooltipTarget = styled.button `
    border: none;
    background: inherit;
    padding: 5px;
    margin: -1px;
    color: inherit;
    color: inherit;
    display: flex;
`;

export const CenterContainer = styled.div `
    position:absolute;
    width: 200px;
    margin-left: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    bottom: calc(100% +5px);
    pointer-events: none;

    ${({position}) => {
        switch(position) {
            case 'bottom':
                return css`
                    bottom: unset;
                    top: calc(100% + 5px);`
            default:
                return css`
                    bottom: calc(100% + 5px);`
        }
    }}
`;

export const TooltipBox = styled.span `
    position: relative;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    padding : 10px 8px;
    font-size: 1.25rem;
    box-shadow: 0 4px 14px rgba(0,0,0, 0.15), 0 4px 8px rgba(0,0,0,0.2);

    &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 1px;
        border-width: 5px;
        border-style: solid;
        border-color: #000 transparent transparent, transparent;
        left: calc(50% - 4.5px);
        top: 100%;
    }

    ${({position})=> {

        switch (position){
            case 'bottom':
                return css`
                    border-color: transparent transparent #000 transparent;
                    top: unset;
                    bottom: 100%;
                    left: calc(50% - 5%);`
            default:
                return css``;
    }}}
`;