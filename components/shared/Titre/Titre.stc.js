import React from 'react';
import Styled from 'styled-components';
const TitreStc=Styled.h1`
    color:${(props)=>props.couleur || "#333333"};
    font-size:${(props)=>props.taille || "20px"};
    margin-bottom:${(props)=>props.marge_bas || "auto"};
    font-weight:${(props)=>props.poid_font || "600"};
    text-align: ${(props)=>props.text__align || "-webkit-center"};;
`;
export default TitreStc;