import React, { useState, useRef } from 'react'
import { CenterContainer, TooltipBox, TooltipTarget, TooltipWrapper } from './styled';



function Tooltip({text, position, children}) {

    const [isHovered, setIsHovered] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);
    const targetRef = useRef(null);
    const showTooltip = isHovered || isSubmited;
    
    return (

        <TooltipWrapper>
            <TooltipTarget onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                {children}
            </TooltipTarget>
            {showTooltip && (
                <CenterContainer position={position}>
                    <TooltipBox position={position}>
                        {text}
                    </TooltipBox>
                </CenterContainer>
            )}
        </TooltipWrapper>

    )
}

export default Tooltip;