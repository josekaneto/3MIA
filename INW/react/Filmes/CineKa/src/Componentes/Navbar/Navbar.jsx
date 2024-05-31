import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center">
            <ul className="flex gap-3">
                <li><Link className="text-lg " to="/">Home</Link></li>
                <li><Link className="text-lg " to="filmes">Filmes</Link></li>
                <li><Link className="text-lg " to="sobre">Sobre</Link></li>
                <li><Link className="text-lg" to="contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;