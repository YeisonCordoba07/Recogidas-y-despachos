export interface Socio {
    cedula: number;
    nombre: string;
    ciudad: number;
    usuario?: string;
    clave: string;
    numeroDeServicios?: number;
    promedioDeCalificacion?: Float32Array;
    numeroDeAmonestaciones?: number;
    numeroDeFelicitaciones?: number;
}

export interface UsersQuery{
    socios: Socio[];
}