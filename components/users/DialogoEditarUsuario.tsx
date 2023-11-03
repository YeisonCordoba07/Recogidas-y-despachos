import { Dialogo } from "@/components/ui/Dialog/Dialogo";
import { API_ROUTES } from "@/service/apiConfig";
import { User } from "@/types/User";
import axios from "axios";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";

interface DEUEntradas {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usuario: User;
}





const DialogoEditarUsuario = ({ open, setOpen, usuario }: DEUEntradas) => {

    const actualizarUsuario = async (e: SyntheticEvent) =>{
        //Prevenir que se envie dos veces
        e.preventDefault();
        console.log("Se guardó");
    
        try{
            await axios.request({
                method: "PUT",
                url: `${API_ROUTES.updateUser}`,
                data: {
                    "cedula": 1000,
                    "nombre": "Juan A Perez",
                    "ciudad": 12345,
                    "usuario": "juanperez123",
                    "clave": "clave123",
                    "numeroDeServicios": 5,
                    "promedioDeCalificacion": 4.2,
                    "numeroDeAmonestaciones": 2,
                    "numeroDeFelicitaciones": 3
                },
            });
            await mutate(API_ROUTES.updateUser);
            toast.success("Exito actalizando");

    
        }catch (error){
            toast.error("No se puedo actualizar");
        }
        setOpen(false);
    }


    return (
        <Dialogo titulo="Editar Usuario" open={open} onClose={() => { setOpen(false) }}>
            <div>Editar usuario</div>
            <form action="" className="flex flex-col gap-4" onSubmit={actualizarUsuario}>
                <label htmlFor="nombre-de-usuario">
                    <span>Nombre</span>
                    <input name="nombre-de-usuario" type="text" required defaultValue={usuario.nombre} />
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

                <div className="flex gap-5 justify-center items-center">

                    <button type="submit" 
                    onClick={() => {}} className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200">
                      Guardar
                    </button>


                    <button className="bg-gray-500 p-3 rounded-lg text-white font-semibold hover:bg-gray-700 shadow-xl hover:scale-110 disabled:bg-gray-200">
                        Cancelar
                    </button>


                </div>

            </form>
        </Dialogo>
    );
}

export { DialogoEditarUsuario };