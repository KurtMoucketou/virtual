import Styled from 'styled-components'

const FormationsCardStc = Styled.div`

        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;

    .col__container{
        max-width: 50%;
        flex: 0 0 50%;
    }
    .col__container:hover::before{
        box-shadow: -20px 10px 20px rgba(0,0,0,0.1)!important;
    }

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

============================ MEDIA SCREEN ============================= 

    @media screen and (min-width: 576px){
                

        .container{
            width: 100%;
            height: 100%;
        }
        .ranger
        {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: space-between;
            align-items: unset;
            margin-right: -15px;
            margin-left: -15px;
            height: 100vw;
            margin-bottom: .5rem;
        }
        
        .col-lg-4{
            display: flex;
            flex-direction: columns;
            box-shadow: -20px 10px 20px rgba(0,0,0,0.1)!important;
            margin-bottom: .5rem!important;
        }

        .items .col-lg-4{
            margin-bottom: .5rem!important;
        }

        .col-lg-6, .col__container {
            width: 100%;
            display: flex;
        }

    }

`
export default FormationsCardStc;
