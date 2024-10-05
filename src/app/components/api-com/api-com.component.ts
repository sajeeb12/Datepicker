import { Component, inject, OnInit } from '@angular/core';
import { ApicallService } from '../../services/apicall.service';

@Component({
  selector: 'app-api-com',
  standalone: true,
  imports: [],
  templateUrl: './api-com.component.html',
  styleUrl: './api-com.component.css'
})
export class ApiComComponent implements OnInit {
  apicallservice = inject(ApicallService);
  ngOnInit(): void {
      this.getUserList()
  }
  
  getUserList(){
    this.apicallservice.getUserList().subscribe({
      next:(value) =>{
        console.log(value)
      },
      error:(err) => {

      }
    })
  }
}
