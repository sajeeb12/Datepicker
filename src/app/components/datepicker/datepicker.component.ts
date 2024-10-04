// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


// @Component({
//   selector: 'app-datepicker',
//   standalone: true,
//   imports: [FormsModule,CommonModule,NgbDatepickerModule],
//   templateUrl: './datepicker.component.html',
//   styleUrl: './datepicker.component.css'
// })
// export class DatepickerComponent {
//  model: { year: number, month: number, day: number } | null = null;

// }
import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'ngbd-datepicker-popup',
	standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
	templateUrl: './datepicker.component.html',
})
export class NgbdDatepickerPopup {
	// model: any;

  // selectToday() {
  //   const today = new Date();
  //   this.model = {
  //     year: today.getFullYear(),
  //     month: today.getMonth() + 1,
  //     day: today.getDate()
  //   };
  // }

  // Almost

  // model: NgbDateStruct | null = null;
  // minDate: NgbDateStruct;
  // maxDate: NgbDateStruct;

  // constructor(private calendar: NgbCalendar) {
  //   const today = this.calendar.getToday();
    
  //   // Set the year range, e.g., 10 years back and 10 years forward
  //   this.minDate = { year: today.year - 100, month: today.month, day: today.day };
  //   this.maxDate = { year: today.year + 100, month: today.month, day: today.day };

  //   // Initialize model with today's date
  //   this.model = today;
  // }

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }


  model: NgbDateStruct | null = null;
  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {
    const today = this.calendar.getToday();
    
    // Set the year range
    this.minDate = { year: today.year - 100, month: today.month, day: today.day };
    this.maxDate = { year: today.year + 100, month: today.month, day: today.day };

    // Initialize model with today's date
    this.model = today;
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  // Method to format date in mm-dd-yyyy
  getFormattedDate(): string {
    if (this.model) {
      return `${this.pad(this.model.month)}-${this.pad(this.model.day)}-${this.model.year}`;
    }
    return '';
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }


 /*model: NgbDateStruct;      // The date model bound to the datepicker
  date: { year: number; month: number };  // The current month/year displayed
  today: NgbDateStruct;      // The 'today' date to set when the user selects "Select Today"

  constructor(private calendar: NgbCalendar) {
    // Initialize the 'today' date using NgbCalendar
    this.today = this.calendar.getToday();

    // Initialize the model with the same value if necessary
    this.model = this.today;

    // Set the initial date value for display
    this.date = { year: this.today.year, month: this.today.month };
  }*/


  
}



