import { Dialog, DialogTitle, DialogContent } from "@mui/material";


interface EntradasDialogo{
    open: boolean;
    onClose: () => void;
    titulo: string;
    children: React.ReactNode;
}

const Dialogo = ({open, onClose, titulo, children}:EntradasDialogo) =>{
    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {titulo}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};
export {Dialogo};