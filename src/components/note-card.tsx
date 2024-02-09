export const NoteCard = () => {
  return (
    <button className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <h2 className="text-sm font-medium text-slate-300">Há 2 dias</h2>

      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quis nam
        doloribus sed in aliquam itaque nihil. Quasi unde cumque necessitatibus
        sed veritatis, facilis reprehenderit repellat aut fuga, qui veniam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quis nam
        doloribus sed in aliquam itaque nihil. Quasi unde cumque necessitatibus
        sed veritatis, facilis reprehenderit repellat aut fuga, qui veniam.
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </button>
  )
}
