export class Response {
    fecha: Date;
    status: string;
    contenido: any;

    constructor(fecha: Date, status: string, contenido: any) {
        this.fecha = fecha;
        this.status = status;
        this.contenido = contenido;
    }

}
