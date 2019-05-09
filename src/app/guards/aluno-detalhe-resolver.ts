import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../alunos/aluno';
import { AlunosService } from '../alunos/alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {}

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
     // tslint:disable-next-line:no-string-literal
     const id = route.params['id'];

     return this.alunosService.getAluno(id);
  }

}
