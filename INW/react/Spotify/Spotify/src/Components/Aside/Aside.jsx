function Aside({ children }) {
    return ( 
    <aside className='bg-neutral-800 mt-8 -mb-10 rounded-3xl w-1/4 min-h-screen flex flex-col justify-around items-center'>
        {children}
    </aside>
     );
}

export default Aside;