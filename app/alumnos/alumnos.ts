//crear una clase en typescript
export class Alumno{
    //para definir un modelo:
    constructor (
        public nombre: string,
        public edad: number,
        public carrera: string,
        public semestre: string,
        public aprobado: boolean
    ){
        
    }
}