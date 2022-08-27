export class datosPersonales{
    id:number;
    nombre:string;
    descripcion1:string;
    descripcion2:string;

    constructor(id:number,nombre: string,descripcion1:string,descripcion2:string){
    this.id = id;
    this.nombre=nombre;
    this.descripcion1=descripcion1;
    this.descripcion2=descripcion2;
    }
}