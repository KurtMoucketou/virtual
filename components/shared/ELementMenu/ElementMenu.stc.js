import Styled from 'styled-components';

const ElementMenuStc=Styled.li `
    font-size:${(props)=>props.taille || "inherite"};
    color:${(props)=>props.couleur || "inherit"};
    list-style:none;
    margin-bottom:${(props)=>props.marge_bas || "inherit"};
    text-transform:uppercase;
    font-weight: ${(props)=>props.font_weight || "600"};
    text-align: ${(props)=>props.text_align || "-webkit-left"};

    a
    {
        color:${(props)=>props.couleur || "inherit"};
        text-decoration:none;
    }

    .max-mt-20{
        margin-top: 20px;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        box-sizing: inherit;
    }

    .colCopy{
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
        display: block;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }

    a{
        text-decoration: none!important;
    }

`;
export default ElementMenuStc;
