function ConteudoPrincipal({children}) {
  return (
    <main className="grid grid-cols-4 bg-slate-400 w-3/4 items-center place-items-center">
      {
        children
      }
    </main>
  );
}

export default ConteudoPrincipal;
