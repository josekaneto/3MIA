function Aside({ children }) {
    return (
        <>
            <aside className='bg-neutral-800 h-full rounded-3xl w-1/4 flex flex-col justify-around items-center'>
                {children}
            </aside>
        </>

    );
}

export default Aside;