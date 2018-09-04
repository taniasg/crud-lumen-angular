import { Component } from '@angular/core';
import { UsuarioService } from '../usuarios/usuario.service';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'consulta-usuarios',
  templateUrl: './consultaUsuario.component.html',
  providers: [UsuarioService]
})

export class ConsultaUsuarioComponent {
  title = 'Consulta de Usuarios';
  usuarios :  Usuario;

  constructor(private _usuarioService: UsuarioService) {
  }

  ngOnInit() {
  	this.obtenerUsuarios();
  }

  obtenerUsuarios() {
  	this._usuarioService.obtenerUsuarios().subscribe(
  		response => {
  			this.usuarios = response;
  			console.log(this.usuarios);
  		},
  		error => {
  			console.log(<any>error);
  		});
  }

  eliminarUsuario(id: number) {
    this._usuarioService.eliminarUsuario(id).subscribe(
      response => {
        alert(response);
        this.obtenerUsuarios();

      },
      error => {
        console.log(<any>error);
      });
  }

}