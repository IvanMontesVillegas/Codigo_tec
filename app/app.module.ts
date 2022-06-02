import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importando las variables de rutas----appRoutProviders brindara servicios de rutas
import { routing, appRoutingProviders } from './app-routing.module';
//importando los componentes
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { empleadosComponent } from './empleados/empleados.component';
import { AlumnoComponent } from './alumnos/alumnos.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contactos/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    empleadosComponent,
    AlumnoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
