import { Injectable, EventEmitter  } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:no-inferrable-types
  private usuarioAtenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(user: Usuario) {
    if (user.nome === 'usuario@gmail.com' && user.senha === '123456') {
      this.usuarioAtenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAtenticado = false;
      this.mostrarMenu.emit(false);
    }
  }
}
