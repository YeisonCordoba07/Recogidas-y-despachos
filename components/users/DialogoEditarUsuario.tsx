import { Dialogo } from "@/components/ui/Dialog/Dialogo";
import { User } from "@/types/User";
import { Dispatch, SetStateAction } from "react";

interface DBUEntradas {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usuario: User;
}


const DialogoEditarUsuario = ({ open, setOpen, usuario }: DBUEntradas) => {
    return (
        <Dialogo titulo="Edit U" open={open} onClose={() => { setOpen(false) }}>
            <div>Editar usuario</div>
            <form action="" className="flex flex-col gap-4">
                <label htmlFor="nombre-de-usuario">
                    <span>Nombre</span>
                    <input name="nombre-de-usuario" type="text" required defaultValue={usuario.nombre}/>
                </label>
                <label htmlFor="rol-usuario">
                    <span>Rol</span>
                    <select name="rol-usuario" id="" required defaultValue={2}>
                        <option disabled>Seleccione un rol</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuario</option>
                        <option value="3">Test</option>
                    </select>
                </label>

            </form>
        </Dialogo>
    );
}

export { DialogoEditarUsuario };