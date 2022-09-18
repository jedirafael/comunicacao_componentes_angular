import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import {MatCardModule} from '@angular/material/card';
import { ChildItemComponent } from './event/child-item/child-item.component'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemClienteComponent } from './clientes/item-cliente/item-cliente.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TimerComponent } from './parent-child/timer/timer.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NameChangeComponent } from './on-changes/name-change/name-change.component';
import { InterceptarComponent } from './interceptar/interceptar.component';
import { NameComponent } from './interceptar/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientesComponent,
    ItemClienteComponent,
    ParentChildComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangeComponent,
    InterceptarComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
