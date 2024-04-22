import {NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li> <NavLink className='links-header' to='/'>Home</NavLink> </li>
                    <li> <NavLink className='links-header' to='/sobre'>Sobre</NavLink></li>
                    <li> <NavLink className='links-header' to='/contato'>Contato</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}