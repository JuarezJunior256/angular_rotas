import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy {

  aluno: any;
  inscrisao: Subscription;

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

}
