import { Component } from "@angular/core";
import { ClaseOnline } from "./clases";

@Component({
    selector: 'clase',
    templateUrl: './clase-online.component.html'
})

export class ClaseComponent {
    public titulo = 'CLASES ONLINE';
    
    //public clase:ClaseOnline =
        //new ClaseOnline('ivan','tecnologias','septimo','20:00')
    public clases:Array<ClaseOnline>;

    constructor (){
        this.clases = [
            new ClaseOnline ('ivan','tecnologias','septimo','20:00'),
            new ClaseOnline ('alvaro','seminario','septimo','18:00')
        ]
    }
}