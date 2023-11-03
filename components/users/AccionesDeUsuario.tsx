import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { DialogoBorrarUsuario } from '@/components/users/DialogoBorrarUsuario';
import { useState } from 'react';
import { User } from '@/types/User';
import { DialogoEditarUsuario } from '@/components/users/DialogoEditarUsuario';

interface EntradasAccionesDeUsuario {
  usuario: User;
}

const AccionesDeUsuario = ({ usuario }: EntradasAccionesDeUsuario) => {
  const [abrirBorrarUsuario, setAbrirBorrarUsuario] = useState(false);
  const [abrirEditarUsuario, setAbrirEditarUsuario] = useState(false);


  return (
    <div className='flex gap-4 text-3xl'>
      <Tooltip texto='Editar'>
        <button onClick={() => setAbrirEditarUsuario(true)}>
          <MdOutlineModeEditOutline className='hover:text-orange-400 cursor-pointer' />
        </button>
      </Tooltip>

      <Tooltip texto='Borrar'>
        <button onClick={() => setAbrirBorrarUsuario(true)}>
          <MdDeleteOutline className='hover:text-red-600 cursor-pointer' />
        </button>
      </Tooltip>

      <DialogoBorrarUsuario
        open={abrirBorrarUsuario}
        setOpen={setAbrirBorrarUsuario}
        usuario={usuario}
      />

      <DialogoEditarUsuario
        open={abrirEditarUsuario}
        setOpen={setAbrirEditarUsuario}
        usuario={usuario} />
    </div>
  );
};

export { AccionesDeUsuario };
