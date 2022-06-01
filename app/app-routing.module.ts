import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FrutaComponent } from "./fruta/fruta.component";
import { AlumnoComponent } from "./alumnos/alumnos.component";

const appRoutes:Routes = [
    { path: '', component:FrutaComponent},
    { path: 'fruta', component:FrutaComponent},
    { path: 'alumnos', component:AlumnoComponent},
    { path: '**', component:AlumnoComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);