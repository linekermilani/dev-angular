import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  URL = "http://localhost:3001/produtos"

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.URL);
  }

  buscarPorId(id: number) : Observable<Produto>{
    return this.http.get<Produto>(URL + "/" + id);
  }

  incluir(produto : Produto) : Observable<any>{
    return this.http.post<any>(this.URL, produto);
  }

  atualizar(idAtualizar: number, produtoAlterado: Produto) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, produtoAlterado);
  }

  excluir(id: number) : Observable<Produto> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}
