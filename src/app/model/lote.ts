import { Producto } from "./producto"
import { Proveedor } from "./proveedor"

export interface Lote {
    id?: number
    precio?: number
    stock?: number
    producto?: Producto
    proveedor: Proveedor
    active?: boolean
} 