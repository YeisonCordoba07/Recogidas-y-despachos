import { Navegacion } from '@/components/ui/Navegacion/Navegacion';
import { signIn, useSession } from 'next-auth/react';

const Home = () => {
  const { status } = useSession();
  return (
    <main className='flex flex-col w-full h-screen items-center gap-5'>
      <h1>Sistema de recogidas y despachos</h1>
      {status === 'authenticated' ? (
        <div className='flex justify-around gap-5'>
          <Navegacion
            titulo='Lotes'
            descripcion='Gestionar lotes de la finca'
            href='/lotes'
          />
          <Navegacion
            titulo='Recogidas'
            descripcion='Crear y visulizar recogidas'
            href='/recogidas'
          />

          <Navegacion
            titulo='Envios'
            descripcion='Crear y visualizar envios'
            href='/envios'
          />

          <Navegacion
            titulo='Usuarios'
            descripcion='Crear y visualizar usuarios'
            href='/usuarios'
          />
        </div>
      ) : (
        <div>
          <button onClick={() =>{signIn('auth0')}}>Iniciar sesion</button>
        </div>
      )}
    </main>
  );
};

export default Home;
//https://d2tb9y3eoy4nz1.cloudfront.net/
