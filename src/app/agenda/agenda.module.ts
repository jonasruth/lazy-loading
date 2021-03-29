import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';


@NgModule({
  declarations: [AgendaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgendaRoutingModule,
    MatSliderModule,
  ],
})
export class AgendaModule {}
