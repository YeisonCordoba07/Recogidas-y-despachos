import { AccionesDeUsuario } from "@/components/users/AccionesDeUsuario";
import { API_ROUTES, fetcher } from "@/service/apiConfig";
import useSWR from "swr";

const PaginaUsuarios = () => {
    const {data, isLoading, error} = useSWR(API_ROUTES.users, fetcher);

    console.log(data, isLoading, error);
    return (
        <main className="flex flex-col justify-center gap-5 w-full">
            <h1>Página Usuarios</h1>
            <section className="flex justify-center">
                
                <table cellSpacing="0">
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
                            <td><AccionesDeUsuario/></td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>nombre2</td>
                            <td>correo@gmail.com</td>
                            <td><AccionesDeUsuario/></td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>nombre3</td>
                            <td>correo@gmail.com</td>
                            <td><AccionesDeUsuario/></td>
                        </tr>
                        {/*data.users.map((user) =>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })*/}
                    </tbody>
                </table>
            </section>
        </main>

    )
};





export default PaginaUsuarios;