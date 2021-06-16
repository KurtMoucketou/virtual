import {
    NavLink,
} from 'reactstrap'
import MenuStc from './Menu.stc';

const Menu=(props)=>{
    return (
    <MenuStc>
        <NavLink href={props.lien}>{props.texte}</NavLink>
    </MenuStc>
    )
}
export default Menu;