import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import {Usuario} from "../../interfaces/usuario.interface";
import {UsuariosService} from "../../services/usuarios.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  usuario:Usuario={
    user:"",
    password:""
  }

  constructor(private _usuariosService:UsuariosService,
              private router:Router, private http: HttpClient) { }

  ngOnInit() {
  }
  guardar(){
    console.log(this.usuario);
    this._usuariosService.nuevoUsuario(this.usuario)
    .subscribe(data=>{
        this.router.navigate(['/usuario',data.valueOf])
    },
  error=>console.error(error));

  }


}
