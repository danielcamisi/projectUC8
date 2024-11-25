<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
>>>>>>> master

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
<<<<<<< HEAD
export class LayoutComponent {
    sidenav = true;


=======
export class LayoutComponent implements OnInit{
  sidenav = false;
  

  constructor(private ngxspinner:NgxSpinnerService){}
  ngOnInit(): void {
    this.ngxspinner.show();

    setTimeout(() => {
      this.ngxspinner.hide();
    }, 2500);
  
  }
    
    
>>>>>>> master
    open(){
      this.sidenav = !this.sidenav;  
   } 
}
