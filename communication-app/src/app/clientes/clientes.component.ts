import { Component, OnInit } from '@angular/core';
import { Cliente } from './client.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  name: string;
  age: number;

  clientes: Cliente[] = []

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    this.clientes.push({ name: this.name, age: this.age })
    this.name = ""
    this.age = 0
  }

  deleteCliente(index: number) {
    this.clientes.splice(index, 1)

  }
  updateCliente(c: Cliente, i: number) {
    this.clientes[i].name = c.name
    this.clientes[i].age = c.age
  }


}
