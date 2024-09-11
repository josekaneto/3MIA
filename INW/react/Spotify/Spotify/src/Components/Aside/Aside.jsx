function Aside({ children }) {
    return ( 
    <aside className='bg-cyan-400 w-1/4 h-full flex flex-col justify-around items-center'>
        {children}
    </aside>
     );
}

export default Aside;