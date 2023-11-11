import { Dispatch, SetStateAction, useState } from 'react';
import { Dialogo } from '@/components/ui/Dialog/Dialogo';
import axios from 'axios';
import { API_ROUTES } from '@/service/apiConfig';

import { toast } from 'react-toastify';
import { Spinner } from '@/components/ui/Spinner';
import { mutate } from 'swr';
import { Socio } from '@/types/User';

interface DBUEntradas {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  usuario: Socio;
}


const DialogoBorrarUsuario = ({ open, setOpen, usuario }: DBUEntradas) => {
  const [loading, setLoading] = useState(false);



  const borrarUsuario = async () => {
    setLoading(true);
    try {
      await axios.request({
        method: "DELETE",
        url: `${API_ROUTES.getUser}/${usuario}`,
      });
      await mutate(API_ROUTES.allUsers);
      toast.success("Usuario eliminado en Dialogo");
      setOpen(false);
    } catch (error) {

      toast.error("Error eliminando el usuario");
    }
    setLoading(false);
  };



  return (
    <Dialogo
      open={open}
      onClose={() => { setOpen(false); }} titulo='Borrar usuario'>
      <div className="flex  flex-col gap-5">
        <span>Se borrará el usuario {usuario.cedula} ¿Está seguro?</span>
        <div className="flex gap-5 justify-center items-center">

          <button className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200"
            onClick={() => { borrarUsuario();}}
            disabled={loading}>
              {loading ? <Spinner/> : <span>Confirmar</span>}
          </button>


          <button className="bg-gray-500 p-3 rounded-lg text-white font-semibold hover:bg-gray-700 shadow-xl hover:scale-110 disabled:bg-gray-200"
            onClick={() => { setOpen(false); }}
            disabled={loading}>
            Cancelar
          </button>


        </div>
      </div>
    </Dialogo>
  );
};

export { DialogoBorrarUsuario };
