import { Component } from '@angular/core';
import { InputFieldComponent } from "../input-field/input-field.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [InputFieldComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  personForm = new FormGroup({
    loginId : new FormControl('',),
    password : new FormControl('')
  })

  onSubmit(){
    console.log(this.personForm.value)
  }
}
