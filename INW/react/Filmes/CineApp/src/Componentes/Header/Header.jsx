import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-primary-kaneto text-secondary-kaneto text-center items-center p-4 mb-4 justify-between">
            <span className="text-xl ">Olá visitante!</span>
            <h1 className="text-3xl">Bem vindo ao CineKa</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;