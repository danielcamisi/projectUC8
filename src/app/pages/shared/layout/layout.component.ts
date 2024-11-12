import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  sidenav = false;
  

  constructor(private ngxspinner:NgxSpinnerService){}
  ngOnInit(): void {
    this.ngxspinner.show();

    setTimeout(() => {
      this.ngxspinner.hide();
    }, 2500);
  
  }
    
    
    open(){
      this.sidenav = !this.sidenav;  
   } 
}
