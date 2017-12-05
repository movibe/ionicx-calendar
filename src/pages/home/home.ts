import {Component} from '@angular/core';
import {CalendarModalOptions} from 'ion2-calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  options: CalendarModalOptions

  constructor() {

    this.options = {
      monthFormat: 'MM/yyyy',
      weekdays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
      weekStart: 1,
      color: 'light',
      defaultDate: new Date(),
    }
  }

  onChange($event) {
    console.log($event);
  }

}
