import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { DialogoBorrarUsuario } from '@/components/users/DialogoBorrarUsuario';
import { useState } from 'react';

const AccionesDeUsuario = () => {
  const [abrirBorrarUsuario, setAbrirBorrarUsuario] = useState(false);


  return (
    <div className='flex gap-4 text-3xl'>
      <Tooltip texto='Editar'>
        <MdOutlineModeEditOutline className='hover:text-orange-400 cursor-pointer' />
      </Tooltip>

      <Tooltip texto='Borrar'>
        <button onClick={() => setAbrirBorrarUsuario(true)}>
          <MdDeleteOutline className='hover:text-red-600 cursor-pointer' />
        </button>
      </Tooltip>

      <DialogoBorrarUsuario
        open={abrirBorrarUsuario}
        setOpen={setAbrirBorrarUsuario}
      />
    </div>
  );
};

export { AccionesDeUsuario };
