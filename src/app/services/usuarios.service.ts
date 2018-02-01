import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Usuario} from '../interfaces/usuario.interface';
import 'rxjs/RX';


@Injectable()
export class UsuariosService {

    usuariosURL:string="http://45.40.139.98:8000/web/login"

  constructor(private http:HttpClient) {


  }

nuevoUsuario(usuario:Usuario){

    let body=JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Basic QXBwd2hlcmVEZXY6NzMwYTA5NGQtYjgyNC00ZjFkLWEzZjEtNjlkMTNiNzYwMjQ1',
      'Accept':'application/json'
    });

    return this.http.post(this.usuariosURL,body,{headers})

  }

}
