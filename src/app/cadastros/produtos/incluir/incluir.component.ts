import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private cadastro : CadastroService,
    private router : Router) { }

  ngOnInit(): void {
  }

  salvarProduto(){
    this.cadastro.incluir(this.produto).subscribe(() => {
      this.router.navigate(['/cadastros/produtos']);
    });
  }
}
