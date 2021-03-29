import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  size = 20;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: MatSliderChange){
    this.size = event.value ?? 20;
  }

}
