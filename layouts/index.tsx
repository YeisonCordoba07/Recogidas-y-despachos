import { Navbar } from "@/components/ui/Navbar/Navbar";
import { useSession } from "next-auth/react";
import { MdAirlineSeatFlat } from "react-icons/md";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface EntradasLayout {
    children: React.ReactNode;
}

const Layout = ({ children }: EntradasLayout) => {
    const { data, status } = useSession();
    console.log({ data, status });

    if (status == 'loading'){
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (status === 'authenticated') {
        return (
            <main>
                <Navbar />
                {children}
                <ToastContainer />
            </main>
        );
    }

    return (
        <PublicLayout>{children}</PublicLayout>
    );

};

const PublicLayout = ({children}: EntradasLayout) =>{
    return (
        <main>
            {children}
        </main>
    );
};

export { Layout };