import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno: any;
  inscrisao: Subscription;
  private formMudou = false;

  constructor(private alunoService: AlunosService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.inscrisao = this.route.params.subscribe((params) => {
      // tslint:disable-next-line:no-string-literal
      const id = params['id'];

      this.aluno = this.alunoService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscrisao.unsubscribe();
  }

  onInput() {
     this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Deseja Sair da Página?');
    }

    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
