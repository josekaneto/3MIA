import { Link } from "react-router-dom";

function Header() {
    
    return ( 
        <header className='bg-neutral-800 w-full h-32 rounded-b-xl flex items-center justify-center'>
          <Link to='/' className="w-60 h-auto">
            <img className="w-full" src="logo-spotify-2048.png" alt="" />
        </Link>
        </header>
    );
}

export default Header;