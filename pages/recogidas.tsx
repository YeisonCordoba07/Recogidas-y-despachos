import { AccionesDeUsuario } from '@/components/users/AccionesDeUsuario';
import { DialogoCrearUsuario } from '@/components/users/DialogoCrearUsuario';
import { API_ROUTES, fetcher } from '@/service/apiConfig';
import { Socio } from '@/types/User';
import { inputAdornmentClasses } from '@mui/material';
import useSWR from 'swr';

const PaginaRecogidas = () => {
    const { data, isLoading, error } = useSWR<Socio[]>(API_ROUTES.allUsers, fetcher);
    return (
        <main className='flex flex-col items-center gap-5 w-full'>
      <h1>Página Recogidas</h1>

      <section className='flex justify-center'>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>nombre1</td>
              <td>correo@gmail.com</td>

            </tr>
            <tr>
              <td>test</td>
              <td>nombre2</td>
              <td>correo@gmail.com</td>

            </tr>
            <tr>
              <td>test</td>
              <td>nombre3</td>
              <td>correo@gmail.com</td>

            </tr>
            {isLoading === false &&
              data?.map((user) => {
                return (
                  <tr key={user.cedula}>
                    <td>{user.cedula}</td>
                    <td>{user.nombre}</td>
                    <td>{user.usuario}</td>

                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </main>
    );
}

export default PaginaRecogidas;
