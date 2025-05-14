import { Categoria } from "./categoria";
import { Lote } from "./lote";

export class Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio?: number;
    urlImagen: string;
    fechaVen: string;
    categoria?: Categoria;
    categoriaId?: number;
    precioLote?: number;
    lote?: Lote;
    stock?: number;
    proveedorId?: number;
    descuento?: number;

    constructor(id: number, nombre: string, descripcion: string, precio: number, urlImagen: string, fechaVen: string, categoria: Categoria, categoriaId: number, precioLote: number, lote: Lote, stock: number, proveedorId: number, descuento: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.urlImagen = urlImagen;
        this.fechaVen = fechaVen;
        this.categoria = categoria;
        this.categoriaId = categoriaId;
        this.precioLote = precioLote;
        this.lote = lote;
        this.stock = stock;
        this.proveedorId = proveedorId;
        this.descuento = descuento;
    }

}
