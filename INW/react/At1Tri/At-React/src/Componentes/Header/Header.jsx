import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link className='links-header' to='/'>Home</Link> </li>
                    <li><Link className='links-header' to='/sobre'>Sobre</Link></li>
                    <li><Link className='links-header' to='/contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}