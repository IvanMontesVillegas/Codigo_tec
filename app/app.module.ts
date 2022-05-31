import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { empleadosComponent } from './empleados/empleados.component';
import { AlumnoComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    empleadosComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
