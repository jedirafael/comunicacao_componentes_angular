import { Cliente } from './../client.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-cliente',
  templateUrl: './item-cliente.component.html',
  styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() updateClient = new EventEmitter<Cliente>();
  @Output() removeClient = new EventEmitter<any>();

  onEdit: boolean = false;

  name: string;
  age: number;

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.onEdit = true;
    this.name = this.cliente.name
    this.age = this.cliente.age
  }

  save() {
    this.onEdit = false;
    this.updateClient.emit(
      { name: this.name, age: this.age }
    );
  }
  remove() {
    this.removeClient.emit();
   }

}
