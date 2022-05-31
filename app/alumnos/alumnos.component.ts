import { Component } from "@angular/core";
import { Alumno } from "./alumnos"; //para importar ficheros o clases

@Component({
    selector: 'alumno',
    templateUrl: './alumnos.components.html'
})

export class AlumnoComponent {
    public titulo = 'Titulo del componente Alumno';
    
    //crear objeto alumno
    public alumno:Alumno = 
        new Alumno('Ana Aguilera', 25, 'Ing de Sistemas', '4to Semestre', true)
    
    public alumnos:Array<Alumno>;
    public alumno_externo:boolean;
    
    public color:string;
    public colorBlanco:string;
    public colorNegro:string;

    //constructor
    constructor(){
        this.alumnos = [
            new Alumno('Ana ', 25, 'Ing de Sistemas', '4to Semestre', true),
            new Alumno('Beto B', 25, 'Ing de Sistemas', '5to Semestre', false),
            new Alumno('Ivan 1234', 25, 'Ing de Sistemas', '4to Semestre', true)
        ]
        
        this.alumno_externo = true;
        
        this.color='green';
        this.colorBlanco='red';
        this.colorNegro='black';
    }

    cambiarExterno(valor:boolean){
        this.alumno_externo = valor;
    }
}
//p2-mostrar lista de alumnos aprobados y reprobados por separado
//p3-realizar un tablero de ajedrez en blanco y negro
