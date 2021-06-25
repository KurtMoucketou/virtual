import Styled from 'styled-components'

const SectionFormStc = Styled.div`

        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        -webkit-box-pack: center;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    
    .header__form{
        display: block; 
    }

    FormGroup{
        width: -webkit-fill-available;
        display: contents;
        text-align: -webkit-left;
    }
    
    .form-group {
        width: 100vw;
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
    }

    .dropdown-menu.show {
        width: 100%;
    }

    .btn__recherch{
        border-color: #20ad96;
        background-color: #20ad96;
        margin-top: 3.5rem;
        height: 3.5rem;
    }

    .btn__Drop{
        width: 100%;
        height: 56px;
        padding: 0;
        font-weight: 500;
        border: 1px solid #ccc;
        min-height: 56px;
        color: #696969;
        border-radius: 3px;
        outline: 0;
        background-color: #f5f5f5;
    }

    .sousTitle__formContact{
        margin-right: 40px;
        margin-bottom: 0!important;
    }


`
export default SectionFormStc;