import {NavItem} from 'reactstrap';
import Styled from 'styled-components';

const MenuSct=Styled(NavItem)`
        font-size: 16px;
        font-weight: 600;
        line-height: 1.375;
        display: block;
        padding: 29px 17px;
        

        & .nav-link
        {
            color: #404040 !important;
        }
`;
export default MenuSct;