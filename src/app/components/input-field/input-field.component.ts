import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input() inputId = '';
  @Input() type = '';
  @Input() placeholder='';
  @Input() labelName = '';
  @Input() value:any='';
  @Input() control!:FormControl;
  @Output() valueChange = new EventEmitter<string>();
  inputValue:string='';

  onInputChange(){
    this.valueChange.emit(this.value)
  }

}
