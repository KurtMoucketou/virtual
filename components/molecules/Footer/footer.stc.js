import Styled from 'styled-components';

const FooterStc = Styled.div`
    background-color: #f8f8f8;
    padding: 70px 0 50px;
    overflow: hidden;

    .row__footer{
        display: flex;
        flex-wrap: nowrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .max-mb-50{
        margin-bottom: 50!important;
        margin-right: 10px;
        margin-left: 10px;
    }

    .col-mb-5{
        flex: 0 0 41.67%;
        max-width: 41.67%;
    }

    .footer__widget{
        box-sizing: inherit;
        width: 100%;
    }

    .footer__widget__content{
        font-size: 14px;
        font-weight: 500;
    }

    .content{
        box-sizing: inherit; 
    }

    .title__menu{
        font-size: 18px;
        margin-bottom: 17px;
    }

    .text__Footer{
        display: block;
        margin-bottom: 11px;
        margin-right: 15px;
        margin-left: 15px;
    }

    .social__Medias{
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;
        margin-right: -25px;
        margin-bottom: -15px;
    }

    .footer__social__inline{
        margin-right: 25px;
        margin-bottom: 15px;
    }

    .title__menu{
        font-family: Gilroy;
        font-weight: 700;
        line-height: 1.3;
        margin-top: 0;
        color: #333;
        clear: both;
        text-align: left;
    }

    .element__menuA{
        display: flex-inline;
        width: 100%;
        height: 20px;
        box-sizing: inherit;
        flex-wrap: wrap;
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

    .divMenu
    {
        text-align:right;
        @media (max-width: 768px) {
            display:none;
        }
    }

    @media screen and (min-width: 576px){

            min-width: 100%!important;
            align-items: center;
    
        .row__footer
        {
            width: 100%;            
        }
        

    }

`;
export default FooterStc;