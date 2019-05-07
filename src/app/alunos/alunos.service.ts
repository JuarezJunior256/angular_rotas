import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Eduardo', email: 'aluno1@gmail.com'},
    {id: 2, nome: 'Felipe', email: 'aluno2@gmail.com'},
    {id: 3, nome: 'Caio', email: 'aluno3@gmail.com'},
    {id: 4, nome: 'Junior', email: 'aluno4@gmail.com'},
    {id: 5, nome: 'Pedro', email: 'aluno5@gmail.com'}
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
      // tslint:disable-next-line:triple-equals
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
