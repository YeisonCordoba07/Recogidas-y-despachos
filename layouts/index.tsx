import { Navbar } from "@/components/ui/Navbar/Navbar";


interface EntradasLayout{
    children: React.ReactNode;
}

const Layout = ({children}:EntradasLayout) => {
    return(
        <main>
            <Navbar />
            {children}
        </main>
    );
};

export {Layout};