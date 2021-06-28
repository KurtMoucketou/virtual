import Styled from 'styled-components'

const FormationsCardStc = Styled.div`

        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;


    .ranger{
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .titre__Card{
        color: #800080;
    }

    .titre__Card:hover{
        color: #3f3a64;
        cursor: pointer;
    }

    .formation__2{
        background: #faf8f6;
        display: flex;
        overflow: hidden;
        height: 100%;
        padding: 20px;
        flex-shrink: 0;
        box-sizing: inehrit;
        transition: all .25s cubic-bezier(.645,.045,.355,1);
    }

    .formation__2::after, .formation__2::before {
        box-sizing: border-box;
    }

    .formation__2::before, .formation__2::after {
        box-sizing: inherit;
    }

    .col__container{
        max-width: 50%;
        flex: 0 0 50%;
    }

    .imgCard{
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
    }


    .info{
        align-self: center;
        padding: 0;
    }

    ul{
        margin: 0!important;
        padding: 0;
    }

    li{
        list-style: none;
        display: -webkit-inline-box;
        margin: 20px;
        margin-left: 0;
    }

`
export default FormationsCardStc;
