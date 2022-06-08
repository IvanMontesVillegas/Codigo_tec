import { Time } from "@angular/common";

//crear clase
export class ClaseOnline{
    //modelo
    constructor(
        public docente: string,
        public materia: string,
        public semestre: string,
        public horario: string
    ){

    }
}