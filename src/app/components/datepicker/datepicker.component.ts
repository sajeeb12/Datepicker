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
import { Component,AfterViewInit, ViewChild,ElementRef } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// import flatpickr from 'flatpickr';
declare const Datepicker: any;
@Component({
	selector: 'ngbd-datepicker-popup',
	standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
	templateUrl: './datepicker.component.html',
})
export class NgbdDatepickerPopup implements AfterViewInit {



  @ViewChild('datepickerInput', { static: true }) datepickerInput!: ElementRef;
  @ViewChild('datepickerButton', { static: true }) datepickerButton!: ElementRef;

  ngAfterViewInit() {
    // Preline's JavaScript for datepicker initialization
    const datepicker = new window.Datepicker(this.datepickerInput.nativeElement, {
      format: 'mm/dd/yyyy',  // Customize date format
      autohide: true,        // Automatically close after date selection
    });

    // Show datepicker when the button is clicked
    this.datepickerButton.nativeElement.addEventListener('click', () => {
      datepicker.show();
    });

    // Update input field with selected date
    this.datepickerInput.nativeElement.addEventListener('changeDate', (event: any) => {
      this.datepickerInput.nativeElement.value = event.detail.date;
    });
  }




  
}



