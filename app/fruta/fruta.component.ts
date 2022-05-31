import { asLiteral } from "@angular/compiler/src/render3/view/util";
import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
    /*template:
        `
            <h2>Componente de fruta</h2>
            <p>Naranja, Manzana, Pera y Sandia</p>
        `
    */
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';

    public nombre: string;
    public nombre2: string;
    public cantidad: number = 6;
    public existe: boolean = true;

    constructor(){ //metodo que inicializa las variables
        this.nombre = 'Frutas';
        this.nombre2 = 'Ivan';
        this.cantidad = 16;
        this.existe = false;

        //this.holaMundo(this.nombre2); //llamando al metodo
        //this.cambioCantidad(this.cantidad);
    }

    ngOnInit(){
        //this.holaMundo(this.nombre2);
        this.cambioCantidad(this.cantidad);
    }

    //metodo
    //holaMundo(nombre2:string){ //enviando metodo
    //   alert('Bienvenido!!' + nombre2);
    //}

    //funciones
    cambioCantidad(cantidad:number){
        this.cantidad = 70
        //alert('cantidad ' + this.cantidad);
    }
}