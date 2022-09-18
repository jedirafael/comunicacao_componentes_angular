import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  private _name = "";

  get name() {
    return this._name;
  }

  @Input() set name(name: string) {
    this._name = "Seu nome: " + name
  }
  constructor() { }

  ngOnInit(): void {
  }

}
