import { Component, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../usuarios/usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'crear-usuarios',
  templateUrl: './crearUsuario.component.html',
  providers: [ UsuarioService ]
})

export class CrearUsuarioComponent {
  	public title;

    public formAgregarUsuario: FormGroup;
    public nombre: FormControl;
    public apellido: FormControl;
    public edad: FormControl;

    /* Variable que se utiliza para almacenar el id del 
       usuario que se va a editar */
    public id: number;
    /* Bandera que nos indica si la respuesta del servicio 
       ya fue recibida */
    public respuesta: boolean;
    public editar: boolean;
    public formCreado: boolean;

    public usuario: Usuario;

    constructor(
        private _usuarioService: UsuarioService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.editar = false;
        // Buscar si hay un parametro id en la url
        this._route.params.forEach((params: Params) => {
            this.id = params['id'];
        });

    }

    ngOnInit() {
        if(this.id){
            this.respuesta = false;
            // Si hay un id, se editara un colaborador
            this.editar = true;
            // El formulario aun no ha sido creado
            this.formCreado = false;
            // Enviamos la peticion
            this.obtenerUsuario(this.id);
            this.title = 'Editar usuario';
        }
        else {
            /* La respuesta se declara true para 
            que la vista pueda mostrar el 
            formulario */
            this.respuesta = true;
            this.title = 'Crear Usuario';
            this.usuario = new Usuario();
            this.crearCampos();
            this.crearFormAgregarUsuario();
        }
    }

    ngDoCheck() {
        if(this.usuario && !this.formCreado){
            /* Si hay colaborador, 
            la respuesta del servicio ya fue recibida */
            this.respuesta = true;
            this.crearCampos();
            this.crearFormAgregarUsuario();
            this.formCreado = true;
        }
    }

    crearCampos() {
        this.nombre = new FormControl(this.usuario.nombre, []);
        this.apellido = new FormControl(this.usuario.apellido, []);
        this.edad = new FormControl(this.usuario.edad, []);
    }

    crearFormAgregarUsuario() {
        this.formAgregarUsuario = new FormGroup({
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad
        });
    }

    crearUsuario() {
        this.usuario = this.formAgregarUsuario.value;
        this._usuarioService.crearUsuario(this.usuario).subscribe(
            response => {
                this.usuario = <Usuario> response;
                this._router.navigate(['./'])
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    editarUsuario() {
        this.usuario = this.formAgregarUsuario.value;
        this._usuarioService.editarUsuario(this.id, this.usuario).subscribe(
            response => {
                alert('Usuario guardado exitosamente');
                this._router.navigate(['./']);
            },
            error => {
                console.log(<any>error.error);
            }
        );
    }

    obtenerUsuario(id: number) {
        this._usuarioService.obtenerUsuario(id).subscribe(
            response => {
            	console.log(response);
                this.usuario = response;
            },
            error => {
                console.log(<any>error.error);
            }
        );
    }

    cancelar() {
        this.formAgregarUsuario.reset();
    }

}