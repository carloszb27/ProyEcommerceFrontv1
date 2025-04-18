import { Categoria } from "./categoria";
import { Lote } from "./lote";

export class Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    urlImagen: string;
    fechaVen: string;
    categoria: Categoria;
    lotes: Lote[];
    descuento?: number;
    active?: boolean;

    constructor(id: number, nombre: string, descripcion: string, precio: number, urlImagen: string, fechaVen: string, categoria: Categoria, lotes: Lote[], descuento: number, active: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.urlImagen = urlImagen;
        this.fechaVen = fechaVen;
        this.categoria = categoria;
        this.lotes = lotes;
        this.descuento = descuento;
        this.active = active;
    }

}
