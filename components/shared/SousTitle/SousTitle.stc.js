import styled from "styled-components";

export const SousTitleStc = styled.h4`
    padding-bottom: 15px;
    position: relative; 
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
    display: block;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: ${props => props.text_transform || "uppercase"};
    color: ${props => props.color || "#8c89a2"};
    
    &:before
    {
        content: "";
        position: absolute;
        width: 80px;
        height: 1px;
        bottom: 0;
        left: 0;
        border-bottom: ${props => props.underline || "0"}px solid ${props => props.color || "#000"};;
    }
`;

export default SousTitleStc;