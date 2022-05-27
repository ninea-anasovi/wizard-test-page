import React, { useState, useRef } from 'react'
import { CenterContainer, TooltipBox, TooltipTarget, TooltipWrapper } from './styled';



function Tooltip({text, position, children}) {

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    const showTooltip = isHovered || isFocused || 1;
    
    return (

        <TooltipWrapper>
            <TooltipTarget>
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