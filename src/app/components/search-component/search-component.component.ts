import { Component } from '@angular/core';
import { InputFieldComponent } from "../input-field/input-field.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [InputFieldComponent,FormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
  name:string ='';
  email:string='';
  age:number = 0;
}
