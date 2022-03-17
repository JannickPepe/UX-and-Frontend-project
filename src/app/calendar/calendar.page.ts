import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  // the optionsmulti from html got edit as an array hence string should be array now as well
  dateMulti: string[];
  type: 'string';

  // we hook the property optionsMulti to the component and set it tot he pickMode prop as multi
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  constructor() { }

  ngOnInit() {
  }

}
