import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos = Produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
