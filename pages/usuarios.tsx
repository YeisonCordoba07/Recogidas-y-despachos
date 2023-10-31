import { AccionesDeUsuario } from '@/components/users/AccionesDeUsuario';
import { API_ROUTES, fetcher } from '@/service/apiConfig';
import { User } from '@/types/User';
import useSWR from 'swr';

const PaginaUsuarios = () => {
  const { data, isLoading, error } = useSWR<User[]>(API_ROUTES.allUsers, fetcher);

  //console.log(data, isLoading, error);

  return (
    <main className='flex flex-col justify-center gap-5 w-full'>
      <h1>Página Usuarios</h1>
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
    </main>
  );
};

export default PaginaUsuarios;
