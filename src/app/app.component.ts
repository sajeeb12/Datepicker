import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponentComponent } from "./components/search-component/search-component.component";
import { FormComponentComponent } from "./components/form-component/form-component.component";
import { NgbdDatepickerPopup } from './components/datepicker/datepicker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponentComponent, FormComponentComponent,NgbdDatepickerPopup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamicInputPractice';
}
