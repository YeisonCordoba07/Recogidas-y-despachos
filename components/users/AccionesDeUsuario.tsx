import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { Tooltip } from '../Tooltip/Tooltip';

const AccionesDeUsuario = () => {
  return (
    <div className='flex gap-4 text-3xl'>
      <Tooltip texto='Editar'>
        <MdOutlineModeEditOutline className='hover:text-orange-400 cursor-pointer' />
      </Tooltip>

      <Tooltip texto='Borrar'>
        <MdDeleteOutline className='hover:text-red-600 cursor-pointer' />
      </Tooltip>
    </div>
  );
};

export { AccionesDeUsuario };
