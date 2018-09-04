import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes 
import { ConsultaUsuarioComponent } from './usuarios/consultaUsuario.component'; 
import { CrearUsuarioComponent } from './usuarios/crearUsuario.component'; 

const appRoutes: Routes = [	
	{ path: '', component: ConsultaUsuarioComponent},
	{ path: 'crear', component: CrearUsuarioComponent},
	{ path: 'editar/:id', component: CrearUsuarioComponent},
];

export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);