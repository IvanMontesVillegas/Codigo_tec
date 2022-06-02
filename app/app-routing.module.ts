import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FrutaComponent } from "./fruta/fruta.component";
import { AlumnoComponent } from "./alumnos/alumnos.component";
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contactos/contacto.component";

const appRoutes:Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'fruta', component:FrutaComponent },
    { path: 'alumnos', component:AlumnoComponent },
    { path: 'contacto', component:ContactoComponent },
    { path: '**', component:ContactoComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);