
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivated.guards';


const alunosRoutes: Routes = [
  {path: '', component: AlunosComponent,
    children: [
    {path: 'novo', component: AlunosFormComponent },
    {path: ':id', component: AlunosDetalheComponent},
    {path: ':id/editar', component: AlunosFormComponent,
      canDeactivate: [AlunosDeactivateGuard]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
