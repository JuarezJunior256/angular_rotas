import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // tslint:disable-next-line:no-string-literal
   // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe((params: any) => {
        // tslint:disable-next-line:no-string-literal
        this.id = params['id'];
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
