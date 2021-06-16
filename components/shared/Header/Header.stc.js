import Styled from 'styled-components';
import {Navbar} from 'reactstrap';

const HeaderStc=Styled(Navbar)`
    z-index: 9999;
    min-height: 80px;
    float: left;
    width: 100%;
    background:#fff;

    .mr-auto, .mx-auto {
        margin: auto !important;
        margin-right: 0px !important;
    }

`;
export default HeaderStc;