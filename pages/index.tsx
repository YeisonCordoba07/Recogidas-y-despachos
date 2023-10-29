import { Navegacion } from '@/components/Navegacion';

const Home = () => {
  return (
    <main className='flex flex-col w-full h-screen justify-center items-center gap-5'>
      <h1>Sistema de recogidas y despachos</h1>

      <div className="flex justify-around gap-5">
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
      </div>
    </main>
  );
};

export default Home;
