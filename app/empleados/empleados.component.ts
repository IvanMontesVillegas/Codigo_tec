import { asLiteral } from "@angular/compiler/src/render3/view/util";
import { Component } from "@angular/core";

@Component({
    selector: 'empleado',
    templateUrl: './empleados.component.html'
})

export class empleadosComponent {
    public nombreEmpleado : string;
    public edad : number;
    public mayorEdad: boolean;

    public nombreEmpleado2 : string;

    constructor(){
        this.nombreEmpleado = 'Ivan montes';
        this.edad = 28;
        this.mayorEdad = true;

        this.nombreEmpleado2 = 'Ana Aguilar';
        
    }
}