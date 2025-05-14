import { Proveedor } from "./proveedor"

export interface Lote {
    id?: number
    precio?: number
    stock?: number
    proveedor?: Proveedor
} 