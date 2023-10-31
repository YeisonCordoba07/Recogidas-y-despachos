import { Dispatch, SetStateAction } from 'react';
import { Dialogo } from '@/components/ui/Dialog/Dialogo';
import axios from 'axios';
import { API_ROUTES } from '@/service/apiConfig';

import { toast } from 'react-toastify';

interface DBUEntradas{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    usuario: any;
}

const DialogoBorrarUsuario = ({open, setOpen, usuario}:DBUEntradas) => {

  const borrarUsuario = async () =>{

    try {
      await axios.request({
        method: "DELETE",
        url: `${API_ROUTES.getUser}/${usuario}`,
      });
      toast.success("Usuario eliminado en Dialogo");
    } catch (error) {

      toast.error("Error eliminando el usuario");
    }

  }

  return (
    <Dialogo 
    open={open} 
    onClose={() => {setOpen(false);}} titulo='Borrar usuario'>
      <div className="flex  flex-col gap-5">
        <span>Se borrará el usuario {usuario} ¿Está seguro?</span>
        <div className="flex gap-5 justify-center items-center">
          <button className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110"
          onClick={()=>{
            //console.log("Se borró un usuario");
          borrarUsuario();}
          }>Confirmar</button>

          <button className="bg-gray-500 p-3 rounded-lg text-white font-semibold hover:bg-gray-700 shadow-xl hover:scale-110"
          onClick={()=>{setOpen(false);}}>Cancelar</button>
        </div>
      </div>
    </Dialogo>
  );
};

export {DialogoBorrarUsuario};
