import {Component} from '@angular/core';
import {CalendarComponentOptions} from 'ion2-calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  options: CalendarComponentOptions

  constructor() {

    this.options = {
      monthFormat: 'MM/yyyy',
      weekdays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
      monthPickerFormat: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
      weekStart: 1,
      color: 'light',
    }
  }

  onChange($event) {
    console.log($event);
  }

}
