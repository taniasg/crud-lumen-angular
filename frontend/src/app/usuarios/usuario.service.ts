import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Usuario } from './usuario';

@Injectable()

export class UsuarioService {
	url = 'http://localhost:8000/';

	constructor(private http: HttpClient){}

	obtenerUsuarios(): Observable<Usuario> {
  		return this.http.get(this.url + 'usuarios');
	}
	
	obtenerUsuario(id: number): Observable<Usuario> {
        return this.http.get(this.url + 'usuarios/' + id);
    }

	crearUsuario(usuario: Usuario): Observable<any>{
        let params = JSON.stringify(usuario);
        return this.http.post(this.url+'usuarios/crear', params, {});
    }

    editarUsuario(id: number, usuario: Usuario) {
    	let params = JSON.stringify(usuario);
        return this.http.put(this.url+'usuarios/' + id, params, {});
    }

    eliminarUsuario(id:number) {
        return this.http.delete(this.url + 'usuarios/' + id);
    }

}