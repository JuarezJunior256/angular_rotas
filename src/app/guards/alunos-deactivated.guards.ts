import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('guarda de desativação');

    // return component.podeMudarRota();

    return component.podeDesativar();
  }
}
