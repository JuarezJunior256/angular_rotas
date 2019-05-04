import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute,
              private cursoService: CursosService,
              private router: Router) {
    // tslint:disable-next-line:no-string-literal
   // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe((params: any) => {
        // tslint:disable-next-line:no-string-literal
        this.id = params['id'];

        this.curso = this.cursoService.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['/naoEncontrado']);
        }
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
