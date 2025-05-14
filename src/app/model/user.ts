export class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    cellphone: string;
    fechaNac: string;
    detalleUsuarioId: number;

    constructor(id: number, firstname: string, lastname: string, email: string, cellphone: string, fechaNac: string, detalleUsuarioId: number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.cellphone = cellphone;
        this.fechaNac = fechaNac;
        this.detalleUsuarioId = detalleUsuarioId;
    }

    
}
