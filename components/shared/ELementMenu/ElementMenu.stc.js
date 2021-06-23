import Styled from 'styled-components';

const ElementMenuStc=Styled.li `
    font-size:${(props)=>props.taille || "inherite"};
    color:${(props)=>props.couleur || "inherit"};
    list-style:none;
    margin-bottom:${(props)=>props.marge_bas || "inherit"};
    text-transform:uppercase;
    font-weight: ${(props)=>props.font_weight || "500"};
    text-align: ${(props)=>props.text_align || "-webkit-left"};

    a
    {
        color:${(props)=>props.couleur || "inherit"};
        text-decoration:none;
    }

`;
export default ElementMenuStc;
