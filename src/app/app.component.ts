import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Rotas';

  // tslint:disable-next-line:no-inferrable-types
  mostrarMenu: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
