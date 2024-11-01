function Container({ children }) {
    return ( 
        <section className='flex h-screen w-full p-7'>
            {children}
        </section>
     );
}

export default Container;