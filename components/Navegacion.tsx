import Link from "next/link";

interface EntradasNavegacion{
    titulo: String;
    descripcion: string;
    href: string;
}


const Navegacion = ({titulo, descripcion, href}:EntradasNavegacion) => {
    return(
        <Link href={href} className="hover:text-blue-500 bg-slate-200 rounded-xl shadow-xl hover:scale-105 flex flex-col justify-center items-center p-3">
            <h2>{titulo}</h2>
            <span>{descripcion}</span>
        </Link>
    )
};

export {Navegacion};