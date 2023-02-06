import { Link, useLocation } from 'react-router-dom'; //Tag para alterar a rota dinamico entre Inicio e sobremim
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu () {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}