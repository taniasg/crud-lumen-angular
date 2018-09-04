import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ConsultaUsuarioComponent } from './usuarios/consultaUsuario.component';
import { CrearUsuarioComponent } from './usuarios/crearUsuario.component';

import { UsuarioService } from './usuarios/usuario.service';

@NgModule({
  declarations: [
    AppComponent,    
    ConsultaUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  	UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
