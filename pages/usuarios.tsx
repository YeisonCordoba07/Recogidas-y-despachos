import { AccionesDeUsuario } from '@/components/users/AccionesDeUsuario';
import { DialogoCrearUsuario } from '@/components/users/DialogoCrearUsuario';
import { API_ROUTES, fetcher } from '@/service/apiConfig';
import { Socio } from '@/types/User';
import { useState } from 'react';
import useSWR from 'swr';

const PaginaUsuarios = () => {
  const { data, isLoading, error } = useSWR<Socio[]>(API_ROUTES.allUsers, fetcher);

  //console.log(data, isLoading, error);

  const [abrirDCrearUsuario, setAbrirDAbrirUsuario] = useState(false);

  return (
    <main className='flex flex-col items-center gap-5 w-full'>
      <h1>Página Usuarios</h1>
      <button onClick={() => setAbrirDAbrirUsuario(true)}
      className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200 w-72">Crear usuario</button>
      <section className='flex justify-center'>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>nombre1</td>
              <td>correo@gmail.com</td>
              <td>
                <AccionesDeUsuario usuario='4000' />
              </td>
            </tr>
            <tr>
              <td>test</td>
              <td>nombre2</td>
              <td>correo@gmail.com</td>
              <td>
                <AccionesDeUsuario usuario='4000' />
              </td>
            </tr>
            <tr>
              <td>test</td>
              <td>nombre3</td>
              <td>correo@gmail.com</td>
              <td>
                <AccionesDeUsuario usuario={'4000'} />
              </td>
            </tr>
            {isLoading === false &&
              data?.map((user) => {
                return (
                  <tr key={user.cedula}>
                    <td>{user.cedula}</td>
                    <td>{user.nombre}</td>
                    <td>{user.usuario}</td>
                    <td>
                      <AccionesDeUsuario usuario={user} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
      <DialogoCrearUsuario open={abrirDCrearUsuario} setOpen={setAbrirDAbrirUsuario} 
      usuario="5000"/>
    </main>
  );
};

export default PaginaUsuarios;
