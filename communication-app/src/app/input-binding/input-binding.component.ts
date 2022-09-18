import { Client } from './../client.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {


  @Input() nome: string = '';
  //Para criar um alias
  @Input('ultimoNome') lastName: string = '';

  @Input() idade: number = 0;

  clientes: Client[];

  constructor() {
    this.clientes = [
      {id: 1, name: 'Rafael ', age: 18},
      {id: 2, name: 'Fabiana ', age: 40},
      {id: 3, name: 'Juliana ', age: 44}

    ]
  }

  ngOnInit(): void {
  }

}
