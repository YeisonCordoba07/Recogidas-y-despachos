import { Navbar } from "@/components/ui/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface EntradasLayout{
    children: React.ReactNode;
}

const Layout = ({children}:EntradasLayout) => {
    return(
        <main>
            <Navbar />
            {children}
            <ToastContainer/>
        </main>
    );
};

export {Layout};