import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { Dialogo } from "@/components/ui/Dialog/Dialogo";
import { Socio } from "@/types/User";
import { API_ROUTES } from "@/service/apiConfig";
import { toast } from "react-toastify";
import { mutate } from "swr";
import axios from "axios";


interface DCUEntradas {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usuario: Socio;
}
const DialogoCrearUsuario = ({ open, setOpen, usuario }: DCUEntradas) => {


const [nuevoUsuario, setNuevoUsuario] = useState({
    "cedula": 6000,
    "nombre": "Este no es Juan",
    "ciudad": 12345,
    "usuario": "EsteNoEsjuanperez",
    "clave": "clave123",
    "numeroDeServicios": 5,
    "promedioDeCalificacion": 4.2,
    "numeroDeAmonestaciones": 2,
    "numeroDeFelicitaciones": 3
});

const submitForm = async (e: SyntheticEvent) =>{
    e.preventDefault();
    //console.log(nuevoUsuario);

    try{
        await axios.request({
            method: "POST",
            url: `${API_ROUTES.createUser}`,
            data:{...nuevoUsuario},
        });
        await mutate(API_ROUTES.createUser);
        toast.success("Exito creando el usuario");


    }catch (error){
        toast.error("No se puedo crear el usuario");
    }
    setOpen(false);
};


    return (
        <Dialogo open={open} onClose={() => { setOpen(false) }} titulo={"Crear usuario"}>

            <form action="" className="gap-3 flex flex-col" onSubmit={submitForm}>

                <label htmlFor="">
                    <span>Cedula</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Nombre</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Ciudad</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Usuario</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Clave</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Numero de servicios</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Promedio calificacion</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>Numero de amonestaciones</span>
                    <input type="text" />
                </label>

                <label htmlFor="">
                    <span>numero de felicitaciones</span>
                    <input type="text" />
                </label>
                <div className="flex gap-5 justify-center items-center">
                    <button type="submit"
                        onClick={() => { }} className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200">
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

export { DialogoCrearUsuario };