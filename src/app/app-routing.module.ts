
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guards';
import { AlunosGuard } from './guards/alunos.guards';

const routes: Routes = [
  {path: 'cursos',
   loadChildren: '../app/cursos/cursos.module#CursosModule',
   canActivate: [AuthGuard],
   canActivateChild: [CursosGuard]
  },
  {path: 'alunos',
   loadChildren: '../app/alunos/alunos.module#AlunosModule',
   canActivate: [AuthGuard],
   canActivateChild: [AlunosGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: '',
   component: HomeComponent,
   canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
