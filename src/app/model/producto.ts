import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";

export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    urlImagen: string;
    fechaVen: string;
    categoria: Categoria;
    proveedor: Proveedor;
    active: boolean;

    constructor(id: number, nombre: string, descripcion: string, precio: number, cantidad: number, urlImagen: string, fechaVen: string, categoria: Categoria, proveedor: Proveedor, active: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.urlImagen = urlImagen;
        this.fechaVen = fechaVen;
        this.categoria = categoria;
        this.proveedor = proveedor;
        this.active = active;
    }

}
