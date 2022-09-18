import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-name-change',
  templateUrl: './name-change.component.html',
  styleUrls: ['./name-change.component.css']
})
export class NameChangeComponent implements OnInit, OnChanges {

  @Input() name: string;
  nameAnterior: string;

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes.hasOwnProperty('name')){
      this.nameAnterior =  changes['name'].previousValue;

    }
  }


  ngOnInit(): void {
  }

}
