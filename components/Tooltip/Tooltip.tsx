interface EntradasTooltip{
    texto: string;
    children: React.ReactNode;
}


const Tooltip = ({texto, children}:EntradasTooltip) => {
  return (
    <span
      className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none '
      aria-describedby='tooltip-06'
    >
        {children}
      <span
        role='tooltip'
        id='tooltip-06'
        className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-slate-700 p-2 text-xs text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-1 before:border-x-4 before:border-b-4 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
      >
        {texto}
      </span>
    </span>
  );
};

export {Tooltip};
