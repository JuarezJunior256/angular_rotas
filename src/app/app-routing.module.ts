
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path: 'cursos',
   loadChildren: '../app/cursos/cursos.module#CursosModule',
   canActivate: [AuthGuard]
  },
  {path: 'alunos',
   loadChildren: '../app/alunos/alunos.module#AlunosModule',
   canActivate: [AuthGuard]
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
